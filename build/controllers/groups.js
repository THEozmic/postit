'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createGroup: function createGroup(req, res) {
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
    return _models2.default.Groups.create({
      name: req.body.name,
      desc: req.body.desc,
      admin: req.decoded.data.id
    }).then(function (group) {
      var userId = req.decoded.data.id;
      _models2.default.GroupUsers.create({ userId: userId, groupId: group.id }).then(res.status(201).send(group));
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  fetchGroups: function fetchGroups(req, res) {
    if (isNaN(req.params.id)) {
      return res.status(404).send({ error: 'Route not found', status: 404 });
    }
    if (!req.params.id) {
      return _models2.default.Groups.findAll({ include: [{
          model: _models2.default.Users,
          through: {
            attributes: ['id', 'username']
          },
          as: 'users'
        }]
      }).then(function (groups) {
        return res.status(200).send({ groups: groups });
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }

    return _models2.default.Groups.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'name', 'desc', 'admin'],
      include: [{
        model: _models2.default.Messages,
        attributes: ['id', 'fromUser', 'message', 'createdAt', 'priority', 'readBy'],
        as: 'messages'
      }, { model: _models2.default.Users,
        attributes: ['id', 'username', 'createdAt'],
        through: {
          attributes: []
        },
        as: 'users'
      }]
    }).then(function (group) {
      if (!group) {
        return res.status(404).send({ error: 'Group does not exist', status: 404 });
      }
      res.status(200).send(group);
    }).catch(function (error) {
      return res.status(500).send({ error: error.message, status: 500 });
    });
  },
  findMessages: function findMessages(req, res) {
    _models2.default.Messages.findAll({
      where: { toGroup: [req.params.id] },
      attributes: ['id', 'message', 'fromUser', 'toGroup', 'priority', 'readBy'],
      order: [['id', 'ASC']]
    }).then(function (messages) {
      return res.status(200).send({ messages: messages, group: req.params.id });
    }).catch(function (error) {
      return res.status(500).send({ error: error });
    });
  }
};
//# sourceMappingURL=groups.js.map