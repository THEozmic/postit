import models from '../models';

export default {
  create(req, res) {
    if (!req.body.name) {
      res.status(400).send({ message: 'Param: "name" is required' });
      return;
    }

    if (!req.body.type) {
      res.status(400).send({ message: 'Param: "type" is required' });
      return;
    }
    return models.Groups
      .create({
        name: req.body.name,
        type: req.body.type
      })
      .then(group => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
  },
  fetch(req, res) {
    return models.Groups
      .findAll()
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(400).send(error));
  },
  fetchMembers(req, res) {
    return models.Groups
      .findAll({ where: { id: req.params.id } })
      .then(groups => res.status(200).send(groups))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  message(req, res) {
    return models.Messages
      .create({
        from_user: req.body.from_user,
        to_group: req.body.to_group,
        message: req.body.message,
        priority: req.body.priority
      })
      .then(message => res.status(200).send(message))
      .catch(error => res.status(404).send(error));
  },
  messages(req, res) {
    models.Messages
      .findAll({
        where: { to_group: [req.params.id] },
        attributes: [
          'id',
          'message',
          'from_user',
          'to_group',
          'priority',
          'createdAt'
        ],
      })
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(404).send(error));
  }
};
