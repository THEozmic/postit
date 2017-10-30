import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const should = chai.should();
chai.use(chaiHttp);
let token;

describe('usersControllersTests ', () => {
  before((done) => {
    chai.request(app)
    .post('/api/v1/users/signin/')
    .type('form')
    .send({
      password: 'testuser',
      username: 'testuser'
    })
    .end((err, res) => {
      res.should.have.status(202);
      token = res.body.token;
      done();
    });
  });

  describe('Create a new group', () => {
    it('returns 201 response', () => {
      chai.request(app)
      .post('/api/v1/groups/')
      .set('x-access-token', token)
      .type('form')
      .send({ name: 'Test Group', desc: 'A simple test group' })
      .end((err, res) => {
        res.should.have.status(201);
      });
    });
  });

  describe('Add user to a new group', () => {
    it('should return 200 to add a user to a group', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/user/')
      .type('form')
      .set('x-access-token', token)
      .send({
        usersIds: '[2]',
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });

  describe('Send message to a group', () => {
    it('returns 200 response', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/message/')
      .set('x-access-token', token)
      .type('form')
      .send({
        message: 'test message'
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
    });
    it('should work with priority level critical', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/message/')
      .set('x-access-token', token)
      .type('form')
      .send({
        message: 'test message',
        priority: 'critical'
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
    });
    it('should work with priority level urgent', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/message/')
      .set('x-access-token', token)
      .type('form')
      .send({
        message: 'test message',
        priority: 'urgent'
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
    });
    it('should not with priority level dope', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/message/')
      .set('x-access-token', token)
      .type('form')
      .send({
        message: 'test message',
        priority: 'dope'
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
    });
  });

  describe('View all messages in a group', () => {
    it('returns 200 response', (done) => {
      chai.request(app)
      .get('/api/v1/groups/1/messages/')
      .set('x-access-token', token)
      .type('form')
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });

  describe('Get messages in a group', () => {
    it('returns 404', (done) => {
      chai.request(app)
      .post('/api/v1/groups/a/messages/')
      .type('form')
      .set('x-access-token', token)
      .send()
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });
});
