'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('Messages Model', function () {
  it('should create new message', function (done) {
    var newMessage = {
      message: 'A message',
      priority: 'Normal',
      fromUser: 1,
      toGroup: 1
    };
    _models2.default.Messages.create(newMessage).then(function (message) {
      expect(message.message).to.equal(newMessage.message);
      done();
    });
  });
});
//# sourceMappingURL=messagesModelsTests.js.map