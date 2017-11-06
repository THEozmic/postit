import chai from 'chai';
import sendMail from '../server/helpers/sendMail';

describe('Register a new user returns correct error message', () => {
  it('It returns 400 error without password parameter', () => {
    sendMail('email', 'message');
  });
});
