import models from '../models';

export default {
  updateUsersInGroup(req, res) {
    if (!req.body.usersIds) {
      return res.status(400)
      .send({ error: 'Param: "users" is required', status: 400 });
    }

    if (!req.params.id) {
      return res.status(400)
      .send({ error: 'Param: "group_id" is required', status: 400 });
    }

    models.Groups
    .findOne({ where: { id: req.params.id } })
    .then((foundGroup) => {
      if (!foundGroup) {
        return res.status(404)
        .send({ error: 'Group does not exist', status: 404 });
      }
      res.status(200)
      .send({ message: 'Group members list updated', status: 200 });
    });

    JSON.parse(req.body.usersIds).map(({ id }) =>
      models.Users.findOne({ where: { id } })
      .then((userFound) => {
        if (userFound) {
          models.GroupUsers
          .findOne({ where: { userId: id, groupId: req.params.id } })
          .then((foundUser) => {
            if (foundUser !== null) {
              models.Groups
              .findOne({ where: { id: req.params.id } })
              .then((foundGroup) => {
                if (foundGroup.admin === req.decoded.data.id) {
                  return models.GroupUsers
                  .destroy({ where: { userId: id, groupId: req.params.id } });
                }
              });
            } else {
              models.GroupUsers.create({ userId: id, groupId: req.params.id });
            }
          });
        }
      })
    );
  }
};
