import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
  loadMessages,
  sendMessage,
  fetchMessages,
  loginUser,
  logoutUser,
  registerUser
} from '../actions';

import changeSelectedGroup from '../actions/group';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('actions', () => {
  it('should create an action to change selected group', () => {
    const group = { name: 'Group Name' };
    const expectedAction = {
      type: 'CHANGE_SELECTED_GROUP',
      group
    };
    expect(changeSelectedGroup(group)).toEqual(expectedAction);
  });

  it('should create an action to load messages', () => {
    const messages = [{ message: 'Message content' }];
    const expectedAction = {
      type: 'LOAD_MESSAGES',
      messages
    };
    expect(loadMessages(messages)).toEqual(expectedAction);
  });

  it('should create an action to send messages', () => {
    const newMessage = [{ message: 'Message content' }];
    const expectedAction = {
      type: 'SEND_MESSAGE',
      newMessage
    };
    expect(sendMessage(newMessage)).toEqual(expectedAction);
  });

  it('creates LOAD_MESSAGES when fetching messages has been done', () => {
    mock.onGet('/api/v1/groups/1')
      .reply(200, { messages: [] });

    const expectedActions = [
    {
      type: 'LOAD_MESSAGES',
      messages: []
    },
    { group: { messages: [] },
    type: "CHANGE_SELECTED_GROUP"}];

    const store = mockStore({ messages: [] });

    return store.dispatch(fetchMessages(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });

  it('should create an action to login user', () => {
    const user = { name: 'Username' };
    const expectedAction = {
      type: 'LOGIN_USER',
      user
    };
    expect(loginUser(user)).toEqual(expectedAction);
  });

  it('should create an action to login user', () => {
    const user = { name: 'Username' };
    const expectedAction = {
      type: 'LOGOUT_USER',
      user
    };
    expect(logoutUser(user)).toEqual(expectedAction);
  });

  it('should create an action to login user', () => {
    const user = { name: 'Username' };
    const expectedAction = {
      type: 'REGISTER_USER',
      user
    };
    expect(registerUser(user)).toEqual(expectedAction);
  });
});