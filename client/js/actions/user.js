import axios from 'axios';
import setToken from '../helpers/setToken';

/**
 * Logs in and Sets the logged in user into the store
 * @param {object} user
 * @returns {object} action
 */
export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
});

/**
 * Remove the user from the store
 * @param {object} user
 * @returns {object} action
 */
export const logoutUser = user => ({
  type: 'LOGOUT_USER',
  user
});

/**
 * Sets the user in the store and fires the register user action
 * @param {object} user
 * @returns {object} action
 */
export const registerUser = user => ({
  type: 'REGISTER_USER',
  user
});

/**
 * Sets the new group in the store
 * @param {object} group
 * @returns {object} action
 */
export const createGroup = group => ({
  type: 'CREATE_GROUP',
  group
});

/**
 * Get current user
 * @param {object} user
 * @returns {object} action
 */
export const getCurrentUser = user => ({
  type: 'GET_CURRENT_USER',
  user
});

/**
 * Reset password action
 * @param {object} message
 * @returns {object} action
 */
const passwordReset = message => ({
  type: 'PASSWORD_RESET',
  payload: { message, btnText: 'Okay' }
});

/**
 * Async action for Get current user
 * @returns {promise} request
 */
export const apiGetCurrentUser = () => function action(dispatch) {
  const request = axios({
    method: 'GET',
    url: '/api/v1/users/me/'
  });
  return request.then(
    (response) => {
      dispatch(getCurrentUser(response.data.user));
      if (location.hash === '#/login' || location.hash === '#/register') {
        location.href = '#/dashboard';
      }
    }
  );
};

/**
 * Async action for Get user groups
 * @returns {promise} request
 */
export const apiFetchGroups = () => function action(dispatch) {
  const request = axios({
    method: 'GET',
    url: '/api/v1/users/me/'
  });
  return request.then(
    (response) => {
      dispatch({
        type: 'FETCH_GROUPS_SUCCESS',
        groups: response.data.user.groups
      });
    }
  );
};

/**
 * Async action for Login user
 * @returns {promise} request
 * @param {object} options
 */
export const apiLoginUser = ({ username, password }) =>
function action(dispatch) {
  dispatch({
    type: 'ERROR',
    message: ''
  });
  const request = axios({
    method: 'POST',
    data: { username, password },
    url: '/api/v1/users/signin'
  });
  return request.then(
    (response) => {
      setToken(response.data.token);
      dispatch(apiGetCurrentUser());
    }
  ).catch((error) => {
    dispatch({
      type: 'ERROR',
      message: error.data.error
    });
  });
};

/**
 * Async action for Register user
 * @returns {promise} request
 * @param {object} options
 */
export const apiRegisterUser = ({ username, email, password, phone }) =>
function action(dispatch) {
  dispatch({
    type: 'ERROR',
    message: ''
  });
  const request = axios({
    data: { username, email, password, phone },
    method: 'POST',
    url: '/api/v1/users'
  });
  request.then((response) => {
    setToken(response.data.token);
    dispatch(apiGetCurrentUser());
  }).catch((error) => {
    dispatch({
      type: 'ERROR',
      message: error.data.error
    });
  });
  return request;
};

/**
 * Async action for Get create group
 * @returns {promise} request
 * @param {object} options
 */
export const apiCreateGroup = ({ name, desc }) =>
function action(dispatch) {
  const request = axios({
    method: 'POST',
    data: { name, desc },
    url: '/api/v1/groups'
  });
  return request.then(
    (response) => {
      if (desc.trim() === '') {
        desc = 'no description';
      }
      dispatch(createGroup({ name, desc, id: response.data.id }));
    }
  );
};

/**
 * Async action for Get reset password
 * @returns {promise} request
 * @param {object} options
 */
export const apiResetPassword = ({ password, hash }) =>
function action(dispatch) {
  dispatch({
    type: 'ERROR',
    message: ''
  });
  const request = axios({
    method: 'POST',
    data: { password },
    url: `/api/v1/users/reset-password/${hash}`
  });
  return request.then(() => {
    dispatch(passwordReset('Password Reset Successful'));
  }).catch((error) => {
    dispatch({
      type: 'ERROR',
      message: error.data.error
    });
  });
};

/**
 * Async action for request password
 * @returns {promise} request
 * @param {string} email
 */
export const apiRequestPassword = email =>
function action(dispatch) {
  dispatch({
    type: 'ERROR',
    message: ''
  });
  const request = axios({
    method: 'POST',
    data: { email },
    url: '/api/v1/users/request-password'
  });
  return request.then(() => {
    dispatch({
      type: 'PASSWORD_REQUEST',
      user: { message: 'Success' }
    });
  })
  .catch((error) => {
    console.log(error, 'eee');
    dispatch({
      type: 'ERROR',
      message: error.data.error
    });
  });
};
