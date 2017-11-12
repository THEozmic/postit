/**
 * Reducer to recieve CHANGE_SELECTED_GROUP action
 * @param {object} state
 * @param {*} action
 * @return {object} state
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
 * @return {object} state
 */
export const search = (state = {}, action) => {
  const { type, result } = action;
  switch (type) {
    case 'SEARCH':
      return result;
    case 'SEARCH_COMPLETE':
      return { status: 'complete' };
    case 'SEARCH_STOP':
      return { status: 'stopped' };
    default:
      return state;
  }
};


export const groups = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_GROUPS_SUCCESS':
      return action.groups;
    case 'CREATE_GROUP':
      return [
        ...state,
        action.group
      ];
    default:
      return state;
  }
};
