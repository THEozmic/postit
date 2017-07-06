const Users = require('../models').Users;

module.exports = {
  create(req, res) {
    return Users
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  fetch(req, res) {
    return Users
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  auth(req, res) {
    return '{"message": "api not ready"}'
      .then(user => res.status(200).send(user))
      .catch(error => res.status(404).send(error));
  }
};
