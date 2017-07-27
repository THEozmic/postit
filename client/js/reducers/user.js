const userData = (state = {}, action) => {
  const { type, user } = action;
  switch (type) {
    case 'REGISTER_USER':
      console.log(user, '==========>>>');
      return user;
    default:
      return state;
  }
};

export default userData;
