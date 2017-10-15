import axios from 'axios';

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
});

export const logoutUser = user => ({
  type: 'LOGOUT_USER',
  user
});

export const registerUser = user => ({
  type: 'REGISTER_USER',
  user
});

const getCurrentUser = user => ({
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

export const apiGetCurrentUser = token => function action(dispatch) {
  axios.defaults.headers.common['x-access-token'] = token;
  const request = axios({
    method: 'GET',
    url: '/api/v1/users/me/'
  });
  return request.then(
    (response) => {
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      dispatch(getCurrentUser(response.data.user));
      if (location.hash !== '#/dashboard') {
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
      sessionStorage.setItem('token', response.data.token);
      dispatch(apiGetCurrentUser(response.data.token));
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
  axios.defaults.headers.common['x-access-token'] =
  sessionStorage.getItem('token');
  const request = axios({
    method: 'POST',
    data: { name, desc },
    url: '/api/v1/groups'
  });
  return request.then(
    () => {
      dispatch(apiGetCurrentUser(sessionStorage.getItem('token')));
    }
  );
};

export const apiResetPassword = ({ password, hash }) =>
function action(dispatch) {
  axios.defaults.headers.common['x-access-token'] =
  sessionStorage.getItem('token');
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
function action(dispatch) {
  axios.defaults.headers.common['x-access-token'] =
  sessionStorage.getItem('token');
  const request = axios({
    method: 'POST',
    data: { email },
    url: '/api/v1/users/request-password'
  });
  return request.then(
    () => {
      dispatch(passwordRequest('A request has been sent to that email'));
    }
  );
};
