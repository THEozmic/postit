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
  apiGetCurrentUser,
  clearError
} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('actions', () => {
  describe('Group action', () => {
    it('should create an action to' +
     'change selected group when action type CHANGE_SELECTED_GROUP is passed',
    () => {
      const group = { name: 'Group Name' };
      const expectedAction = {
        type: 'CHANGE_SELECTED_GROUP',
        group
      };
      expect(changeSelectedGroup(group)).toEqual(expectedAction);
    });

    it('should make api call and create an' +
    ' action to update group members when action type ' +
     'UPDATE_GROUP_MEMBERS is passed', () => {
      mock.onPost('/api/v1/groups/1/user/')
        .reply(201, { users: [] });

      const expectedAction =
      [{ status: 'complete', type: 'SEARCH_COMPLETE' }];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiUpdateMembers([], 1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should make api call and create an action to search ' +
    'members when action type SEARCH is passed', () => {
      mock.onGet('/api/v1/search/1/term/1')
        .reply(200, { users: [] });

      const expectedAction = [{ type: 'SEARCH', result: { users: [] } }];

      const store = mockStore({});
      return store.dispatch(apiSearch(1, 'term', 1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });

  describe('Message action', () => {
    it('should create an action to load messages when action ' +
    'type LOAD_MESSAGES is passed', () => {
      const messages = [{ message: 'Message content' }];
      const expectedAction = {
        type: 'LOAD_MESSAGES',
        messages
      };
      expect(loadMessages(messages)).toEqual(expectedAction);
    });

    it('should make api call and create an action to send messages when ' +
    'default action type is used', () => {
      mock.onPost('/api/v1/groups/1/message')
        .reply(201, { message: [] });

      const expectedAction = [];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiSendMessage(
        { message: 'message', priority: 'urgent', toGroup: 1 }
      )).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('creates LOAD_MESSAGES and CHANGE_SELECTED_GROUP ' +
    'when fetching group has been done', () => {
      mock.onGet('/api/v1/groups/1')
        .reply(200, { messages: [] });

      const expectedAction = [
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
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('creates CHANGE_SELECTED_GROUP when ' +
    'fetching group has been done', () => {
      mock.onGet('/api/v1/groups/1')
        .reply(200, { messages: [] });

      const expectedAction = [
        { group: { messages: [] },
          type: 'CHANGE_SELECTED_GROUP'
        }];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiFetchGroup(1, false)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });

  describe('User action', () => {
    it('should create action to clear error when action of ' +
    'type ERROR is passed', () => {
      const expectedAction = {
        type: 'ERROR',
        message: ''
      };
      expect(clearError()).toEqual(expectedAction);
    });

    it('should make api call and create an ' +
    'action to request password change when request password action is called',
    () => {
      mock.onPost('/api/v1/users/request-password')
        .reply(201, { message: [] });

      const expectedAction = [{
        type: 'PASSWORD_REQUEST',
        user: { message: 'Success' } }];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiRequestPassword('email')).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should make api call and create an action to reset password ' +
     'PASSWORD_RESET action is passed', () => {
      mock.onPost('/api/v1/users/reset-password/hash')
        .reply(201, { message: [] });

      const expectedAction = [{
        type: 'PASSWORD_RESET',
        payload: { message: 'Password Reset Successful', buttonText: 'Okay' }
      }];

      const store = mockStore({ messages: [] });

      return store
      .dispatch(apiResetPassword({ password: 'password', hash: 'hash' }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should make api call and create an action to create group when ' +
    'create group action is called', () => {
      mock.onPost('/api/v1/groups')
        .reply(201, { message: [] });

      const expectedAction = [{
        group: {
          desc: 'no description',
          id: undefined,
          name: 'Group name'
        },
        type: 'CREATE_GROUP' }];

      const store = mockStore({ messages: [] });

      return store.dispatch(apiCreateGroup({ name: 'Group name', desc: '' }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should make api call and create an action to login user when' +
    ' login user action is fired', () => {
      mock.onPost('/api/v1/users/signin')
        .reply(200, { message: [] });

      const expectedAction = [];

      const store = mockStore({ messages: [] });

      return store.dispatch(
        apiLoginUser({
          username: 'username',
          password: 'password'
        }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should make api call and create an action to register user when ' +
    'register user action is fired', () => {
      mock.onPost('/api/v1/users')
        .reply(200, { message: [] });

      const expectedAction = [];

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
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should make api call and create an action ' +
    'to get logged in user when location is in ' +
    'login page and GET_CURRENT_USER action type is passed', () => {
      mock.onGet('/api/v1/users/me/')
        .reply(200, { user: {} });

      const expectedAction = [{ type: 'GET_CURRENT_USER', user: {} }];

      const store = mockStore({ messages: [] });
      location.hash = '#/login';
      return store.dispatch(
        apiGetCurrentUser())
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should make api call and create an action ' +
    'to get logged in user when location is in ' +
    'dashboard page and GET_CURRENT_USER action type is passed', () => {
      mock.onGet('/api/v1/users/me/')
        .reply(200, { user: {} });

      const expectedAction = [{ type: 'GET_CURRENT_USER', user: {} }];

      const store = mockStore({ messages: [] });
      location.hash = '#/dashboard';
      return store.dispatch(
        apiGetCurrentUser())
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedAction);
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

    it('should create an action to login user when LOGOUT_USER action ' +
    'type is passed', () => {
      const user = { name: 'Username' };
      const expectedAction = {
        type: 'LOGOUT_USER',
        user
      };
      expect(logoutUser(user)).toEqual(expectedAction);
    });

    it('should create an action to register user when' +
    'REGISTER_USER action type is passed', () => {
      const user = { name: 'Username' };
      const expectedAction = {
        type: 'REGISTER_USER',
        user
      };
      expect(registerUser(user)).toEqual(expectedAction);
    });
  });

  describe('setToken helper function', () => {
    it('should return truthy value when successfully called', () => {
      expect(setToken('mockDatatoken')).toBeTruthy();
    });
  });
});
