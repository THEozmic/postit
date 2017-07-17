import models from '../models';

export default {
  addUser(req, res) {
    if (!req.body.userId) {
      res.status(400)
      .send({ error: { message: 'Param: "user_id" is required' } });
      return;
    }

    if (!req.params.id) {
      res.status(400)
      .send({ error: { message: 'Param: "group_id" is required' } });
      return;
    }

    models.GroupUsers
    .find({
      where: {
        userId: req.body.userId,
        groupId: req.params.id
      } }).then((data) => {
        if (data) {
          return res.status(400)
          .send({ error: { message: 'user already in group' } });
        }
        return models.GroupUsers
          .create({
            userId: req.body.userId,
            groupId: req.params.id
          })
          .then(result => res.status(201).send(result))
          .catch(error => res.status(400).send(error));
      });
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
  // @todo updateLastSeen => called when user opens a group.
};
