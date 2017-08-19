import Nexmo from 'nexmo';
import models from '../models';
import sendMail from '../helpers/sendMail';

/**
 * @return {promise} array of users and their emails
 * @param {*} groupId
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
         // Here, I am getting all the groups and leveraging my associations
        // to 'getUsers' in that groups, including their emails, which is what I need
        groups.getUsers({ attributes: ['email', 'phone'], where: { id: { $ne: userId } } }).then((users) => {
          console.log('here is the usas', users);
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
      return res.status(400).send({ error: 'Param message is required', status: 400 });
    }

    if (req.body.priority !== undefined && req.body.priority.toLowerCase() !== 'urgent'
      && req.body.priority.toLowerCase() !== 'critical'
      && req.body.priority.toLowerCase() !== 'normal') {
      return res.status(400).send({ error: 'Invalid priority level', status: 400 });
    }

    models.GroupUsers
    .findOne({
      where: { userId: req.decoded.data.id, groupId: req.params.id }
    }).then((foundUserInGroup) => {
      if (!foundUserInGroup) {
        return res.status(401).send({ error: 'User does not belong to group', status: 401 });
      }
      models.Groups
      .findOne({
        where: { id: req.params.id }
      }).then((foundGroup) => {
        if (!foundGroup) {
          return res.status(404).send({ error: 'Group does not exist', status: 404 });
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

          // I'm now going to send the sms and emails depending on the level of priority
          if (req.body.priority && req.body.priority.toLowerCase() === 'critical') {
<<<<<<< HEAD
            return fetchMembersDetails(req.body.toGroup).then((users) => {
              users.map((user) => {
                // send email
                const subject = 'POSTIT: You have a message marked as critical';
                sendMail(user.email, { subject, message: req.body.message });

                // and sms
                // you want to substitute the second parameter with the actual phone number of
                // the recipient
                nexmo.message.sendSms(
                  '2347010346915',
                  user.phone,
                  `POSTIT: You have a message marked\
  as ${req.body.priority.toUpperCase()}\n${req.body.fromUser}: ${req.body.message}
                  `);
                return user;
              });
=======
            return fetchMembersDetails(req.params.id, req.decoded.data.id).then((users) => {
              if (users.length !== 0) {
                users.map((user) => {
                  // send email
                  const subject = 'POSTIT: You have a message marked as critical';
                  sendMail(user.email, { subject, message: req.body.message });
                  // and sms
                  nexmo.message.sendSms(
                    '2347010346915',
                    user.phone,
                    `POSTIT: You have a message marked\
    as ${req.body.priority.toUpperCase()}\n${req.body.fromUser}: ${req.body.message}
                    `);
                  return user;
                });
              }
>>>>>>> 7f3b23e5040d2bd0856256b4f4f0391502caab78
            });
          }

          if (req.body.priority && req.body.priority.toLowerCase() === 'urgent') {
<<<<<<< HEAD
            return fetchMembersDetails(req.body.toGroup).then((users) => {
              users.map((user) => {
                const subject = 'POSTIT: You have a message marked as urgent';
                sendMail(user.email, { subject, message });
                return user;
              });
=======
            return fetchMembersDetails(req.params.id, req.decoded.data.id).then((users) => {
              console.log('other usas', users);
              if (users.length !== 0) {
                users.map((user) => {
                  const subject = 'POSTIT: You have a message marked as urgent';
                  sendMail(user.email, { subject, message });
                  return user;
                });
              }
>>>>>>> 7f3b23e5040d2bd0856256b4f4f0391502caab78
            });
          }
        })
        .catch((error) => {
<<<<<<< HEAD
          console.log(error.message, '500 error here');
=======
          console.log(error, '500 error here');
>>>>>>> 7f3b23e5040d2bd0856256b4f4f0391502caab78
          res.status(500).send({ error: error.message });
        });
      });
    });
  }
};
