import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';
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
    return models.Users
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
      res.status(200).send({ data: user });
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
              error: { message: 'Invalid password and username -' },
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
  }
};
