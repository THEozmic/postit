import axios from 'axios';

/**
 * Change selected group
 * @param {object} group
 */
export const changeSelectedGroup = group => ({
  type: 'CHANGE_SELECTED_GROUP',
  group
});

/**
 * Updates the search results
 * @param {array} result
 */
const search = result => ({
  type: 'SEARCH',
  result
});

/**
 * Makes API call to search the database
 * @param {number} groupId 
 * @param {string} searchTerm 
 * @param {number} page 
 */
export const apiSearch = (groupId, searchTerm, page) =>
function action(dispatch) {
  const request = axios({
    method: 'GET',
    url: `/api/v1/search/${groupId}/${searchTerm}/${page - 1}`
  });
  return request.then(
    (response) => {
      dispatch(search(response.data));
    }
  );
};

/**
 * Make API call to update group members list
 * @param {array} selectedUsers 
 * @param {number} groupId 
 */

export const apiUpdateMembers = (selectedUsers, groupId) =>
function action(dispatch) {
  const request = axios({
    method: 'POST',
    data: { usersIds: selectedUsers },
    url: `/api/v1/groups/${groupId}/user/`
  });
  return request.then(
    (response) => {
      dispatch({ type: 'UPDATE_GROUP_MEMBERS', selectedUsers });
    }
  );
};
