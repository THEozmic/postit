import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import mockData from '../../client/js/spec/__mocks__/mockData';

const should = chai.should(); // eslint-disable-line no-unused-vars
const expect = chai.expect;
chai.use(chaiHttp);
let token;

describe('groupsControllersTests ', () => {
  before((done) => {
    chai.request(app)
    .post('/api/v1/users/signin/')
    .type('form')
    .send({
      password: mockData.staticPassword,
      username: mockData.staticUsername
    })
    .end((err, res) => {
      res.should.have.status(202);
      token = res.body.token;
      done();
    });
  });

  describe('/api/v1/groups/', () => {
    it('returns 201 response and creates a new group', () => {
      chai.request(app)
      .post('/api/v1/groups/')
      .set('x-access-token', token)
      .type('form')
      .send({ name: mockData.string, desc: mockData.string })
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body.name).to.eql(mockData.string);
      });
    });
  });

  describe('/api/v1/groups/1/user/', () => {
    it('should return 200 and add a user to a group', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/user/')
      .type('form')
      .set('x-access-token', token)
      .send({
        usersIds: '[2]',
      })
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.message).to.eql('Group members list updated');
        done();
      });
    });
  });

  describe('/api/v1/groups/1/message/', () => {
    it('returns 201 response and creates a new message', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/message/')
      .set('x-access-token', token)
      .type('form')
      .send({
        message: mockData.longString
      })
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body.message.message).to.eql(mockData.longString);
        expect(res.body.message.toGroup).to.eql(1);
        done();
      });
    });
    it('should create a message with priority level critical', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/message/')
      .set('x-access-token', token)
      .type('form')
      .send({
        message: mockData.string,
        priority: 'critical'
      })
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body.message.message).to.eql(mockData.string);
        expect(res.body.message.toGroup).to.eql(1);
        expect(res.body.message.priority).to.eql('Critical');
        done();
      });
    });
    it('should create a message with priority level urgent', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/message/')
      .set('x-access-token', token)
      .type('form')
      .send({
        message: mockData.longString,
        priority: 'urgent'
      })
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body.message.message).to.eql(mockData.longString);
        expect(res.body.message.toGroup).to.eql(1);
        expect(res.body.message.priority).to.eql('Urgent');
        done();
      });
    });
    it('should not create a message with priority level dope', (done) => {
      chai.request(app)
      .post('/api/v1/groups/1/message/')
      .set('x-access-token', token)
      .type('form')
      .send({
        message: mockData.longString,
        priority: mockData.string
      })
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body.error).to.eql('Invalid priority level');
        done();
      });
    });
  });

  describe('/api/v1/groups/1/messages/', () => {
    it('returns 200 response and array of messages', (done) => {
      chai.request(app)
      .get('/api/v1/groups/1/messages/')
      .set('x-access-token', token)
      .type('form')
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.messages).to.be.a('array');
        done();
      });
    });
  });

  describe('/api/v1/groups/a/messages/', () => {
    it('returns 404 when a non existent group is passed', (done) => {
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
