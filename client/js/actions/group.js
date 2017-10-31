import axios from 'axios';

/**
 * Change selected group
 * @param {object} group
 * @return {object} action
 */
export const changeSelectedGroup = group => ({
  type: 'CHANGE_SELECTED_GROUP',
  group
});

/**
 * Updates the search results
 * @param {array} result
 * @return {object} action
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
 * @return {object} action
 */
export const apiSearch = (groupId, searchTerm, page) =>
function action(dispatch) {
  const request = axios({
    method: 'GET',
    url: `/api/v1/search/${groupId}/${searchTerm}/${page}`
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
 * @return {object} action
 */
export const apiUpdateMembers = (selectedUsers, groupId) =>
function action(dispatch) {
  const request = axios({
    method: 'POST',
    data: { usersIds: selectedUsers },
    url: `/api/v1/groups/${groupId}/user/`
  });
  return request.then(
    () => {
      dispatch({ type: 'UPDATE_GROUP_MEMBERS', selectedUsers });
    }
  );
};
