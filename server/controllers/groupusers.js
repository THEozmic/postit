import models from '../models';

export default {
  addOrRemoveUser(req, res) {
    if (!req.body.usersIds) {
      return res.status(400).send({ error: 'Param: "users" is required', status: 400 });
    }

    if (!req.params.id) {
      return res.status(400).send({ error: 'Param: "group_id" is required', status: 400 });
    }

    models.Groups
    .findOne({ where: { id: req.params.id } })
    .then((foundGroup) => {
      if (!foundGroup) {
        return res.status(404).send({ error: 'Group does not exist', status: 404 });
      }
      res.status(200).send({ message: 'Group members list updated', status: 200 });
    });

<<<<<<< HEAD
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
=======
    JSON.parse(req.body.usersIds).map(({ id }) =>
      models.Users.findOne({ where: { id } })
      .then((userFound) => {
        if (userFound) {
          models.GroupUsers
          .findOne({ where: { userId: id, groupId: req.params.id } })
          .then((foundUser) => {
            if (foundUser !== null) {
              models.GroupUsers.destroy({ where: { userId: id, groupId: req.params.id } });
            } else {
              models.GroupUsers.create({ userId: id, groupId: req.params.id });
>>>>>>> b1ace67e1b07e666bbdd8ad156e8bfd1e6a20a55
            }
          });
        }
      })
    );
<<<<<<< HEAD
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
=======
>>>>>>> b1ace67e1b07e666bbdd8ad156e8bfd1e6a20a55
  }
};
