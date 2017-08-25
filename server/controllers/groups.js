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
      return res.status(400).send({ error: 'Group name too long', status: 400 });
    }
    if (req.body.desc.length > 40) {
      return res.status(400).send({ error: 'Group description too long', status: 400 });
    }
    return models.Groups
      .create({
        name: req.body.name,
        desc: req.body.desc
      })
      .then((group) => {
        const userId = req.decoded.data.id;
        models.GroupUsers
        .create({ userId, groupId: group.id })
        .then(res.status(201).send(group));
      })
      .catch(error => res.status(400).send(error));
  },
  fetchGroups(req, res) {
    if (isNaN(req.params.id)) {
      return res.status(404).send({ error: 'Route not found', status: 404 });
    }
    if (!req.params.id) {
      return models.Groups
      .findAll({ include: [{
        model: models.Users,
        through: {
          attributes: ['id', 'username'],
        },
        as: 'users'
      }]
      })
      .then(groups => res.status(200).send({ groups }))
      .catch(error => res.status(400).send(error));
    }

    return models.Groups
    .findOne({
      where: { id: req.params.id },
      attributes: ['id', 'name', 'desc'],
      include: [{
        model: models.Messages,
        attributes: ['id', 'fromUser', 'message', 'createdAt', 'priority', 'readBy'],
        as: 'messages'
      }]
    })
    .then((group) => {
      if (!group) {
        return res.status(404).send({ error: 'Group does not exist', status: 404 });
      }
      res.status(200).send(group);
    })
    .catch(error => res.status(500).send({ error: error.message, status: 500 }));
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
      .then(messages => res.status(200).send({ messages, group: req.params.id }))
      .catch(error => res.status(500).send({ error }));
  },
  readMessage(req, res) {
    // for peformance issues, I have something different that "reads" the message
    models.Messages
    .findAll({
      where: { toGroup: [req.params.id] },
      attributes: [
        'id',
        'fromUser',
        'readBy'
      ],
    })
    .then((results) => {
      results.map((result) => {
        if (result.fromUser !== req.decoded.data.username) {
          let readList = result.readBy.split(',');
          readList = readList.filter(username =>
            username !== req.decoded.data.username
          );
          readList.push(req.decoded.data.username);
          if (result.dataValues.readBy !== '') {
            return result.updateAttributes({
              readBy: readList.join(',')
            });
          }
          return result.updateAttributes({
            readBy: req.decoded.data.username
          });
        }
      });
      res.status(200).send({ message: 'message read' });
    })
    .catch(error => res.status(500).send({ error }));
  }
};
