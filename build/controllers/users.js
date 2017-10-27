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
        });
      });
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
      res.status(200).send({ user: user });
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
        if (user.isValidPassword(req.body.password, user)) {
          var username = user.username,
              email = user.email,
              id = user.id;

          var token = (0, _helpers.generateToken)({ username: username, email: email, id: id });
          return res.status(202).send({
            token: token
          });
        }
        return res.status(401).send({ error: 'Invalid password and username', status: 401 });
      }
      res.status(404).send({ error: 'User does not exist', status: 404 });
    });
  },
  searchUsers: function searchUsers(req, res) {
    if (req.params.page < 0) {
      return res.status(403).send({ error: { message: 'Page must be a positive integer' } });
    }
    return _models2.default.Users.findAndCountAll({
      limit: 1,
      offset: req.params.page * 1,
      where: { username: { $iLike: '%' + req.params.query + '%', $ne: req.decoded.data.username } },
      attributes: ['id', 'username']
    }).then(function (users) {
      var pages = Math.ceil(users.count / 1);
      users = users.rows;
      var searchData = [];
      if (users.length === 0) {
        res.status(200).send({ users: searchData, pages: pages });
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
            res.status(200).send({ users: searchData, pages: pages });
          }
        });
      });
    }).catch(function () {
      res.status(500).send({ error: { message: 'Unkown server error' } });
    });
  },
  updatePassword: function updatePassword(req, res) {
    _models2.default.PasswordRequests.findOne({
      where: { hash: req.params.hash }
    }).then(function (result) {
      if (result) {
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
      }
      return res.status(400).send({ message: 'Invalid hash', status: 200 });
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

    if (process.env.NODE_ENV === 'production') {
      message = 'Hello ' + email + ',      if you have requested for a new password, please follow       <a href=\'https://postit-michael.herokuapp.com/#/new-password/' + hash + '\'>       this link</a> to reset your password';
    }

    _models2.default.Users.findOne({
      where: { email: email }
    }).then(function (foundUser) {
      if (!foundUser) {
        return res.status(404).send({ error: 'Email does not have an account', status: 404 });
      }
      _models2.default.PasswordRequests.findOne({
        where: { email: email }
      }).then(function (response) {
        if (!response) {
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
        if (process.env.NODE_ENV === 'test') {
          return res.status(200).send({ message: 'Request made', hash: hash, status: 200 });
        }
        return res.status(200).send({ message: 'Request made', status: 200 });
      });
    });
  }
};
//# sourceMappingURL=users.js.map