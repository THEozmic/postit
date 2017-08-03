import Nexmo from 'nexmo';
import nodemailer from 'nodemailer';
import models from '../models';

export default {
  create(req, res) {
    return models.Messages
      .create({
        message: req.body.message,
        from_user: req.body.from_user,
        to_group: req.body.to_group,
        priority: req.body.priority
      })
      .then((message) => {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'theozmic@gmail.com',
            pass: 'Ozoemena121212'
          }
        });

        const mailOptions = {
          from: 'theozmic@gmail.com',
          to: 'michaelozoemena2@gmail.com',
          subject: `POSTIT: You have a message marked as ${req.body.priority.toUpperCase()}`,
          text: `${req.body.from_user}: ${req.body.message}`
        };

        if (req.body.priority.toLowerCase() === 'critical') {
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log(`Email sent: ${info.response}`);
            }
          });
          const nexmo = new Nexmo({
            apiKey: '7130d0b2',
            apiSecret: '38bf6a4bfb6f4077'
          });
          nexmo.message.sendSms(
          '2347010346915', '2348151442451', `POSTIT: You have a message marked as ${req.body.priority.toUpperCase()}
          ${req.body.from_user}: ${req.body.message}
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
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log(`Email sent: ${info.response}`);
            }
          });
        }
        res.status(201).send(message);
      })
      .catch(error => res.status(400).send(error));
  }
};
