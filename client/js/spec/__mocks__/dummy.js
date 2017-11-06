/* globals jest */
import sinon from 'sinon';
import faker from 'faker';

export default {
  func: sinon.spy(),
  dashboardUser: { groups: [] },
  promiseFunc: sinon.spy(() => Promise.resolve()),
  promiseFuncReject: sinon.spy(() => Promise.reject()),
  emptyArray: [],
  emptyObject: {},
  groupsArray: [{ id: 1, name: faker.lorem.word(), desc: faker.lorem.words() }],
  match: { params: { id: 1 } },
  matchHash: { params: { id: 1, hash: '' } },
  username: faker.internet.userName(),
  messageObject: { id: 1,
    fromUser: faker.lorem.word(),
    priority: faker.lorem.word(),
    message: faker.lorem.words() },
  string: faker.lorem.word(),
  longString: faker.lorem.sentences(),
  number: 1,
  btnText: 'Okay',
  createGroupString: 'create-group',
  boolTrue: true,
  boolFalse: false,
  activeString: 'active',
  user: { message: [] },
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  password: faker.internet.password(),
  staticPhone: '09004839432',
  staticUsername: 'testuser',
  staticPassword: 'testpassword',
  staticEmail: 'testuser@email.com'
};

