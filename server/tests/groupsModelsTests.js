import chai from 'chai';
import models from '../models';

const expect = chai.expect;

describe('Groups Model', () => {
  it('should create new group', (done) => {
    const newGroup = {
      name: 'A group',
      desc: 'Some desc',
      admin: 1
    };
    models.Groups.create(newGroup)
    .then((group) => {
      expect(group.name).to.equal(newGroup.name);
      done();
    });
  });
});
