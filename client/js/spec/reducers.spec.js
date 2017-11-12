/* globals expect */
import { selectedGroup, search, groups } from '../reducers/group';
import messages from '../reducers/messages';
import user from '../reducers/user';
import error from '../reducers/error';

describe('Group reducers', () => {
  describe('When CHANGE_SELECTED_GROUP action ' +
  'type is fired from an action', () => {
    it('should change selected group in the store', () => {
      const state = [];
      const action = {
        type: 'CHANGE_SELECTED_GROUP',
        group: {
          id: 1,
          name: 'Group Name',
          desc: 'no description',
          admin: 2,
          messages: [],
          users: []
        }
      };
      expect(selectedGroup(state, action)).toEqual(action.group);
    });
  });

  describe('When no action type is fired from an action', () => {
    it('selectedGroup reducer should return default state in the store', () => {
      const state = {};
      const action = {};
      expect(selectedGroup(state, action)).toEqual({});
    });
  });

  describe('When no state is given in an action', () => {
    it('selectedGroup reducer should return default state in the store', () => {
      let state;
      const action = {};
      expect(selectedGroup(state, action)).toEqual({});
    });
  });

  describe('When SEARCH action type is fired from an action', () => {
    it('should change search results in the store', () => {
      const state = {};
      const action = {
        type: 'SEARCH',
        result: { users: [] }
      };
      expect(search(state, action)).toEqual({ users: [] });
    });
  });

  describe('When no action type is fired from an action', () => {
    it('search reducer should return default state in the store', () => {
      const state = {};
      const action = {};
      expect(search(state, action)).toEqual({});
    });
  });

  describe('When no state is given in an action', () => {
    it('search reducer should return default state in the store', () => {
      let state;
      const action = {};
      expect(search(state, action)).toEqual({});
    });
  });
});

describe('Messages reducers', () => {
  describe('When LOAD_MESSAGES action type is fired from an action', () => {
    it('should change messages in the store', () => {
      const state = [];
      const action = {
        type: 'LOAD_MESSAGES',
        messages: []
      };
      expect(messages(state, action)).toEqual([]);
    });
  });

  describe('When no action type is fired from an action', () => {
    it('messages reducer should return default state in the store', () => {
      let state;
      const action = {};
      expect(messages(state, action)).toEqual([]);
    });
  });
});

describe('User reducers', () => {
  describe('When LOGOUT_USER action type is fired from an action', () => {
    it('should change user value in the store', () => {
      const state = {};
      const action = {
        type: 'LOGOUT_USER'
      };
      expect(user(state, action)).toEqual({});
    });
  });

  describe('When GET_CURRENT_USER action type is fired from an action', () => {
    it('should user value in the store', () => {
      const state = {};
      const action = {
        type: 'GET_CURRENT_USER',
        user: { name: 'something' }
      };
      expect(user(state, action)).toEqual({ name: 'something' });
    });
  });

  describe('When PASSWORD_RESET action type is fired from an action', () => {
    it('should user value in the store', () => {
      const state = {};
      const action = {
        type: 'PASSWORD_RESET',
        payload: { stuff: 'stuff' }
      };
      expect(user(state, action)).toEqual({ stuff: 'stuff' });
    });
  });

  describe('When PASSWORD_REQUEST action type is fired from an action', () => {
    it('should user value in the store', () => {
      const state = {};
      const action = {
        type: 'PASSWORD_REQUEST',
        user: { message: 'Success' }
      };
      expect(user(state, action)).toEqual({ message: 'Success' });
    });
  });

  describe('When no action type is fired from an action', () => {
    it('user reducer should return default state in the store', () => {
      let state;
      const action = {};
      expect(user(state, action)).toEqual({});
    });
  });

  describe('When ERROR action type is fired from an action', () => {
    it('clearError reducer should return empty error message', () => {
      let state;
      const action = {
        type: 'ERROR',
        message: ''
      };
      expect(error(state, action)).toEqual('');
    });
  });

  describe('When no action type is fired from an action', () => {
    it('error reducer should return default state in the store', () => {
      let state;
      const action = {};
      expect(error(state, action)).toEqual('');
    });
  });

  describe('When FETCH_GROUPS_SUCCESS action type is fired from an action',
  () => {
    it('groups reducer should return array of groups', () => {
      let state;
      const action = {
        type: 'FETCH_GROUPS_SUCCESS',
        groups: []
      };
      expect(groups(state, action)).toEqual([]);
    });
  });

  describe('When CREATE_GROUP action type is fired from an action',
  () => {
    it('groups reducer should return array containing created group', () => {
      let state;
      const action = {
        type: 'CREATE_GROUP',
        group: {}
      };
      expect(groups(state, action)).toEqual([{}]);
    });
  });
});
