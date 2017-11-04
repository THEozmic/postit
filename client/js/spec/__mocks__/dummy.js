/* globals jest */
import sinon from 'sinon';

export default {
  func: sinon.spy(),
  dashboardUser: { groups: [] },
  promiseFunc: sinon.spy(() => Promise.resolve()),
  promiseFuncReject: sinon.spy(() => Promise.reject()),
  emptyArray: [],
  emptyObject: {},
  groupsArray: [{ id: 1, name: 'test', desc: 'stuff' }],
  match: { params: { id: 1 } },
  username: 'username',
  messageObject: { id: 1,
    fromUser: 'stuff',
    priority: 'stuff',
    message: 'stuff' },
  string: 'Hello World',
  number: 1,
  btnText: 'Okay',
  createGroupString: 'create-group',
  boolTrue: true,
  boolFalse: false,
  activeString: 'active',
  user: { message: [] }
};
