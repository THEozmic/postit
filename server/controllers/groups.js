import models from '../models';

export default {
  create(req, res) {
    return models.Groups
      .create({
        name: req.body.name,
        type: req.body.type
      })
      .then(group => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
  },
  fetch(req, res) {
    return models.Groups
      .findAll()
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(400).send(error));
  },
  fetchMembers(req, res) {
    return models.Groups
      .findById(req.params.id, {
        include: [{
          model: models.GroupUsers,
          as: 'users',
        }],
      })
      .then(groups => res.status(200).send(groups))
      .catch((error) => {
        console.log(error);
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
    // models.sequelize.query(`SELECT * FROM "Messages" WHERE to_group = '${[req.params.id]}'`,
    //   { type: models.sequelize.QueryTypes.SELECT,
    //     include: [{ association: 'GroupUsers' }],
    models.Messages
      .findAll({
        where: { to_group: [req.params.id] },
        attributes: ['id', 'message', 'from_user', 'to_group', 'priority', 'createdAt'],
        //     // include: [{
        //     //   model: models.GroupUsers,
        //     //   as: 'members_seen',
        //     //   include: [{
        //     //     model: models.Messages,
        //     //     where: {
        //     //       to_group: [req.params.id],
        //     //       updated_at
        //     //     },
        //     //     required: false
        //     //   }]
        //     // }]
      })
      // .then((messages) => {
      //   if (messages) {
      //     for (let i = 0; i < messages.length; i += 1) {
      //       models
      //     }
      //   }
      // })
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(404).send(error));
  }
};
