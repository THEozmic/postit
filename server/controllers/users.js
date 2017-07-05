const Users = require('../models').Users;

module.exports = {
  create(req, res) {
    return Users
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
