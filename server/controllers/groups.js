import models from '../models';

export default {

/**
 * Route: POST: /api/v1/groups/
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
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

/**
 * Route: GET: /api/v1/groups/:id
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
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
      .then(groups => res.status(200).send({ groups }));
    }

    return models.Groups
    .findOne({
      where: { id: req.params.id },
      attributes: ['id', 'name', 'desc', 'admin'],
      include: [{
        model: models.Messages,
        attributes:
        [
          'id',
          'fromUser',
          'message',
          'createdAt',
          'priority',
          'readBy'
        ],
        as: 'messages'
      },
      { model: models.Users,
        attributes: ['id', 'username', 'createdAt'],
        through: {
          attributes: []
        },
        as: 'users'
      }]
    })
    .then((group) => {
      if (!group) {
        return res.status(404)
        .send({ error: 'Group does not exist', status: 404 });
      }
      res.status(200).send(group);
    });
  },

  /**
 * Route: GET: /api/v1/groups/:id/messages/
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
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
