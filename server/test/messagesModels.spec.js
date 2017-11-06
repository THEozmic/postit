import chai from 'chai';
import models from '../models';
import dummy from '../../client/js/spec/__mocks__/dummy';

const expect = chai.expect;

describe('Messages Model', () => {
  it('should create new message', (done) => {
    const newMessage = {
      message: dummy.longString,
      priority: 'Normal',
      fromUser: 1,
      toGroup: 1
    };
    models.Messages.create(newMessage)
    .then((message) => {
      expect(message.message).to.equal(newMessage.message);
      done();
    });
  });

  it('should fail if message is not given', (done) => {
    const newMessage = {
      priority: 'Normal',
      fromUser: 1,
      toGroup: 1
    };
    models.Messages.create(newMessage)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('Messages.message cannot be null');
      done();
    });
  });

  it('should fail if fromUser is not given', (done) => {
    const newMessage = {
      message: dummy.longString,
      priority: 'Normal',
      toGroup: 1
    };
    models.Messages.create(newMessage)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('Messages.fromUser cannot be null');
      done();
    });
  });

  it('should fail if toGroup is not given', (done) => {
    const newMessage = {
      message: dummy.longString,
      priority: 'Normal',
      fromUser: 1,
    };
    models.Messages.create(newMessage)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('Messages.toGroup cannot be null');
      done();
    });
  });

  it('should fail if wrong priority is given', (done) => {
    const newMessage = {
      message: dummy.longString,
      priority: dummy.string,
      fromUser: 1,
      toGroup: 1
    };
    models.Messages.create(newMessage)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('Validation isIn on priority failed');
      done();
    });
  });
});
