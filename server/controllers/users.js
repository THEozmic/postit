import jwt from 'jsonwebtoken';
import models from '../models';

const newRes = {};
export default {
  create(req, res) {
    return models.Users
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
      })
      .then((user) => {
        newRes.message = user.message;
        newRes.code = 201;
        newRes.success = true;
        res.status(newRes.code).send(newRes);
      })
      .catch((error) => {
        newRes.message = `${error.message}. username or email is taken`;
        newRes.code = 400;
        newRes.success = false;
        res.status(newRes.code).send(newRes);
      });
  },
  fetch(req, res) {
    return models.Users
      .findAll({ attributes:
        ['id', 'username', 'email', 'phone', 'createdAt', 'updatedAt'] })
      .then(users => res.status(200).send(users))
      .catch((error) => {
        newRes.message = error.message;
        newRes.code = 400;
        newRes.success = false;
        res.status(newRes.code).send(newRes);
      });
  },
  auth(req, res) {
    models.Users
      .findAll({ where: { username: [req.body.username],
        password: [req.body.password] } })
      .then((user) => {
        if (user[0]) {
        // create a token
          const token = jwt.sign({
            data: user[0]
          }, 'Armageddon', { expiresIn: '10h' });

          res.status(202).send({
            token,
            message: 'successful login'
          });
          return;
        }

        res.status(404).send({
          message: 'user not found'
        });
      });
  }
};
