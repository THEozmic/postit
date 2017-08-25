import constants from '../constants';

const initialState = {
  isLoggedIn: false
};
const toggleLogin = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.LOGIN_USER:
      newState.isLoggedIn = !initialState.isLoggedIn;
      return newState;
    default:
      return state;
  }
};
export default toggleLogin;
