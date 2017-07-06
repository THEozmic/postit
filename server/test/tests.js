process.env.NODE_ENV = 'test';

const models = require('../models');
const app = require('../app');
const chaiHttp = require('chai-http');
const chai = require('chai');

const should = chai.should();

chai.use(chaiHttp);

describe('PostIt Tests', () => {
  describe('Testing get routes', () => {
    it('returns all registered users', (done) => {
      chai.request(app)
        .get('/api/user/')
        .end((err, res) => {
          res.body.should.be.a('array');
          res.status.should.equals(200);
          done();
        });
    });
    it('returns all created groups', (done) => {
      chai.request(app)
        .get('/api/group/')
        .end((err, res) => {
          res.body.should.be.a('array');
          res.should.have.status(200);
          done();
        });
    });
    it('returns all messages in a group', (done) => {
      chai.request(app)
        .put('/api/group/1/messages')
        .end((err, res) => {
          res.body.should.be.a('array');
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('Testing all create routes', () => {
    it('returns new user', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .type('form')
        .send({
          password: '123',
          username: 'mike',
          email: 'mike@email.com'
        })
        .end((err, res) => {
          res.body.email.should.equal('mike@email.com');
          res.should.have.status(201);
          done();
        });
    });
    it('returns new group', (done) => {
      chai.request(app)
        .post('/api/group/')
        .type('form')
        .send({
          name: 'Test Group',
          type: 'public'
        })
        .end((err, res) => {
          res.body.name.should.equal('Test Group');
          res.should.have.status(201);
          done();
        });
    });
    it('returns new message', (done) => {
      chai.request(app)
        .post('/api/group/1/message')
        .type('form')
        .send({
          from_user: '1',
          to_group: '1',
          message: 'Test message to group'
        })
        .end((err, res) => {
          res.status.should.equal(201);
          done();
        });
    });
  });

  // describe('Testing all update routes', () => {
  //   it('returns message read status', (done) => {
  //     chai.request(app)
  //       .put('/api/group/1/messages')
  //       .type('form')
  //       .send({
  //         user: '1'
  //       })
  //       .end((err, res) => {
  //         res.status.should.equal(200);
  //         res.group.should.equal('1');
  //         done();
  //       });
  //   });
  // });

  // describe('Testing route authentication', () => {
  //   it('returns error when logged out user tries to create group', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  //   it('returns error when logged out user tries to view groups', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  //   it('returns error when logged out user tries to send message to any group', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  //   it('returns error when logged out user tries to read any message', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  //   it('returns error when user not in group tries to read any message in said group', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  //   it('returns error when invalid username and password combination is used to login', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  //   it('returns error when invalid email used to retrieve forgotten password', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  //   it('returns error when trying to get non-existent user', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  // });

  // describe('Testing form validation', () => {
  //   it('returns error when invalid email format is used to login', (done) => {
  //     chai.request(app)
  //       .get('/api/user/')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         done();
  //       });
  //   });
  // });
});
