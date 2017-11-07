import chai from 'chai';
import models from '../models';
import mockData from '../../client/js/spec/__mocks__/mockData';

const expect = chai.expect;

describe('Groups Model', () => {
  it('should create new group', (done) => {
    const newGroup = {
      name: mockData.string,
      desc: mockData.string,
      admin: 1
    };
    models.Groups.create(newGroup)
    .then((group) => {
      expect(group.name).to.equal(newGroup.name);
      done();
    });
  });

  it('should fail if name is not given', (done) => {
    const newGroup = {
      desc: mockData.string,
      admin: 1
    };
    models.Groups.create(newGroup)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('Groups.name cannot be null');
      done();
    });
  });

  it('should fail if admin is not given', (done) => {
    const newGroup = {
      name: mockData.string,
      desc: mockData.string,
    };
    models.Groups.create(newGroup)
    .catch((error) => {
      expect(error.errors[0].message).to
      .equal('Groups.admin cannot be null');
      done();
    });
  });
});
