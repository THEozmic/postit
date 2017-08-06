import models from '../models';

export default {
  create(req, res) {
    if (!req.body.name) {
      res.status(400).send({ message: 'Params: "name" and "type" are required' });
      return;
    }
    return models.Groups
      .create({
        name: req.body.name,
      })
      .then((group) => {
        const userId = req.decoded.data.id;
        models.GroupUsers
        .create({ userId, groupId: group.id })
        .then(res.status(201).send(group));
      })
      .catch(error => res.status(400).send(error));
  },
  fetch(req, res) {
    if (req.params.id === undefined) {
      return models.Groups
      .findAll({ include: [{
        model: models.Users,
        through: {
          attributes: ['id', 'username'],
        },
        as: 'users'
      }]
      })
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(400).send(error));
    }

    return models.Groups
    .findOne({
      where: { id: req.params.id },
      attributes: ['id', 'name'],
      include: [{
        model: models.Users,
        through: {
          attributes: ['id', 'username'],
        },
        as: 'users'
      }]
    })
    .then(groups => res.status(200).send(groups))
    .catch(error => res.status(400).send(error));
  },
  fetchMembers(req, res) {
    return models.GroupUsers
      .findAll({ where: { group_id: req.params.id } })
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
          'readBy'
        ],
        order: [
          ['id', 'ASC']
        ]
      })
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(404).send(error));
  },
  readMessage(req, res) {
    models.Messages
    .findAll({
      where: { to_group: [req.params.id] },
      attributes: [
        'id',
        'from_user',
        'readBy'
      ],
    })
    .then((results) => {
      results.map((result) => {
        if (result.dataValues.from_user !== req.decoded.data.username) {
          console.log(':::RESULT:::', result);
          console.log(':::FROM USER:::', result.dataValues.from_user);
          console.log(':::LOGGED USER:::', req.decoded.data.username);
          console.log(':::EQUAL??:::', result.dataValues.from_user === req.decoded.data.username);
          let readList = result.dataValues.readBy.split(',');
          readList = readList.filter(username =>
            username !== req.decoded.data.username
          );
          console.log(':::NEW READ LIST:::', readList);
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
        return false;
      });
      res.status(200).send({ data: { message: 'message read' } });
    })
    .catch(error => res.status(404).send(error));
  }
};
