'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @return {string} error | info
 * @param {string} email
 * @param {object} param1
 */
var sendMail = function sendMail(email, _ref) {
  var subject = _ref.subject,
      html = _ref.message;

  var transporter = _nodemailer2.default.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ID || 'email@email.com',
      pass: process.env.EMAIL_PASS || 'pass'
    }
  });

  var mailOptions = {
    from: 'POST IT',
    to: email,
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return Promise.resolve(error);
    }
    return Promise.resolve(info);
  });
};

exports.default = sendMail;
//# sourceMappingURL=sendMail.js.map