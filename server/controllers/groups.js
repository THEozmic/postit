const Groups = require('../models').Groups;

module.exports = {
  create(req, res) {
    return Groups
      .create({
        name: req.body.name,
        type: req.body.type
      })
      .then(group => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
  },
  fetch(req, res) {
    return Groups
      .findAll()
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(400).send(error));
  }
};
