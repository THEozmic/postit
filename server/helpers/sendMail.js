import nodemailer from 'nodemailer';

/**
 * @return {string} error | info
 * @param {string} email
 * @param {object} param1
 */
const sendMail = (email, { subject, message: html }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: 'POST IT',
    to: email,
    subject,
    html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return Promise.resolve(error);
    }
    return Promise.resolve(info);
  });
};

export default sendMail;
