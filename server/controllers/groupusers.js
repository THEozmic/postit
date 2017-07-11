import models from '../models';

export default {
  addUser(req, res) {
    return models.GroupUsers
      .create({
        user_id: req.params.id,
        group_id: req.body.group_id,
        last_seen: Date.now()
      })
      .then(result => res.status(201).send(result))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return models.GroupUsers
      .update({
        update_trigger: Math.floor((Math.random() * 10000) + 1) },
      { where: {
        user_id: req.body.user_id,
        group_id: req.body.group_id
      }
      })
      .then(result => res.statu(202).send(result))
      .catch(error => res.statu(400).send(error));
  }
};
