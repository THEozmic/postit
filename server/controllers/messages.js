const Messages = require('../models').Messages;

module.exports = {
  create(req, res) {
    return Messages
      .create({
        message: req.body.message,
        from_user: req.body.from_user,
        to_group: req.body.to_group,
        priority: req.body.priority
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }
};
