import models from '../models';

export default {
  create(req, res) {
    return models.Messages
      .create({
        message: req.body.message,
        from_user: req.body.from_user,
        to_group: req.body.to_group,
        priority: req.body.priority
      })
      .then(message => res.status(201).send(message))
      .catch(error => res.status(400).send(error));
  }
};
