import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import models from '../models';

process.env.NODE_ENV = 'test';
const should = chai.should();
let token;

chai.use(chaiHttp);

models.Users.destroy({
  where: {},
  cascade: true,
  truncate: true
});

models.Messages.destroy({
  where: {},
  cascade: true,
  truncate: true
});

models.Groups.destroy({
  where: {},
  cascade: true,
  truncate: true
});

models.GroupUsers.destroy({
  where: {},
  cascade: true,
  truncate: true
});

describe('PostIt Tests: ', () => {
  describe('Creating data: ', () => {
    it('POST /api/users/signup/ does create new user', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername',
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.body.email.should.equal('test@user.com');
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
        .type('form')
        .send({
          name: 'Test Group',
          type: 'public',
          token
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
        .type('form')
        .send({
          user_id: '1',
          group_id: '1',
          token
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.user_id.should.equal('1');
          done();
        });
    });
    it('POST /api/groups/:id/message/ does create new group message', (done) => {
      chai.request(app)
        .post('/api/groups/1/message/')
        .type('form')
        .send({
          from_user: '1',
          to_group: '1',
          message: 'Test message to group',
          priority: 'Normal',
          token
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
        .get(`/api/users/?token=${token}`)
        .end((err, res) => {
          res.status.should.equals(200);
          res.body.should.be.a('array');
          res.body.length.should.equals(1);
          done();
        });
    });
    it('GET /api/groups/ does get all created groups', (done) => {
      chai.request(app)
        .get(`/api/groups/?token=${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equals(1);
          done();
        });
    });
    it('GET /api/groups/:id/messages/ does get all messages in a group', (done) => {
      chai.request(app)
        .get(`/api/groups/1/messages/?token=${token}`)
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
        .type('form')
        .send({
          type: 'public',
          token
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.equal('Param: "name" is required');
          done();
        });
    });

    it('POST /api/groups/ is validated', (done) => {
      chai.request(app)
        .post('/api/groups/')
        .type('form')
        .send({
          name: 'Test group'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.equal('Param: "type" is required');
          done();
        });
    });
    it('POST /api/groups/:id/user is validated', (done) => {
      chai.request(app)
        .post('/api/groups/:id/user')
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
        .type('form')
        .send({
          user_id: '1',
          last_seen: 'null'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.equal('Param: "group_id" is required');
          done();
        });
    });
    it('POST /api/groups/:id/user is validated', (done) => {
      chai.request(app)
        .post('/api/groups/:id/user')
        .type('form')
        .send({
          user_id: '1',
          group_id: '1'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.equal('Param: "last_seen" is NOT required');
          done();
        });
    });
    it('POST /api/groups/:id/message/ is validated', (done) => {
      chai.request(app)
        .post('/api/groups/1/message/')
        .type('form')
        .send({
          to_group: '1',
          message: 'Test message to group',
          priority: 'Normal'
        })
        .end((err, res) => {
          res.status.should.equal(400);
          res.body.message.should.equal('Param: "last_seen" is NOT required');
          done();
        });
    });
    it('POST /api/users/signup/ raises duplicate email error', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .type('form')
        .send({
          password: 'testpassword',
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('POST /api/users/signup/ raises duplicate username error', (done) => {
      chai.request(app)
        .post('/api/users/signup/')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
