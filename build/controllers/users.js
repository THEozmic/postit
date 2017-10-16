'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var newRes = {};
exports.default = {
  createUser: function createUser(req, res) {
    if ((0, _helpers.validateNewUser)(req, res) !== 'valid') {
      return;
    }
    _models2.default.Users.findOne({ where: { username: req.body.username } }).then(function (foundUsername) {
      if (foundUsername) {
        return res.status(409).send({ error: 'Username already taken', status: 409 });
      }
      _models2.default.Users.findOne({ where: { email: req.body.email } }).then(function (foundEmail) {
        if (foundEmail) {
          return res.status(409).send({ error: 'Email already exists', status: 409 });
        }
        return _models2.default.Users.create({
          username: req.body.username.trim().toLowerCase(),
          phone: req.body.phone.trim(),
          email: req.body.email.trim().toLowerCase(),
          password: req.body.password
        }).then(function (user) {
          user.save().then(function (savedUser) {
            var token = (0, _helpers.generateToken)(savedUser);
            savedUser = savedUser.filterUserDetails(savedUser);
            return res.status(201).send({ message: 'Signup success', user: savedUser, token: token });
          }).catch(function (error) {
            res.status(500).send({ error: error.message });
          });
        }).catch(function (error) {
          res.status(500).send({ error: error.message });
        });
      });
    });
  },
  fetchAllUsers: function fetchAllUsers(req, res) {
    return _models2.default.Users.findAll({ attributes: ['id', 'username', 'email', 'phone', 'createdAt', 'updatedAt'] }).then(function (users) {
      return res.status(200).send({ users: users });
    }).catch(function (error) {
      res.status(500).send({ error: error });
    });
  },
  fetchCurrentUser: function fetchCurrentUser(req, res) {
    var username = req.decoded.data.username;
    _models2.default.Users.find({
      include: [{
        model: _models2.default.Groups,
        as: 'groups',
        required: false,
        attributes: ['id', 'name', 'desc'],
        through: { attributes: [] }
      }],
      where: { username: username },
      attributes: ['id', 'email', 'username', 'createdAt']
    }).then(function (user) {
      if (!user) {
        return res.status(404).send({ error: 'User does not exist', status: 404 });
      }
      var groups = user.groups;
      if (!groups) {
        return res.status(200).send({ data: user });
      }
      if (user.groups.length !== 0) {
        var n = 1;
        groups.map(function (group) {
          _models2.default.Messages.findAll({
            where: { toGroup: group.id },
            attributes: ['fromUser', 'readBy']
          }).then(function (messages) {
            if (group) {
              var m = 0;
              group.dataValues.unreadMessagesCount = 0;
              if (messages.length === 0) {
                if (n === groups.length) {
                  res.status(200).send({ user: user });
                }
              } else {
                messages.map(function (message) {
                  m += 1;
                  var readBy = message.readBy.split(',');
                  var count = 0;
                  var hasRead = false;
                  readBy.map(function (readByUsername) {
                    if (readByUsername === req.decoded.data.username) {
                      hasRead = true;
                    }
                    if (message.fromUser === req.decoded.data.username) {
                      hasRead = true;
                    }
                    return readByUsername;
                  });
                  if (!hasRead) {
                    count += 1;
                  }
                  group.dataValues.unreadMessagesCount += count;
                  if (count === 100) {
                    groups.length = n;
                    m = groups.length;
                    count = '99+';
                    group.dataValues.unreadMessagesCount = count;
                  }
                  if (n === groups.length && m === messages.length) {
                    return res.status(200).send({ user: user });
                  }
                  return message;
                });
              }
              n += 1;
            } else {
              res.status(200).send({ user: user });
            }
          });
          return groups;
        });
      } else {
        res.status(200).send({ user: user });
      }
    }).catch(function (error) {
      res.status(500).send({ error: error.message, status: 500 });
    });
  },
  authenticateUser: function authenticateUser(req, res) {
    if (!req.body.username) {
      return res.status(400).send({ error: 'Username is required', status: 400 });
    }

    if (!req.body.password) {
      return res.status(400).send({ error: 'Password is required', status: 400 });
    }

    _models2.default.Users.findOne({ where: { username: [req.body.username.toLowerCase()] } }).then(function (user) {
      if (user) {
        console.log(user, 'userrr');
        console.log('gets here');
        console.log(req.body.password, 'password---here');
        if (user.isValidPassword(req.body.password, user)) {
          console.log('---------');
          var token = (0, _helpers.generateToken)(user);
          console.log('gets here 2');

          return res.status(202).send({
            token: token,
            userData: { id: user.id, email: user.email, username: user.username }
          });
        }
        console.log('gets here 3');

        return res.status(401).send({ error: 'Invalid password and username', status: 401 });
      }

      console.log('gets here 4');

      res.status(404).send({ error: 'User does not exist', status: 404 });
    }).catch(function (error) {
      return res.status(500).send({ error: error.message, status: 500 });
    });
  },
  searchUsers: function searchUsers(req, res) {
    return _models2.default.Users.findAll({
      limit: 10,
      offset: req.params.page * 10,
      where: { username: { $iLike: '%' + req.params.term + '%', $ne: req.decoded.data.username } },
      attributes: ['id', 'username']
    }).then(function (users) {
      var searchData = [];
      if (users.length === 0) {
        res.status(200).send({ users: searchData });
      }
      var n = 0;
      users.map(function (user, key) {
        searchData.push(user.dataValues);
        return _models2.default.GroupUsers.find({
          where: { userId: user.id, groupId: req.params.group },
          attributes: ['userId']
        }).then(function (result) {
          n += 1;
          if (result !== null) {
            searchData[key].ingroup = true;
          } else {
            searchData[key].ingroup = false;
          }
          if (n === users.length) {
            res.status(200).send({ users: searchData });
          }
        });
      });
    }).catch(function (error) {
      newRes.message = error.message;
      newRes.code = 400;
      newRes.success = false;
      res.status(newRes.code).send();
    });
  },
  updatePassword: function updatePassword(req, res) {
    _models2.default.PasswordRequests.findOne({
      where: { hash: req.params.hash }
    }).then(function (result) {
      var email = result.dataValues.email;
      var date = new Date();
      var now = date.toString().split(' ')[2] + ':' + date.toString().split(' ')[4];
      if (now > result.dataValues.expiresIn) {
        res.status(400).send({ message: 'Link has expired', status: 400 });
        return;
      }
      return _models2.default.Users.update({ password: _bcryptNodejs2.default.hashSync(req.body.password, _bcryptNodejs2.default.genSaltSync(5))
      }, { where: { email: email } }).then(function () {
        return res.status(200).send({ message: 'Password Reset Successful', status: 200 });
      });
    });
  },
  passwordRequest: function passwordRequest(req, res) {
    var email = req.body.email;
    var hash = _crypto2.default.createHash('sha256', process.env.PASSWORD_HASH_SECRET).update(Date.now().toString()).digest('hex');
    var date = new Date();
    date.setHours(date.getHours() + 1);
    var expiresIn = date.toString().split(' ')[2] + ':' + date.toString().split(' ')[4];
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(req.body.email)) {
      return res.status(400).send({ error: 'Invalid email', status: 400 });
    }
    var message = 'Hello ' + email + ', if you have requested for a new password, please follow  <a href=\'http://localhost:3000/#/new-password/' + hash + '\'>  this link</a> to reset your password';

    _models2.default.Users.findOne({
      where: { email: email }
    }).then(function (foundUser) {
      if (!foundUser) {
        return res.status(404).send({ error: 'Email does not have an account', status: 404 });
      }
      _models2.default.PasswordRequests.findOne({
        where: { email: email }
      }).then(function (response) {
        if (response === null) {
          _models2.default.PasswordRequests.create({
            email: email,
            expiresIn: expiresIn,
            hash: hash
          }).then(function () {
            (0, _helpers.sendMail)(email, { subject: 'Password Reset Request', message: message });
          });
        } else {
          response.update({
            hash: hash,
            expiresIn: expiresIn
          }).then(function () {
            (0, _helpers.sendMail)(email, { subject: 'Password Reset Request', message: message });
          });
        }
        return res.status(200).send({ message: 'Request made', status: 200 });
      });
    });
  }
};
//# sourceMappingURL=users.js.map