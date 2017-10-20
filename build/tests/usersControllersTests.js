'use strict';

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

process.env.NODE_ENV = 'test';
var should = _chai2.default.should();
_chai2.default.use(_chaiHttp2.default);
var token = void 0;
var hash = void 0;

_models2.default.Users.destroy({
  cascade: true,
  truncate: true,
  restartIdentity: true
});

_models2.default.Messages.destroy({
  cascade: true,
  truncate: true,
  restartIdentity: true
});

_models2.default.Groups.destroy({
  cascade: true,
  truncate: true,
  restartIdentity: true
});

_models2.default.GroupUsers.destroy({
  cascade: true,
  truncate: true,
  restartIdentity: true
});

describe('usersControllersTests ', function () {
  describe('Given the user hits the route POST /api/v1/users/', function () {
    it('It returns a 201 status when given correct parameters', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').type('form').send({
        email: 'testuser@email.com',
        username: 'testuser',
        password: 'testuser',
        phone: '09004839432'
      }).end(function (err, res) {
        res.should.have.status(201);
        token = res.body.token;
        done();
      });
    });
    it('It returns 400 error when password parameter is not given', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        username: 'testusername',
        email: 'test@user.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 400 error without username parameter', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        email: 'test@user.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 400 error without email parameter', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        username: 'testusername',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 400 error without phone parameter', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        username: 'testusername2',
        email: 'test@user2.com'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 409 error with duplicate email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        username: 'testusername3',
        email: 'testuser@email.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(409);
        done();
      });
    });
    it('It returns 409 error with duplicate username', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testuser',
        username: 'testuser',
        email: 'test@user3.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(409);
        done();
      });
    });
    it('It returns 400 error with invalid email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        username: 'testusername3',
        email: 'test',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 400 error with empty password', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: '       ',
        username: 'testusername5',
        email: 'test@user5.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 400 error with empty username', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpass',
        username: '     ',
        email: 'test@user4.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 400 error with empty email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpass',
        username: 'testusername3',
        email: '     ',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 400 error with empty phone', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpass',
        username: 'testusername6',
        email: 'test@email6.com',
        phone: '        '
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
  });

  describe('Register a new user returns correct error message', function () {
    it('It returns 400 error without password parameter', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        username: 'testusername',
        email: 'test@user.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.body.error.should.equal('Password cannot be empty');
        done();
      });
    });
    it('It returns 400 error without username parameter', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        email: 'test@user.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.body.error.should.equal('Username cannot be empty');
        done();
      });
    });
    it('It returns 400 error without email parameter', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        username: 'testusername',
        phone: '07010346915'
      }).end(function (err, res) {
        res.body.error.should.equal('Invalid email');
        done();
      });
    });
    it('It 400 error without phone parameter', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        username: 'testusername2',
        email: 'test@user2.com'
      }).end(function (err, res) {
        res.body.error.should.equal('Phone cannot be empty');
        done();
      });
    });
    it('It returns 409 error with duplicate email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testuser2',
        username: 'testuser2',
        email: 'testuser@email.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.body.error.should.equal('Email already exists');
        done();
      });
    });
    it('It returns 409 error with duplicate username', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testuser',
        username: 'testuser',
        email: 'test@user3.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.body.error.should.equal('Username already taken');
        done();
      });
    });
    it('It returns 400 error with invalid email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpassword',
        username: 'testusername3',
        email: 'test',
        phone: '07010346915'
      }).end(function (err, res) {
        res.body.error.should.equal('Invalid email');
        done();
      });
    });
    it('It returns 400 error with empty password', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: '     ',
        username: 'testusername',
        email: 'test@user3.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.body.error.should.equal('Password cannot be empty');
        done();
      });
    });
    it('It returns 400 error with empty username', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpass',
        username: '     ',
        email: 'test@user3.com',
        phone: '07010346915'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('It returns 400 error with empty email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpass',
        username: 'testusername3',
        email: '     ',
        phone: '07010346915'
      }).end(function (err, res) {
        res.body.error.should.equal('Invalid email');
        done();
      });
    });
    it('It returns 400 error with empty phone', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/').type('form').send({
        password: 'testpass',
        username: 'testusername3',
        email: 'test@email3.com',
        phone: '     '
      }).end(function (err, res) {
        res.body.error.should.equal('Phone cannot be empty');
        done();
      });
    });
  });

  describe('Make a password reset request', function () {
    it('Returns 200 status code when the parameters are correct', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/request-password').type('form').send({
        email: 'testuser@email.com'
      }).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });

    it('Returns 200 status code when request is remade', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/request-password').type('form').send({
        email: 'testuser@email.com'
      }).end(function (err, res) {
        res.should.have.status(200);
        hash = res.body.hash;
        done();
      });
    });
    describe('Reset password', function () {
      it('works with complete parameters', function (done) {
        _chai2.default.request(_app2.default).post('/api/v1/users/reset-password/' + hash).type('form').send({
          password: 'testuser'
        }).end(function (err, res) {
          res.should.have.status(200);
          done();
        });
      });
    });

    it('Returns 404 status code when request is made with not existent email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/request-password').type('form').send({
        email: 'testuserr@email.com'
      }).end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });

    it('Returns 400 status code with invalid email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/request-password').type('form').send({
        email: 'mail@.com'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });

    it('Returns 400 status code with empty email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/request-password').type('form').send({}).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
  });

  describe('Login a user', function () {
    it('should give 400 error if password is not given', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/signin/').type('form').send({
        username: 'testuser'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('should give 400 error if username is not given', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/signin/').type('form').send({
        password: 'testuser'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('should give 404 error if username does not exist', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/signin/').type('form').send({
        username: 'testuser4',
        password: 'testuser4'
      }).end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
    it('should give 401 error if wrong password is given', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/signin/').type('form').send({
        username: 'testuser',
        password: 'testsdcs'
      }).end(function (err, res) {
        res.should.have.status(401);
        done();
      });
    });
    it('works with complete parameters', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/signin/').type('form').send({
        password: 'testuser',
        username: 'testuser'
      }).end(function (err, res) {
        res.should.have.status(202);
        done();
      });
    });
  });

  describe('Search for users', function () {
    it('should give 200 if all params are given', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').type('form').send({
        email: 'testuser2@email.com',
        username: 'testuser2',
        password: 'testuser2',
        phone: '09004839431'
      }).end(function () {
        _chai2.default.request(_app2.default).post('/api/v1/groups/').set('x-access-token', token).type('form').send({ name: 'Test Group', desc: 'A simple test group' }).end(function () {
          _chai2.default.request(_app2.default).post('/api/v1/groups/1/user/').type('form').set('x-access-token', token).send({
            usersIds: '[2]'
          }).end(function (err, res) {
            console.log(res.body, 'mmmm');
            _chai2.default.request(_app2.default).get('/api/v1/search/2/testuser/0').set('x-access-token', token).type('form').send().end(function (err, res) {
              console.log(res.body, 'rrrrr');
              res.should.have.status(200);
              done();
            });
          });
        });
      });
    });
  });

  describe('View current logged user', function () {
    it('gets current logged in user data when request is correctly made', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/users/me/').set('x-access-token', token).type('form').send().end(function (err, res) {
        res.should.have.status(200);
        res.body.user.username.should.equal('testuser');
        done();
      });
    });
  });
});
//# sourceMappingURL=usersControllersTests.js.map