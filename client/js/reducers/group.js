/**
 * Reducer to recieve CHANGE_SELECTED_GROUP action
 * @param {object} state
 * @param {*} action
 */
export const selectedGroup = (state = {}, action) => {
  const { type, group } = action;
  switch (type) {
    case 'CHANGE_SELECTED_GROUP':
      return group;
    default:
      return state;
  }
};

/**
 * Reducer to recieve SEARCH action
 * @param {object} state
 * @param {*} action
 */
export const search = (state = {}, action) => {
  const { type, result } = action;
  switch (type) {
    case 'SEARCH':
      return result;
    default:
      return state;
  }
};
