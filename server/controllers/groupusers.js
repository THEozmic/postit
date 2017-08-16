import models from '../models';

export default {
  create(req, res) {
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
  upsert(req, res) {
    if (!req.body.users) {
      res.status(400)
      .send({ error: { message: 'Param: "users" is required' } });
      return;
    }

    if (!req.params.id) {
      res.status(400)
      .send({ error: { message: 'Param: "group_id" is required' } });
      return;
    }

    JSON.parse(req.body.users).map(user =>
      models.Users.findAll({ where: { id: user.id } })
      .then((existingUser) => {
        if (existingUser.length === 0) {
          res.status(404).send({ message: 'User does not exist' });
        } else {
          models.GroupUsers
          .findOne({ where: { userId: user.id, groupId: req.params.id } })
          .then((result) => {
            if (result !== null) {
              models.GroupUsers.destroy({ where: { userId: user.id, groupId: req.params.id } });
            } else {
              models.GroupUsers.create({ userId: user.id, groupId: req.params.id });
            }
          });
        }
      })
    );
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
      .then(result => res.status(202).send(result))
      .catch(error => res.status(400).send(error));
  }
  // @todo updateLastSeen => called when user opens a group.
};
