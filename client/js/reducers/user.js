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
