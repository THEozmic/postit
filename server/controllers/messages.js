import Nexmo from 'nexmo';
import models from '../models';
import sendMail from '../helpers/sendMail';

/**
 * @return {promise} array of users and their emails
 * @param {int} groupId
 * @param {int} userId
 */
function fetchMembersDetails(groupId, userId) {
  return new Promise((resolve, reject) => {
    models.Groups
    .findOne({
      where: {
        id: groupId
      },
      attributes: ['id']
    }).then((groups) => {
      if (groups !== null) {
        groups.getUsers({ attributes: ['email', 'phone'],
          where: { id: { $ne: userId } } }).then((users) => {
            resolve(users);
          })
        .catch(error => reject(error));
      }
    })
    .catch(error => reject(error));
  });
}

export default {
  createMessage(req, res) {
    if (!req.body.message) {
      return res.status(400)
      .send({ error: 'Param message is required', status: 400 });
    }

    if (req.body.priority !== undefined &&
      req.body.priority.toLowerCase() !== 'urgent'
      && req.body.priority.toLowerCase() !== 'critical'
      && req.body.priority.toLowerCase() !== 'normal') {
      return res.status(400)
      .send({ error: 'Invalid priority level', status: 400 });
    }

    models.GroupUsers
    .findOne({
      where: { userId: req.decoded.data.id, groupId: req.params.id }
    }).then((foundUserInGroup) => {
      if (!foundUserInGroup) {
        return res.status(401)
        .send({ error: 'User does not belong to group', status: 401 });
      }
      models.Groups
      .findOne({
        where: { id: req.params.id }
      }).then((foundGroup) => {
        if (!foundGroup) {
          return res.status(404)
          .send({ error: 'Group does not exist', status: 404 });
        }
        if (req.body.priority) {
          req.body.priority = req.body.priority.split('');
          req.body.priority[0] = req.body.priority[0].toUpperCase();
          req.body.priority = req.body.priority.join('');
        }
        return models.Messages
        .create({
          message: req.body.message,
          fromUser: req.decoded.data.username,
          toGroup: req.params.id,
          priority: req.body.priority
        })
        .then((message) => {
          res.status(201).send({ message });
          // Nexmo credentials
          const nexmo = new Nexmo({
            apiKey: process.env.NEXMO_API_KEY || 'jhkn',
            apiSecret: process.env.NEXMO_API_SECRET || 'khnjn'
          });

          // I'm now going to send the sms and
          // emails depending on the level of priority
          if (req.body.priority && req.body.priority
            .toLowerCase() === 'critical') {
            return fetchMembersDetails(req.params.id, req.decoded.data.id)
            .then((users) => {
              if (users.length !== 0) {
                users.map((user) => {
                  // send email
                  const subject =
                  'POSTIT: You have a message marked as critical';
                  sendMail(user.email, { subject, message: req.body.message });
                  // and sms
                  nexmo.message.sendSms(
                    '2347010346915',
                    user.phone,
                    `POSTIT: You have a message marked\
    as ${req.body.priority.toUpperCase()}\n${req.body.fromUser}:\
     ${req.body.message}
                    `);
                  return user;
                });
              }
            });
          }

          if (req.body.priority && req.body.priority
            .toLowerCase() === 'urgent') {
            return fetchMembersDetails(req.params.id, req.decoded.data.id)
            .then((users) => {
              if (users.length !== 0) {
                users.map((user) => {
                  const subject = 'POSTIT: You have a message marked as urgent';
                  sendMail(user.email, { subject, message });
                  return user;
                });
              }
            });
          }
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
      });
    });
  }
};
