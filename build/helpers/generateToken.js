'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var jwtToken = process.env.JWT_TOKEN || 'SECRET';
var generateToken = function generateToken(user) {
  var token = _jsonwebtoken2.default.sign({
    data: user
  }, jwtToken, { expiresIn: '48h' });

  return token;
};

exports.default = generateToken;
//# sourceMappingURL=generateToken.js.map