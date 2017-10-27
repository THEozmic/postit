import axios from 'axios';
import setToken from '../helpers/setToken';

/**
 * Logs in and Sets the logged in user into the store
 * @param {object} user
 */
export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
});

/**
 * Remove the user from the store
 * @param {object} user
 */
export const logoutUser = user => ({
  type: 'LOGOUT_USER',
  user
});


/**
 * Sets the user in the store and fires the register user action
 * @param {object} user 
 */
export const registerUser = user => ({
  type: 'REGISTER_USER',
  user
});

export const getCurrentUser = user => ({
  type: 'GET_CURRENT_USER',
  user
});

const passwordRequest = message => ({
  type: 'PASSWORD_REQUEST',
  payload: { message, btnText: 'Okay' }
});

const passwordReset = message => ({
  type: 'PASSWORD_RESET',
  payload: { message, btnText: 'Okay' }
});

export const apiGetCurrentUser = () => function action(dispatch) {
  const request = axios({
    method: 'GET',
    url: '/api/v1/users/me/'
  });
  return request.then(
    (response) => {
      dispatch(getCurrentUser(response.data.user));
      if (location.hash === '#/login') {
        location.href = '#/dashboard';
      }
    }
  );
};

export const apiLoginUser = ({ username, password }) =>

function action(dispatch) {
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
  );
};

export const apiRegisterUser = ({ username, email, password, phone }) =>
function action(dispatch) {
  const request = axios({
    data: { username, email, password, phone },
    method: 'POST',
    url: '/api/v1/users'
  });
  return request.then(
    () => {
      dispatch(apiLoginUser({ username, password }));
    }
  );
};

export const apiCreateGroup = ({ name, desc }) =>
function action(dispatch) {
  const request = axios({
    method: 'POST',
    data: { name, desc },
    url: '/api/v1/groups'
  });
  return request.then(
    () => {
      dispatch(apiGetCurrentUser());
    }
  );
};

export const apiResetPassword = ({ password, hash }) =>
function action(dispatch) {
  const request = axios({
    method: 'POST',
    data: { password },
    url: `/api/v1/users/reset-password/${hash}`
  });
  return request.then(
    () => {
      dispatch(passwordReset('Password Reset Successful'));
    }
  );
};

export const apiRequestPassword = email =>
function action() {
  const request = axios({
    method: 'POST',
    data: { email },
    url: '/api/v1/users/request-password'
  });
  return request;
};
