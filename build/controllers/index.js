'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _groups = require('./groups');

var _groups2 = _interopRequireDefault(_groups);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _groupusers = require('./groupusers');

var _groupusers2 = _interopRequireDefault(_groupusers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllers = { users: _users2.default, groups: _groups2.default, messages: _messages2.default, groupUsers: _groupusers2.default };
exports.default = controllers;
//# sourceMappingURL=index.js.map