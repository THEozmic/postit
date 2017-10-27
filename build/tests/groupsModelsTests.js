'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('Groups Model', function () {
  it('should create new group', function (done) {
    var newGroup = {
      name: 'A group',
      desc: 'Some desc',
      admin: 1
    };
    _models2.default.Groups.create(newGroup).then(function (group) {
      expect(group.name).to.equal(newGroup.name);
      done();
    });
  });
});
//# sourceMappingURL=groupsModelsTests.js.map