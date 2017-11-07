import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import models from '../models';
import mockData from '../../client/js/spec/__mocks__/mockData';

require('dotenv').config();

process.env.NODE_ENV = 'test';
const should = chai.should(); // eslint-disable-line no-unused-vars
chai.use(chaiHttp);
let token;
let hash;

models.Users.destroy({
  cascade: true,
  truncate: true,
  restartIdentity: true
});

models.Messages.destroy({
  cascade: true,
  truncate: true,
  restartIdentity: true
});

models.Groups.destroy({
  cascade: true,
  truncate: true,
  restartIdentity: true
});

models.GroupUsers.destroy({
  cascade: true,
  truncate: true,
  restartIdentity: true
});

describe('usersControllersTests ', () => {
  describe('Given the user hits the route POST /api/v1/users/', () => {
    it('It returns a 201 status when given correct parameters', (done) => {
      chai.request(app)
        .post('/api/v1/users')
        .type('form')
        .send({
          email: mockData.staticEmail,
          username: mockData.staticUsername,
          password: mockData.staticPassword,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(201);
          token = res.body.token;
          done();
        });
    });
    it('It returns 400 error when password parameter is not given', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          username: mockData.username,
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns 400 error without username parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns 400 error without email parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns 400 error without phone parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: mockData.dynamicEmail
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns 409 error with duplicate email', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: mockData.staticEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(409);
          done();
        });
    });
    it('It returns 409 error with duplicate username', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.staticUsername,
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(409);
          done();
        });
    });
    it('It returns 400 error with invalid email', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: mockData.string,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns 400 error with empty password', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: '       ',
          username: mockData.username,
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns 400 error with empty username', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: '     ',
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns 400 error with empty email', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: '     ',
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns 400 error with empty phone', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: mockData.dynamicEmail,
          phone: '        '
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('Register a new user returns correct error message', () => {
    it('It returns error without password parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          username: mockData.username,
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.body.error.should.equal('Password cannot be empty');
          done();
        });
    });
    it('It returns error without username parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.body.error.should.equal('Username cannot be empty');
          done();
        });
    });
    it('It returns error without email parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.body.error.should.equal('Invalid email');
          done();
        });
    });
    it('It returns error without phone parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: mockData.dynamicEmail
        })
        .end((err, res) => {
          res.body.error.should.equal('Phone cannot be empty');
          done();
        });
    });
    it('It returns error with duplicate email', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: mockData.staticEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.body.error.should.equal('Email already exists');
          done();
        });
    });
    it('It returns error with duplicate username', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.staticUsername,
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.body.error.should.equal('Username already taken');
          done();
        });
    });
    it('It returns error with invalid email', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: mockData.string,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.body.error.should.equal('Invalid email');
          done();
        });
    });
    it('It returns error with empty password', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: '     ',
          username: mockData.username,
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.body.error.should.equal('Password cannot be empty');
          done();
        });
    });
    it('It returns 400 error with empty username', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: '     ',
          email: mockData.dynamicEmail,
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('It returns error with empty email', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.dynamicEmail,
          email: '     ',
          phone: mockData.staticPhone
        })
        .end((err, res) => {
          res.body.error.should.equal('Invalid email');
          done();
        });
    });
    it('It returns error with empty phone', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: mockData.dynamicPassword,
          username: mockData.username,
          email: mockData.dynamicEmail,
          phone: '     '
        })
        .end((err, res) => {
          res.body.error.should.equal('Phone cannot be empty');
          done();
        });
    });
  });

  describe('Make a password reset request', () => {
    it('Returns 200 status code when the parameters are correct', (done) => {
      chai.request(app)
        .post('/api/v1/users/request-password')
        .type('form')
        .send({
          email: mockData.staticEmail
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('Returns 200 status code when request is remade', (done) => {
      chai.request(app)
        .post('/api/v1/users/request-password')
        .type('form')
        .send({
          email: mockData.staticEmail
        })
        .end((err, res) => {
          res.should.have.status(200);
          hash = res.body.hash;
          done();
        });
    });
    describe('Reset password', () => {
      it('returns 200 with complete parameters', (done) => {
        chai.request(app)
          .post(`/api/v1/users/reset-password/${hash}`)
          .type('form')
          .send({
            password: mockData.staticPassword
          })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('Returns 404 status code when request is made with not existent email',
    (done) => {
      chai.request(app)
        .post('/api/v1/users/request-password')
        .type('form')
        .send({
          email: mockData.dynamicEmail
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it('Returns 400 status code with invalid email', (done) => {
      chai.request(app)
        .post('/api/v1/users/request-password')
        .type('form')
        .send({
          email: mockData.string
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('Returns 400 status code with empty email', (done) => {
      chai.request(app)
        .post('/api/v1/users/request-password')
        .type('form')
        .send({
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('Login a user', () => {
    it('should give 400 error if password is not given', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin/')
        .type('form')
        .send({
          username: mockData.staticUsername
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('should give 400 error if username is not given', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin/')
        .type('form')
        .send({
          password: mockData.staticUsername
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('should give 404 error if username does not exist', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin/')
        .type('form')
        .send({
          username: mockData.username,
          password: mockData.staticPassword
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it('should give 401 error if wrong password is given', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin/')
        .type('form')
        .send({
          username: mockData.staticUsername,
          password: mockData.dynamicPassword
        })
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
    it('returns 202 with complete parameters', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin/')
        .type('form')
        .send({
          password: mockData.staticPassword,
          username: mockData.staticUsername
        })
        .end((err, res) => {
          res.should.have.status(202);
          done();
        });
    });
  });

  describe('Search for users', () => {
    it('should give 200 if all params are given', (done) => {
      chai.request(app)
        .post('/api/v1/users')
        .type('form')
        .send({
          email: mockData.dynamicEmail,
          username: mockData.username,
          password: mockData.dynamicPassword,
          phone: mockData.staticPhone
        })
        .end(() => {
          chai.request(app)
          .post('/api/v1/groups/')
          .set('x-access-token', token)
          .type('form')
          .send({ name: mockData.string, desc: mockData.string })
          .end(() => {
            chai.request(app)
            .post('/api/v1/groups/1/user/')
            .type('form')
            .set('x-access-token', token)
            .send({
              usersIds: '[2]',
            })
            .end(() => {
              chai.request(app)
              .get('/api/v1/search/2/testuser/0')
              .set('x-access-token', token)
              .type('form')
              .send()
              .end((err, res) => {
                res.should.have.status(200);
                done();
              });
            });
          });
        });
    });
  });

  describe('View current logged user', () => {
    it('gets current logged in user data when request is correctly made',
    (done) => {
      chai.request(app)
      .get('/api/v1/users/me/')
      .set('x-access-token', token)
      .type('form')
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        res.body.user.username.should.equal(mockData.staticUsername);
        done();
      });
    });
  });
});
