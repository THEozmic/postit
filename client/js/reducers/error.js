/**
 * Reducer to fire ERROR action
 * @param {array} state
 * @param {*} action
 * @return {array} state
 */
const error = (state = '', action) => {
  switch (action.type) {
    case 'ERROR':
      return action.message;
    default:
      return state;
  }
};

export default error;

