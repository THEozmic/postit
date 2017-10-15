export const selectedGroup = (state = {}, action) => {
  const { type, group } = action;
  switch (type) {
    case 'CHANGE_SELECTED_GROUP':
      return group;
    default:
      return state;
  }
};

export const search = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.result;
    default:
      return state;
  }
};
