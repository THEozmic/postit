import Nexmo from 'nexmo';
import nodemailer from 'nodemailer';
import models from '../models';

function sendEmail(email, message, priority) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'xxxx',
      pass: 'xxxx'
    }
  });

  const mailOptions = {
    from: 'xxxx',
    to: email,
    subject: `POSTIT: You have a message marked as ${priority.toUpperCase()}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return error;
    }
    return info;
  });
}

function fetchMembersEmail(groupId) {
  models.GroupUsers
  .findAll({
    where: {
      groupId
    },
    attributes: ['email']
  }).then(result => (new Promise((resolve) => {
    resolve(result);
  })));
}

export default {
  create(req, res) {
    return models.Messages
      .create({
        message: req.body.message,
        from_user: req.decoded.data.username,
        to_group: req.body.to_group,
        priority: req.body.priority
      })
      .then((message) => {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'xxxx',
            pass: 'xxxx'
          }
        });

        if (req.body.priority.toLowerCase() === 'critical') {
          fetchMembersEmail(req.body.to_group).then(
            (results) => {
              results.map(result =>
                sendEmail(result.dataValues.email,
                  `${req.body.from_user}: ${req.body.message}`, 'critical'));
            });

          // This does not work (as required)
          // due to api limitations on the free subscription
          const nexmo = new Nexmo({
            apiKey: '7130d0b2',
            apiSecret: '38bf6a4bfb6f4077'
          });
          nexmo.message.sendSms(
          '2347010346915', '2348151442451', `POSTIT: You have a message marked as ${req.body.priority.toUpperCase()}\n${req.body.from_user}: ${req.body.message}
          `,
            (err, responseData) => {
              if (err) {
                console.log(err);
              } else {
                console.dir(responseData);
              }
            }
        );
        }
        if (req.body.priority.toLowerCase() === 'urgent') {
          fetchMembersEmail(req.body.to_group).then(
            (results) => {
              results.map(result =>
                sendEmail(result.dataValues.email,
                  `${req.body.from_user}: ${req.body.message}`, 'urgent'));
            });
        }
        res.status(201).send(message);
      })
      .catch(error => res.status(400).send(error));
  }
};
