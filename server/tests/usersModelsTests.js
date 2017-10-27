import chai from 'chai';
import models from '../models';

const expect = chai.expect;

describe('Users Model', () => {
  it('should create new user', (done) => {
    const newUser = {
      username: 'theozmic',
      phone: '0903457883',
      email: 'theozmic@gmail.com',
      password: '12345password'
    };
    models.Users.create(newUser)
    .then((user) => {
      expect(user.email).to.equal(newUser.email);
      done();
    });
  });
});
