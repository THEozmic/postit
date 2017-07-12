import jwt from 'jsonwebtoken';
import models from '../models';

export default {
  create(req, res) {
    return models.Users
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  fetch(req, res) {
    return models.Users
      .findAll({
        include: [{
          model: models.GroupUsers,
          as: 'groups',
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
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
