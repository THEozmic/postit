import Nexmo from 'nexmo';
import nodemailer from 'nodemailer';
import models from '../models';

/**
 * @return {undefined}
 * @param {*} email
 * @param {*} message
 * @param {*} priority
 *
 * This is built to work using a loop, so it's a one by one implementation
 */
function sendEmail(email, message, priority) {
  // Email credentials are hidden for security reasons
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'xxxx',
      pass: 'xxxx'
    }
  });

  // Set up mail template
  const mailOptions = {
    from: 'xxxx',
    to: email,
    subject: `POSTIT: You have a message marked as ${priority.toUpperCase()}`,
    text: message
  };

  // Actually send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return error;
    }
    return info;
  });
}

/**
 * @return {promise} array of users and their emails
 * @param {*} groupId
 */
function fetchMembersEmail(groupId) {
  return new Promise((resolve) => {
    models.Groups
    .findOne({
      where: {
        id: groupId
      },
      attributes: ['id']
    }).then((groups) => {
      // Here, I am getting all the groups and leveraging my associations
      // to 'getUsers' in that groups, including their emails, which is what I need
      groups.getUsers({ attributes: ['email'] }).then((users) => {
        resolve(users);
      });
    });
  });
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
        // I am sending the response at this point because I don't want to keep the user
        // waiting for so long;
        res.status(201).send(message);

        // Nexmo credentials
        const nexmo = new Nexmo({
          apiKey: '7130d0b2',
          apiSecret: '38bf6a4bfb6f4077'
        });

        // I'm now going to send the sms and emails depending on the level of priority
        if (req.body.priority.toLowerCase() === 'critical') {
          fetchMembersEmail(req.body.to_group).then((users) => {
            users.map((user) => {
              // send email
              sendEmail(user.dataValues.email,
                `${req.body.from_user}: ${req.body.message}`, 'critical');
              
              // and sms
              // you want to substitute the second parameter with the actual phone number of
              // the recipient
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
              return user;
            });
          });
        }

        if (req.body.priority.toLowerCase() === 'urgent') {
          fetchMembersEmail(req.body.to_group).then((users) => {
            users.map((user) => {
              sendEmail(user.email,
                `${req.body.from_user}: ${req.body.message}`, 'urgent');
              return user;
            });
          });
        }
      })
      .catch(error => res.status(400).send(error));
  }
};
