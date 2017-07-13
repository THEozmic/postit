import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import models from '../models';

process.env.NODE_ENV = 'test';
const should = chai.should();
let token;

chai.use(chaiHttp);

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

describe('PostIt Tests: ', () => {
  describe('Creating data: ', () => {
    beforeEach((done) => {
      models.sequelize.sync();
      done();
    });
    it('POST /api/users/signup/ does create new user', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername',
          email: 'test@user.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.body.body.email.should.equal('test@user.com');
          res.should.have.status(201);
          done();
        });
    });
    it('POST /api/users/signin/ does login user', (done) => {
      chai.request(app)
        .post('/api/users/signin/')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername'
        })
        .end((err, res) => {
          res.should.have.status(202);
          res.body.token.should.not.equals(null);
          token = res.body.token; // set login token
          done();
        });
    });
    it('POST /api/groups/ does create new group', (done) => {
      chai.request(app)
        .post('/api/groups/')
        .set('x-access-token', token)
        .type('form')
        .send({
          name: 'Test Group',
          type: 'public'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.name.should.equal('Test Group');
          done();
        });
    });
    it('POST /api/groups/:id/user does add user to group', (done) => {
      chai.request(app)
        .post('/api/groups/1/user')
        .set('x-access-token', token)
        .type('form')
        .send({
          user_id: 1,
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.user_id.should.equal(1);
          done();
        });
    });
    it('POST /api/groups/:id/message/ does create new group message',
    (done) => {
      chai.request(app)
        .post('/api/groups/1/message/')
        .set('x-access-token', token)
        .type('form')
        .send({
          from_user: '1',
          to_group: '1',
          message: 'Test message to group',
          priority: 'Normal'
        })
        .end((err, res) => {
          res.status.should.equal(201);
          res.body.message.should.equal('Test message to group');
          done();
        });
    });
  });

  describe('Retrieving data', () => {
    it('GET /api/users/ does get all registered users', (done) => {
      chai.request(app)
        .get('/api/users/')
        .set('x-access-token', token)
        .end((err, res) => {
          res.status.should.equals(200);
          res.body.should.be.a('array');
          res.body.length.should.equals(1);
          done();
        });
    });
    it('GET /api/groups/ does get all created groups', (done) => {
      chai.request(app)
        .get('/api/groups/')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equals(1);
          done();
        });
    });
    it('GET /api/groups/:id/messages/ does get all messages in a group',
    (done) => {
      chai.request(app)
        .get('/api/groups/1/messages/')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equals(1);
          done();
        });
    });
  });

  describe('Routes are protected', () => {
    it('POST /api/groups/ is protected', (done) => {
      chai.request(app)
        .post('/api/groups/')
        .type('form')
        .send({
          name: 'Test Group',
          type: 'public'
        })
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
    it('POST /api/groups/:id/user is protected', (done) => {
      chai.request(app)
        .post('/api/groups/:id/user')
        .type('form')
        .send({
          user_id: '1',
          group_id: '1',
          last_seen: 'null'
        })
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
    it('POST /api/groups/:id/message/ is protected', (done) => {
      chai.request(app)
        .post('/api/groups/1/message/')
        .type('form')
        .send({
          from_user: '1',
          to_group: '1',
          message: 'Test message to group',
          priority: 'Normal'
        })
        .end((err, res) => {
          res.status.should.equal(401);
          done();
        });
    });
  });

  describe('Inputes are validated', () => {
    it('POST /api/groups/ is validated', (done) => {
      chai.request(app)
        .post('/api/groups/')
        .set('x-access-token', token)
        .type('form')
        .send({
          type: 'public'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.equal('Params: "name" and "type" are required');
          done();
        });
    });

    it('POST /api/groups/ is validated', (done) => {
      chai.request(app)
        .post('/api/groups/')
        .set('x-access-token', token)
        .type('form')
        .send({
          name: 'Test group'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.equal('Params: "name" and "type" are required');
          done();
        });
    });
    it('POST /api/groups/:id/user is validated', (done) => {
      chai.request(app)
        .post('/api/groups/:id/user')
        .set('x-access-token', token)
        .type('form')
        .send({
          group_id: '1',
          last_seen: 'null'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.equal('Param: "user_id" is required');
          done();
        });
    });
    it('POST /api/groups/:id/user is validated', (done) => {
      chai.request(app)
        .post('/api/groups/:id/user')
        .set('x-access-token', token)
        .type('form')
        .send({
          user_id: '1',
          last_seen: 'null'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('POST /api/groups/:id/user is validated', (done) => {
      chai.request(app)
        .post('/api/groups/1/user')
        .set('x-access-token', token)
        .type('form')
        .send({
          user_id: '1',
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
    it('POST /api/groups/:id/message/ is validated', (done) => {
      chai.request(app)
        .post('/api/groups/1/message/')
        .set('x-access-token', token)
        .type('form')
        .send({
          to_group: '1',
          message: 'Test message to group',
          priority: 'Normal'
        })
        .end((err, res) => {
          res.status.should.equal(400);
          done();
        });
    });
    it('POST /api/groups/:id/message/ \
    does not create message without group', (done) => {
      chai.request(app)
        .post('/api/groups/1/message/')
        .set('x-access-token', token)
        .type('form')
        .send({
          from_user: '1',
          message: 'Test message to group',
          priority: 'Normal'
        })
        .end((err, res) => {
          res.status.should.equal(400);
          done();
        });
    });
    it('POST /api/groups/:id/message/ does not create message without priority',
     (done) => {
      chai.request(app)
        .post('/api/groups/1/message/')
        .set('x-access-token', token)
        .type('form')
        .send({
          message: 'Test message to group',
          from_user: '1',
          to_group: '1'
        })
        .end((err, res) => {
          res.status.should.equal(400);
          done();
        });
    });
    it('POST /api/users/signup/ raises duplicate email error', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .set('x-access-token', token)
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername',
          email: 'test@user.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('POST /api/users/signup/ raises duplicate username error', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .set('x-access-token', token)
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername',
          email: 'test@user.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('POST /api/users/signup/ does not signup without username', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .set('x-access-token', token)
        .type('form')
        .send({
          password: 'testpassword',
          email: 'test2@user.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('POST /api/users/signup/ does not signup without username', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .set('x-access-token', token)
        .type('form')
        .send({
          password: 'testpassword',
          email: 'test2@user.com',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('POST /api/users/signup/ does not signup without email', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .set('x-access-token', token)
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername2',
          phone: '07010346915'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('POST /api/users/signup/ does not signup without phone', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .set('x-access-token', token)
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername2',
          email: 'testemail@email.com'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
