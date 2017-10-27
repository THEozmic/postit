'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('Users Model', function () {
  it('should create new user', function (done) {
    var newUser = {
      username: 'theozmic',
      phone: '0903457883',
      email: 'theozmic@gmail.com',
      password: '12345password'
    };
    _models2.default.Users.create(newUser).then(function (user) {
      expect(user.email).to.equal(newUser.email);
      done();
    });
  });
});
//# sourceMappingURL=groupsModelsTests.js.map