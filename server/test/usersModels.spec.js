import chai from 'chai';
import models from '../models';
import mockData from '../../client/js/spec/__mocks__/mockData';

const expect = chai.expect;

describe('Users Model', () => {
  const createdUser = {
    username: mockData.username,
    phone: mockData.staticPhone,
    email: mockData.dynamicEmail,
    password: mockData.dynamicPassword
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
      phone: mockData.staticPhone,
      email: mockData.dynamicEmail,
      password: mockData.dynamicPassword
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to.equal('Users.username cannot be null');
      done();
    });
  });

  it('should fail if phone is not provided', (done) => {
    const newUser = {
      username: mockData.username,
      email: mockData.dynamicEmail,
      password: mockData.dynamicPassword
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to.equal('Users.phone cannot be null');
      done();
    });
  });

  it('should fail if password is not provided', (done) => {
    const newUser = {
      username: mockData.username,
      phone: mockData.staticPhone,
      email: mockData.dynamicEmail,
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to.equal('Users.password cannot be null');
      done();
    });
  });

  it('should fail if email is not provided', (done) => {
    const newUser = {
      username: mockData.username,
      phone: mockData.staticPhone,
      password: mockData.staticPhone
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to.equal('Users.email cannot be null');
      done();
    });
  });

  it('should fail if email is invalid', (done) => {
    const newUser = {
      username: mockData.username,
      phone: mockData.staticPhone,
      password: mockData.dynamicPassword,
      email: mockData.string
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
      username: mockData.string,
      phone: mockData.staticPhone,
      email: createdUser.email,
      password: mockData.dynamicPassword
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
      phone: mockData.staticPhone,
      email: mockData.dynamicEmail,
      password: mockData.dynamicPassword
    };
    models.Users.create(newUser)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('username must be unique');
      done();
    });
  });
});
