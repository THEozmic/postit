import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import models from '../models';

require('dotenv').config();

process.env.NODE_ENV = 'test';
const should = chai.should();
chai.use(chaiHttp);
let token;

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
          email: 'testuser@email.com',
          username: 'testuser',
          password: 'testuser',
          phone: '09004839432'
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
          username: 'testusername',
          email: 'test@user.com',
          phone: '07010346915'
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
          password: 'testpassword',
          email: 'test@user.com',
          phone: '07010346915'
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
          password: 'testpassword',
          username: 'testusername',
          phone: '07010346915'
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
          password: 'testpassword',
          username: 'testusername2',
          email: 'test@user2.com'
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
          password: 'testpassword',
          username: 'testusername3',
          email: 'testuser@email.com',
          phone: '07010346915'
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
          password: 'testuser',
          username: 'testuser',
          email: 'test@user3.com',
          phone: '07010346915'
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
          password: 'testpassword',
          username: 'testusername3',
          email: 'test',
          phone: '07010346915'
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
          username: 'testusername5',
          email: 'test@user5.com',
          phone: '07010346915'
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
          password: 'testpass',
          username: '     ',
          email: 'test@user4.com',
          phone: '07010346915'
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
          password: 'testpass',
          username: 'testusername3',
          email: '     ',
          phone: '07010346915'
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
          password: 'testpass',
          username: 'testusername6',
          email: 'test@email6.com',
          phone: '        '
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('Register a new user returns correct error message', () => {
    it('It returns 400 error without password parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          username: 'testusername',
          email: 'test@user.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.body.error.should.equal('Password cannot be empty');
          done();
        });
    });
    it('It returns 400 error without username parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: 'testpassword',
          email: 'test@user.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.body.error.should.equal('Username cannot be empty');
          done();
        });
    });
    it('It returns 400 error without email parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.body.error.should.equal('Invalid email');
          done();
        });
    });
    it('It 400 error without phone parameter', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername2',
          email: 'test@user2.com'
        })
        .end((err, res) => {
          res.body.error.should.equal('Phone cannot be empty');
          done();
        });
    });
    it('It returns 409 error with duplicate email', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: 'testuser2',
          username: 'testuser2',
          email: 'testuser@email.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.body.error.should.equal('Email already exists');
          done();
        });
    });
    it('It returns 409 error with duplicate username', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: 'testuser',
          username: 'testuser',
          email: 'test@user3.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.body.error.should.equal('Username already taken');
          done();
        });
    });
    it('It returns 400 error with invalid email', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername3',
          email: 'test',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.body.error.should.equal('Invalid email');
          done();
        });
    });
    it('It returns 400 error with empty password', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: '     ',
          username: 'testusername',
          email: 'test@user3.com',
          phone: '07010346915'
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
          password: 'testpass',
          username: '     ',
          email: 'test@user3.com',
          phone: '07010346915'
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
          password: 'testpass',
          username: 'testusername3',
          email: '     ',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.body.error.should.equal('Invalid email');
          done();
        });
    });
    it('It returns 400 error with empty phone', (done) => {
      chai.request(app)
        .post('/api/v1/users/')
        .type('form')
        .send({
          password: 'testpass',
          username: 'testusername3',
          email: 'test@email3.com',
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
          email: 'testuser@email.com'
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
          email: 'testuser@email.com'
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('Returns 404 status code when request is made with not existent email',
    (done) => {
      chai.request(app)
        .post('/api/v1/users/request-password')
        .type('form')
        .send({
          email: 'testuserr@email.com'
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
          email: 'mail@.com'
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
        res.body.user.username.should.equal('testuser');
        done();
      });
    });
  });

  describe('Login a user', () => {
    it('works with complete parameters', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin/')
        .type('form')
        .send({
          password: 'testuser',
          username: 'testuser'
        })
        .end((err, res) => {
          res.should.have.status(202);
          done();
        });
    });
  });
});
