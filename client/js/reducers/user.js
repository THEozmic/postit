
/**
 * Reducer to recieve LOGOUT_USER, GET_CURRENT_USER
 * PASSWORD_RESET and PASSWORD_REQUEST actions
 * @param {object} state
 * @param {*} action
 */
const user = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'LOGOUT_USER':
      return {};
    case 'GET_CURRENT_USER':
      return action.user;
    case 'PASSWORD_RESET':
      return action.payload;
    case 'PASSWORD_REQUEST':
      return action.payload;
    default:
      return state;
  }
};

export default user;
