const selectedGroup = (state = '', action) => {
  const { type, group } = action;
  switch (type) {
    case 'CHANGE_SELECTED_GROUP':
      return 'Andela Bootcampers';
    default:
      return state;
  }
};

export default selectedGroup;
