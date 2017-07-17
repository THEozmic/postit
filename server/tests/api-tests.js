import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import models from '../models';

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

describe('API Tests: ', () => {
  describe('Register a new user', () => {
    it('works with complete parameters', (done) => {
      chai.request(app)
        .post('/api/users/')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername',
          email: 'test@user.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
    it('returns 400 error without password parameter', (done) => {
      chai.request(app)
        .post('/api/users/')
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
    it('returns 400 error without username parameter', (done) => {
      chai.request(app)
        .post('/api/users/')
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
    it('returns 400 error without email parameter', (done) => {
      chai.request(app)
        .post('/api/users/')
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
    it('returns 400 error without phone parameter', (done) => {
      chai.request(app)
        .post('/api/users/')
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
  });

  describe('Login a user', () => {

  });

  describe('Create a new group', () => {

  });

  describe('Add user to a new group', () => {

  });

  describe('Send message to a group', () => {

  });

  describe('View all messages in a group', () => {

  });

  describe('View all registered users', () => {

  });

  describe('View current registered user', () => {

  });
});
