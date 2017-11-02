/* globals expect */
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import setToken from '../helpers/setToken';

import {
  changeSelectedGroup,
  loadMessages,
  apiFetchGroup,
  loginUser,
  logoutUser,
  registerUser,
  apiSearch,
  apiUpdateMembers,
  apiSendMessage,
  apiRequestPassword,
  apiResetPassword,
  apiCreateGroup,
  apiRegisterUser,
  apiLoginUser,
  apiGetCurrentUser
} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('actions', () => {
  describe('Group action', () => {
    it('should create an action to' +
     'change selected group when valid parameter are passed',
    () => {
      const group = { name: 'Group Name' };
      const expectedAction = {
        type: 'CHANGE_SELECTED_GROUP',
        group
      };
      expect(changeSelectedGroup(group)).toEqual(expectedAction);
    });

    it('should make api call and create an' +
    ' action to update group members', () => {
      mock.onPost('/api/v1/groups/1/user/')
        .reply(201, { users: [] });

      const expectedActions =
      [{ type: 'UPDATE_GROUP_MEMBERS', selectedUsers: [] }];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiUpdateMembers([], 1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should make api call and create an action to search members', () => {
      mock.onGet('/api/v1/search/1/term/1')
        .reply(200, { users: [] });

      const expectedActions = [{ type: 'SEARCH', result: { users: [] } }];

      const store = mockStore({});
      return store.dispatch(apiSearch(1, 'term', 1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Message action', () => {
    it('should create an action to load messages', () => {
      const messages = [{ message: 'Message content' }];
      const expectedAction = {
        type: 'LOAD_MESSAGES',
        messages
      };
      expect(loadMessages(messages)).toEqual(expectedAction);
    });

    it('should make api call and create an action to send messages', () => {
      mock.onPost('/api/v1/groups/1/message')
        .reply(201, { message: [] });

      const expectedActions = [];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiSendMessage(
        { message: 'message', priority: 'urgent', toGroup: 1 }
      )).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates LOAD_MESSAGES and CHANGE_SELECTED_GROUP ' +
    'when fetching group has been done', () => {
      mock.onGet('/api/v1/groups/1')
        .reply(200, { messages: [] });

      const expectedActions = [
        {
          type: 'LOAD_MESSAGES',
          messages: []
        },
        { group: { messages: [] },
          type: 'CHANGE_SELECTED_GROUP'
        }];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiFetchGroup(1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates CHANGE_SELECTED_GROUP when ' +
    'fetching group has been done', () => {
      mock.onGet('/api/v1/groups/1')
        .reply(200, { messages: [] });

      const expectedActions = [
        { group: { messages: [] },
          type: 'CHANGE_SELECTED_GROUP'
        }];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiFetchGroup(1, false)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('User action', () => {
    it('should make api call and create an ' +
    'action to request password change', () => {
      mock.onPost('/api/v1/users/request-password')
        .reply(201, { message: [] });

      const expectedActions = [];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiRequestPassword('email')).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should make api call and create an action to reset password', () => {
      mock.onPost('/api/v1/users/reset-password/hash')
        .reply(201, { message: [] });

      const expectedActions = [{
        type: 'PASSWORD_RESET',
        payload: { message: 'Password Reset Successful', btnText: 'Okay' }
      }];

      const store = mockStore({ messages: [] });

      return store
      .dispatch(apiResetPassword({ password: 'password', hash: 'hash' }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should make api call and create an action to create group', () => {
      mock.onPost('/api/v1/groups')
        .reply(201, { message: [] });

      const expectedActions = [];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiCreateGroup({ name: 'Group name', desc: '' }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should make api call and create an action to login user', () => {
      mock.onPost('/api/v1/users/signin')
        .reply(200, { message: [] });

      const expectedActions = [];

      const store = mockStore({ messages: [] });

      return store.dispatch(
        apiLoginUser({
          username: 'username',
          password: 'password'
        }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should make api call and create an action to register user', () => {
      mock.onPost('/api/v1/users')
        .reply(200, { message: [] });

      const expectedActions = [];

      const store = mockStore({ messages: [] });

      return store.dispatch(
        apiRegisterUser({
          username: 'username',
          email: 'email',
          password: 'password',
          phone: '090'
        }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should make api call and create an action ' +
    'to get logged in user with #/login', () => {
      mock.onGet('/api/v1/users/me/')
        .reply(200, { user: {} });

      const expectedActions = [{ type: 'GET_CURRENT_USER', user: {} }];

      const store = mockStore({ messages: [] });
      location.hash = '#/login';
      return store.dispatch(
        apiGetCurrentUser())
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should make api call and create an action to ' +
    'get logged in user with #/dashboard', () => {
      mock.onGet('/api/v1/users/me/')
        .reply(200, { user: {} });

      const expectedActions = [{ type: 'GET_CURRENT_USER', user: {} }];

      const store = mockStore({ messages: [] });
      location.hash = '#/dashboard';
      return store.dispatch(
        apiGetCurrentUser())
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
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

  describe('setToken helper function', () => {
    it('should set headers for axios', () => {
      expect(setToken('dummytoken')).toBeTruthy();
    });
  });
});
