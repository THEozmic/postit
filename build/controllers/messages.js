'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nexmo = require('nexmo');

var _nexmo2 = _interopRequireDefault(_nexmo);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _sendMail = require('../helpers/sendMail');

var _sendMail2 = _interopRequireDefault(_sendMail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @return {promise} array of users and their emails
 * @param {int} groupId
 * @param {int} userId
 */
function fetchMembersDetails(groupId, userId) {
  return new Promise(function (resolve, reject) {
    _models2.default.Groups.findOne({
      where: {
        id: groupId
      },
      attributes: ['id']
    }).then(function (groups) {
      if (groups !== null) {
        // Here, I am getting all the groups and leveraging my associations
        // to 'getUsers' in that groups, including
        // their emails, which is what I need
        groups.getUsers({ attributes: ['email', 'phone'],
          where: { id: { $ne: userId } } }).then(function (users) {
          resolve(users);
        }).catch(function (error) {
          return reject(error);
        });
      }
    }).catch(function (error) {
      return reject(error);
    });
  });
}

exports.default = {
  createMessage: function createMessage(req, res) {
    if (!req.body.message) {
      return res.status(400).send({ error: 'Param message is required', status: 400 });
    }

    if (req.body.priority !== undefined && req.body.priority.toLowerCase() !== 'urgent' && req.body.priority.toLowerCase() !== 'critical' && req.body.priority.toLowerCase() !== 'normal') {
      return res.status(400).send({ error: 'Invalid priority level', status: 400 });
    }

    _models2.default.GroupUsers.findOne({
      where: { userId: req.decoded.data.id, groupId: req.params.id }
    }).then(function (foundUserInGroup) {
      if (!foundUserInGroup) {
        return res.status(401).send({ error: 'User does not belong to group', status: 401 });
      }
      _models2.default.Groups.findOne({
        where: { id: req.params.id }
      }).then(function (foundGroup) {
        if (!foundGroup) {
          return res.status(404).send({ error: 'Group does not exist', status: 404 });
        }
        if (req.body.priority) {
          req.body.priority = req.body.priority.split('');
          req.body.priority[0] = req.body.priority[0].toUpperCase();
          req.body.priority = req.body.priority.join('');
        }
        return _models2.default.Messages.create({
          message: req.body.message,
          fromUser: req.decoded.data.username,
          toGroup: req.params.id,
          priority: req.body.priority
        }).then(function (message) {
          res.status(201).send({ message: message });
          // Nexmo credentials
          var nexmo = new _nexmo2.default({
            apiKey: process.env.NEXMO_API_KEY || 'jhkn',
            apiSecret: process.env.NEXMO_API_SECRET || 'khnjn'
          });

          // I'm now going to send the sms and
          // emails depending on the level of priority
          if (req.body.priority && req.body.priority.toLowerCase() === 'critical') {
            return fetchMembersDetails(req.params.id, req.decoded.data.id).then(function (users) {
              if (users.length !== 0) {
                users.map(function (user) {
                  // send email
                  var subject = 'POSTIT: You have a message marked as critical';
                  (0, _sendMail2.default)(user.email, { subject: subject, message: req.body.message });
                  // and sms
                  nexmo.message.sendSms('2347010346915', user.phone, 'POSTIT: You have a message marked    as ' + req.body.priority.toUpperCase() + '\n' + req.body.fromUser + ':     ' + req.body.message + '\n                    ');
                  return user;
                });
              }
            });
          }

          if (req.body.priority && req.body.priority.toLowerCase() === 'urgent') {
            return fetchMembersDetails(req.params.id, req.decoded.data.id).then(function (users) {
              if (users.length !== 0) {
                users.map(function (user) {
                  var subject = 'POSTIT: You have a message marked as urgent';
                  (0, _sendMail2.default)(user.email, { subject: subject, message: message });
                  return user;
                });
              }
            });
          }
        }).catch(function (error) {
          res.status(500).send({ error: error.message });
        });
      });
    });
  }
};
//# sourceMappingURL=messages.js.map