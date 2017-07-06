process.env.NODE_ENV = 'test';

const models = require('../models');
const app = require('../app');
const fixtures = require('./fixtures');

const chaiHttp = require('chai-http');
const chai = require('chai');

const should = chai.should();


chai.use(chaiHttp);

describe('PostIt Tests', () => {
  describe('Testing users list', () => {
    it('returns all registered users', (done) => {
      chai.request(app)
        .get('/api/users/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
