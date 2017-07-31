const selectedGroup = (state = {}, action) => {
  const { type, group } = action;
  switch (type) {
    case 'CHANGE_SELECTED_GROUP':
      return group;
    default:
      return state;
  }
};

export default selectedGroup;
