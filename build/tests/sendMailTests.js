'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sendMail = require('../helpers/sendMail');

var _sendMail2 = _interopRequireDefault(_sendMail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Register a new user returns correct error message', function () {
  it('It returns 400 error without password parameter', function () {
    (0, _sendMail2.default)('email', 'message');
  });
});
//# sourceMappingURL=sendMailTests.js.map