import chai from 'chai';
import models from '../models';
import dummy from '../../client/js/spec/__mocks__/dummy';

const expect = chai.expect;

describe('Users Model', () => {
  const createdUser = {
    username: dummy.username,
    phone: dummy.staticPhone,
    email: dummy.email,
    password: dummy.password
  };
  it('should create new user', (done) => {
    models.Users.create(createdUser)
    .then((user) => {
      expect(user.email).to.equal(createdUser.email);
      done();
    });
  });

  it('should fail if username is not provided', (done) => {
    const newUser = {
      phone: dummy.staticPhone,
      email: dummy.email,
      password: dummy.password
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to.equal('Users.username cannot be null');
      done();
    });
  });

  it('should fail if phone is not provided', (done) => {
    const newUser = {
      username: dummy.username,
      email: dummy.email,
      password: dummy.password
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to.equal('Users.phone cannot be null');
      done();
    });
  });

  it('should fail if password is not provided', (done) => {
    const newUser = {
      username: dummy.username,
      phone: dummy.staticPhone,
      email: dummy.email,
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to.equal('Users.password cannot be null');
      done();
    });
  });

  it('should fail if email is not provided', (done) => {
    const newUser = {
      username: dummy.username,
      phone: dummy.staticPhone,
      password: dummy.staticPhone
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to.equal('Users.email cannot be null');
      done();
    });
  });

  it('should fail if email is invalid', (done) => {
    const newUser = {
      username: dummy.username,
      phone: dummy.staticPhone,
      password: dummy.password,
      email: dummy.string
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('Validation isEmail on email failed');
      done();
    });
  });

  it('should fail if email already exists', (done) => {
    const newUser = {
      username: dummy.string,
      phone: dummy.staticPhone,
      email: createdUser.email,
      password: dummy.password
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('email must be unique');
      done();
    });
  });

  it('should fail if username already exists', (done) => {
    const newUser = {
      username: createdUser.username,
      phone: dummy.staticPhone,
      email: dummy.email,
      password: dummy.password
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('username must be unique');
      done();
    });
  });
});
