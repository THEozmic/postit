import crypto from 'crypto';
import models from '../models';
import { sendMail, validateNewUser, generateToken } from '../helpers';

require('dotenv').config();

const newRes = {};
export default {
  createUser(req, res) {
    if (validateNewUser(req, res) !== 'valid') {
      return;
    }
    models.Users
    .findOne({ where: { username: req.body.username } })
    .then((foundUsername) => {
      if (foundUsername) {
        return res.status(409)
        .send({ error: 'Username already taken', status: 409 });
      }
      models.Users
        .findOne({ where: { email: req.body.email } })
        .then((foundEmail) => {
          if (foundEmail) {
            return res.status(409)
            .send({ error: 'Email already exists', status: 409 });
          }
          return models.Users
            .create({
              username: req.body.username.trim().toLowerCase(),
              phone: req.body.phone.trim(),
              email: req.body.email.trim().toLowerCase(),
              password: req.body.password
            })
            .then((user) => {
              user.save()
                .then((savedUser) => {
                  const token = generateToken(savedUser);
                  savedUser = savedUser.filterUserDetails(savedUser);
                  return res.status(201).send({ message: 'Signup success', user: savedUser, token });
                }).catch((error) => {
                  console.log(error.message, 'this is the error');
                  res.status(500).send({ error: error.message });
                });
            })
            .catch((error) => {
              console.log(error.message, 'this is the error');
              res.status(500).send({ error: error.message });
            });
        });
    });
  },
  fetchAllUsers(req, res) {
    return models.Users
      .findAll({ attributes:
        ['id', 'username', 'email', 'phone', 'createdAt', 'updatedAt'] })
      .then(users => res.status(200).send({ users }))
      .catch((error) => {
        res.status(500).send({ error });
      });
  },
  fetchCurrentUser(req, res) {
    const username = req.decoded.data.username;
    models.Users
    .find({
      include: [{
        model: models.Groups,
        as: 'groups',
        required: false,
        attributes: ['id', 'name', 'desc'],
        through: { attributes: [] }
      }],
      where: { username },
      attributes: ['id', 'email', 'username', 'createdAt']
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: 'User does not exist', status: 404 });
      }
      const groups = user.groups;
      if (!groups) {
        return res.status(200).send({ data: user });
      }
      if (user.groups.length !== 0) {
        let n = 1;
        groups.map((group) => {
          models.Messages
          .findAll({
            where: { toGroup: group.id },
            attributes: ['fromUser', 'readBy']
          }).then(
            (messages) => {
              if (group) {
                let m = 0;
                group.dataValues.unreadMessagesCount = 0;
                if (messages.length === 0) {
                  if (n === groups.length) {
                    res.status(200).send({ user });
                  }
                } else {
                  messages.map((message) => {
                    m += 1;
                    const readBy = message.readBy.split(',');
                    let count = 0;
                    let hasRead = false;
                    readBy.map((readByUsername) => {
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
                      return res.status(200).send({ user });
                    }
                    return message;
                  });
                }
                n += 1;
              } else {
                res.status(200).send({ user });
              }
            }
          );
          return groups;
        });
      } else {
        res.status(200).send({ user });
      }
    })
    .catch((error) => {
      res.status(500).send({ error: error.message, status: 500 });
    });
  },
  authenticateUser(req, res) {
    if (!req.body.username) {
      return res.status(400).send({ error: 'Username is required', status: 400 });
    }

    if (!req.body.password) {
      return res.status(400).send({ error: 'Password is required', status: 400 });
    }

    models.Users
      .findOne({ where: { username: [req.body.username.toLowerCase()] } })
      .then((user) => {
        if (user) {
          if (user.isValidPassword(req.body.password, user)) {
            const token = generateToken(user);
            return res.status(202).send({
              token,
              userData: { id: user.id, email: user.email, username: user.username }
            });
          }
          return res.status(401).send({ error: 'Invalid password and username', status: 401 });
        }
        res.status(404).send({ error: 'User does not exist', status: 404 });
      })
      .catch(error => res.status(500).send({ error: error.message, status: 500 }));
  },
  searchUsers(req, res) {
    return models.Users
    .findAll({
      limit: 10,
      offset: req.params.page * 10,
      where: { username: { $iLike: `%${req.params.term}%`, $ne: req.decoded.data.username } },
      attributes: ['id', 'username']
    })
    .then((users) => {
      const searchData = [];
      if (users.length === 0) {
        res.status(200).send({ users: searchData });
      }
      users.map((user, key) => {
        searchData.push(user.dataValues);
        return models.GroupUsers
        .find({
          where: { userId: user.id, groupId: req.params.group },
          attributes: ['userId']
        }).then((result) => {
          if (result !== null) {
            searchData[key].ingroup = true;
          } else {
            searchData[key].ingroup = false;
          }
        });
      });
      let n = 0;
      users.map((user, key) => {
        searchData.push(user.dataValues);
        return models.GroupUsers
        .find({
          where: { userId: user.id, groupId: req.params.group },
          attributes: ['userId']
        }).then((result) => {
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
    })
    .catch((error) => {
      newRes.message = error.message;
      newRes.code = 400;
      newRes.success = false;
      res.status(newRes.code).send();
    });
  },
  updatePassword(req, res) {
    models.PasswordRequests
    .findOne({
      where: { hash: req.params.hash }
    }).then((result) => {
      const email = result.dataValues.email;
      const date = new Date();
      const now = `${date.toString().split(' ')[2]}:${date.toString().split(' ')[4]}`;
      if (now > result.dataValues.expiresIn) {
        res.status(400).send({ message: 'Link has expired', status: 400 });
        return;
      }
      return models.Users
        .update(
          { password: req.body.password },
          { where: { email } }
        ).then(() =>
          res.status(200).send({ message: 'Password Reset Successful', status: 200 })
        );
    });
  },
  passwordRequest(req, res) {
    const email = req.body.email;
    const hash = crypto
    .createHash('sha256', process.env.PASSWORD_HASH_SECRET)
    .update(Date.now().toString())
    .digest('hex');
    const date = new Date();
    date.setHours(date.getHours() + 1);
    const expiresIn = `${date.toString().split(' ')[2]}:${date.toString().split(' ')[4]}`;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(req.body.email)) {
      return res.status(400)
      .send({ error: 'Invalid email', status: 400 });
    }
    const message = `Hello ${email},\
 if you have requested for a new password, please follow \
 <a href='http://localhost:3000/#/new-password/${hash}'>this link</a> to reset your password`;

    models.Users
    .findOne({
      where: { email }
    }).then((foundUser) => {
      if (!foundUser) {
        return res.status(404).send({ error: 'Email does not have an account', status: 404 });
      }
      models.PasswordRequests
      .findOne({
        where: { email }
      }).then((response) => {
        if (response === null) {
          models.PasswordRequests
          .create({
            email,
            expiresIn,
            hash
          }).then(() => {
            sendMail(email, { subject: 'Password Reset Request', message });
          });
        } else {
          response.update({
            hash,
            expiresIn
          }).then(() => {
            sendMail(email, { subject: 'Password Reset Request', message });
          });
        }
      });
      res.status(200).send({ message: 'Request made', status: 200 });
    });
  }
};
