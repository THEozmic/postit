import models from '../models';

export default {
  createGroup(req, res) {
    if (!req.body.name) {
      res.status(400).send({ error: 'Param name is required', status: 400 });
      return;
    }
    if (req.body.desc === '') {
      req.body.desc = 'no description';
    }
    if (req.body.name.length > 30) {
      return res.status(400)
      .send({ error: 'Group name too long', status: 400 });
    }
    if (req.body.desc.length > 40) {
      return res.status(400)
      .send({ error: 'Group description too long', status: 400 });
    }
    return models.Groups
      .create({
        name: req.body.name,
        desc: req.body.desc,
        admin: req.decoded.data.id
      })
      .then((group) => {
        const userId = req.decoded.data.id;
        models.GroupUsers
        .create({ userId, groupId: group.id })
        .then(res.status(201).send(group));
      });
  },
  findMessages(req, res) {
    models.Messages
      .findAll({
        where: { toGroup: [req.params.id] },
        attributes: [
          'id',
          'message',
          'fromUser',
          'toGroup',
          'priority',
          'readBy'
        ],
        order: [
          ['id', 'ASC']
        ]
      })
      .then(messages => res.status(200)
      .send({ messages, group: req.params.id }));
  }
};
