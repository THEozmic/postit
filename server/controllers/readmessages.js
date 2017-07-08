const ReadMessages = require('../models').ReadMessages;

module.exports = {
  create(req, res) {
    return ReadMessages
      .create({
        user_id: req.body.user_id,
        message_id: req.body.message_id,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }
};
