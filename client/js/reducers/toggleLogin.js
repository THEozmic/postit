import constants from '../constants';

// TODO <<======>> check cookies for user token
// then set "isLoggedIn" value based on that
const initialState = {
  isLoggedIn: false
};
const toggleLogin = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.LOGIN_USER:
      console.log('LOGIN_USER: ' + action);
      newState.isLoggedIn = !initialState.isLoggedIn;
      return newState;
    default:
      return state;
  }
};
export default toggleLogin;
