import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import models from '../models';

const newRes = {};
const salt = bcrypt.genSaltSync(5);
export default {
  create(req, res) {
    if (!req.body.email || req.body.email.trim() === '') {
      return res.status(400)
      .send({
        error: { message: 'email cannot be empty' },
        data: req.body
      });
    }

    if (!req.body.username || req.body.username.trim() === '') {
      return res.status(400)
      .send({
        error: { message: 'username cannot be empty' },
        data: req.body
      });
    }

    if (!req.body.password || req.body.password.trim() === '') {
      return res.status(400)
      .send({
        error: { message: 'password cannot be empty' },
        data: req.body
      });
    }

    if (!req.body.phone || req.body.phone.trim() === '') {
      return res.status(400)
      .send({
        error: { message: 'phone cannot be empty' },
        data: req.body
      });
    }

    if (!req.body.password || req.body.password.trim() === '') {
      return res.status(400)
      .send({
        error: { message: 'password cannot be empty' },
        data: req.body
      });
    }

    if (!req.body.phone || req.body.phone.trim() === '') {
      return res.status(400)
      .send({
        error: { message: 'phone cannot be empty' },
        data: req.body
      });
    }

    const hashedPass = bcrypt
    .hashSync(req.body.password, salt, null);
    return models.Users
      .create({
        username: req.body.username.trim(),
        email: req.body.email.trim(),
        password: hashedPass,
        phone: req.body.phone.trim()
      })
      .then((user) => {
        const data = {};
        data.id = user.id;
        data.username = user.username;
        data.email = user.email;
        data.phone = user.phone;
        data.createdAt = user.createdAt;
        res.status(201).send({ data });
      })
      .catch((error) => {
        if (error.errors[0].message === 'username must be unique') {
          newRes.error = { message: 'username already exists' };
        }
        if (error.errors[0].message === 'email must be unique') {
          newRes.error = { message: 'email already exists' };
        }
        if (error.errors[0].message === 'Validation isEmail on email failed') {
          newRes.error = { message: 'not an email' };
        }
        if (!newRes.error) {
          newRes.error = { message: error.errors[0].message };
        }

        newRes.data = req.body;
        res.status(400).send(newRes);
      });
  },
  fetch(req, res) {
    return models.Users
      .findAll({ attributes:
        ['id', 'username', 'email', 'phone', 'createdAt', 'updatedAt'] })
      .then(users => res.status(200).send({ users }))
      .catch((error) => {
        newRes.message = error.message;
        newRes.code = 400;
        newRes.success = false;
        res.status(newRes.code).send(newRes);
      });
  },
  fetchMe(req, res) {
    const username = req.decoded.data.username;
    models.Users
    .find({
      include: [{
        model: models.Groups,
        as: 'groups',
        required: false,
        attributes: ['id', 'name'],
        through: { attributes: [] }
      }],
      where: { username },
      attributes: ['id', 'email', 'username', 'createdAt']
    })
    .then((user) => {
      let groups = '';
      console.log('GROUPS:::::>>>>>>>>>>>>>>>>>>', user.groups);
      if (user.groups !== undefined) {
        groups = user.groups;
      } else {
        res.status(200).send({ data: user });
        return;
      }
      if (user.groups.length !== 0) {
        let n = 1;
        const newGroups = [];
        groups = groups.map((group, key) => {
          newGroups.push(group);
          models.Messages
          .findAll({
            where: { to_group: group.id },
            attributes: ['from_user', 'readBy']
          }).then(
            (result) => {
              if (newGroups[key] !== undefined) {
                let m = 0;
                newGroups[key].dataValues.count = 0;
                if (result.length === 0) {
                  if (n === groups.length) {
                    res.status(200).send({ data: user });
                  }
                } else {
                  result.map((message) => {
                    m += 1;
                    const readBy = message.dataValues.readBy.split(',');
                    let count = 0;
                    let hasRead = false;
                    readBy.map((readByUsername) => {
                      if (readByUsername === req.decoded.data.username) {
                        hasRead = true;
                      }
                      if (message.dataValues.from_user === req.decoded.data.username) {
                        hasRead = true;
                      }
                      return readByUsername;
                    });
                    if (!hasRead) {
                      count += 1;
                    }
                    newGroups[key].dataValues.count += count;
                    user.groups = newGroups;
                    if (count === 100) {
                      groups.length = n;
                      m = result.length;
                      count = '99+';
                      newGroups[key].dataValues.count = count;
                      user.groups = newGroups;
                    }
                    if (n === groups.length && m === result.length) {
                      res.status(200).send({ data: user });
                    }
                    return message;
                  });
                }
                n += 1;
              } else {
                res.status(200).send({ data: user });
              }
            }
          );
          return newGroups;
        });
      } else {
        res.status(200).send({ data: user });
      }
    })
    .catch((error) => {
      newRes.message = error.message;
      newRes.code = 400;
      newRes.success = false;
      res.status(newRes.code).send(newRes);
    });
  },
  auth(req, res) {
    models.Users
      .findAll({ where: { username: [req.body.username] } })
      .then((user) => {
        const givenPassword = req.body.password;
        if (user[0]) {
          if (bcrypt.compareSync(givenPassword, user[0].password)) {
          // create a token
            const token = jwt.sign({
              data: user[0]
            }, 'Armageddon', { expiresIn: '48h' });

            res.status(202).send({
              token,
              data: { username: user[0].username, email: user[0].email, id: user[0].id }
            });
          } else {
            res.status(401).send({
              error: { message: 'Invalid password and username' },
              data: req.body
            });
          }
          return;
        }

        res.status(404).send({
          error: { message: 'Invalid password and username' },
          data: req.body
        });
      });
  },
  search(req, res) {
    return models.Users
    .findAll({
      limit: 10,
      offset: req.params.page * 10,
      where: { username: { $iLike: `%${req.params.term}%`, $ne: req.decoded.data.username } },
      attributes: ['id', 'username']
    })
    .then((users) => {
      const newUsers = [];
      if (users.length === 0) {
        res.status(200).send({ data: newUsers });
        return;
      }
      users.map((user, key) => {
        newUsers.push(user.dataValues);
        models.GroupUsers
        .find({
          where: { userId: user.id, groupId: req.params.group },
          attributes: ['userId']
        }).then((result) => {
          if (result !== null) {
            newUsers[key].ingroup = true;
          } else {
            newUsers[key].ingroup = false;
          }
          return newUsers;
        });
      });
      let n = 0;
      users.map((user, key) => {
        newUsers.push(user.dataValues);
        return models.GroupUsers
        .find({
          where: { userId: user.id, groupId: req.params.group },
          attributes: ['userId']
        }).then((result) => {
          n += 1;
          if (result !== null) {
            newUsers[key].ingroup = true;
          } else {
            newUsers[key].ingroup = false;
          }
          if (n === users.length) {
            res.status(200).send({ data: newUsers });
          }
        });
      });
    })
    .catch((error) => {
      newRes.message = error.message;
      newRes.code = 400;
      newRes.success = false;
      res.status(newRes.code).send(newRes);
    });
  },
  updatePassword(req, res) {
    const hashedPass = bcrypt
    .hashSync(req.body.password, salt, null);
    models.PasswordRequests
    .findOne({
      where: { hash: req.params.hash }
    }).then((result) => {
      const email = result.dataValues.email;
      const date = new Date();
      const now = `${date.toString().split(' ')[2]}:${date.toString().split(' ')[4]}`;
      if (now > result.dataValues.expiresIn) {
        res.status(200).send({ data: { error: { message: 'Invalid link' } } });
        return;
      }
      return models.Users
        .update(
          { password: hashedPass },
          { where: { email } }
        ).then(() =>
          res.status(200).send({ data: { message: 'Password Reset Successful' } })
        );
    });
  },
  passwordRequest(req, res) {
    const email = req.body.email;
    const secret = req.body.email;
    const hash = crypto
    .createHash('sha256', secret)
    .update(Date.now().toString())
    .digest('hex');
    const date = new Date();
    date.setHours(date.getHours() + 1);
    const expiresIn = `${date.toString().split(' ')[2]}:${date.toString().split(' ')[4]}`;
    if (email === undefined || email.trim() === '') {
      res.status(400).send({ data: { error: { message: 'valid email is required' } } });
      return;
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'xxxx',
        pass: 'xxxx'
      }
    });

    const mailOptions = {
      from: 'xxxx',
      to: email,
      subject: 'Password Reset Request',
      html: `Hello ${email}, if you have requested for a new password, please follow \n<a href='http://localhost:3000/#/new-password/${hash}'>this link</a> to reset your password`
    };

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
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              res.status(503).send({ data: { error: { message: error } } });
            } else {
              res.status(200).send({ data: { message: info } });
            }
          });
        });
      } else {
        response.update({
          hash,
          expiresIn
        }).then(() => {
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              res.status(503).send({ data: { error: { message: error } } });
            } else {
              res.status(200).send({ data: { message: info } });
            }
          });
        });
      }
    });
  }
};
