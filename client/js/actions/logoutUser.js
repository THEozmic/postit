const logoutUser = (user) => {
  return {
    type: 'LOGOUT_USER',
    user
  };
};

export default logoutUser;
