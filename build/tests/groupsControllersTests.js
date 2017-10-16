'use strict';

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();
_chai2.default.use(_chaiHttp2.default);
var token = void 0;

describe('usersControllersTests ', function () {
  before(function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/users/signin/').type('form').send({
      password: 'testuser',
      username: 'testuser'
    }).end(function (err, res) {
      res.should.have.status(202);
      token = res.body.token;
      done();
    });
  });

  describe('Create a new group', function () {
    it('returns 201 response', function () {
      _chai2.default.request(_app2.default).post('/api/v1/groups/').set('x-access-token', token).type('form').send({ name: 'Test Group', desc: 'A simple test group' }).end(function (err, res) {
        res.should.have.status(201);
      });
    });
  });

  describe('Add user to a new group', function () {
    it('should return 200 to add a user to a group', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/groups/1/user/').type('form').set('x-access-token', token).send({
        usersIds: '[2]'
      }).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });

  describe('Send message to a group', function () {
    it('returns 200 response', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/groups/1/message/').set('x-access-token', token).type('form').send({
        message: 'test message'
      }).end(function (err, res) {
        res.should.have.status(201);
        done();
      });
    });
    it('should work with priority level critical', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/groups/1/message/').set('x-access-token', token).type('form').send({
        message: 'test message',
        priority: 'critical'
      }).end(function (err, res) {
        res.should.have.status(201);
        done();
      });
    });
    it('should work with priority level urgent', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/groups/1/message/').set('x-access-token', token).type('form').send({
        message: 'test message',
        priority: 'urgent'
      }).end(function (err, res) {
        res.should.have.status(201);
        done();
      });
    });
    it('should not with priority level dope', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/groups/1/message/').set('x-access-token', token).type('form').send({
        message: 'test message',
        priority: 'dope'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
  });

  describe('View all messages in a group', function () {
    it('returns 200 response', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/groups/1/messages/').set('x-access-token', token).type('form').send().end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });

  describe('Get messages in a group', function () {
    it('returns 404', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/groups/a/messages/').type('form').set('x-access-token', token).send().end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
  });
});
//# sourceMappingURL=groupsControllersTests.js.map