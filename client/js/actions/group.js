import axios from 'axios';

export const changeSelectedGroup = group => ({
  type: 'CHANGE_SELECTED_GROUP',
  group
});

const search = result => ({
  type: 'SEARCH',
  result
});

export const apiSearch = (groupId, searchTerm, page) =>
function action(dispatch) {
  axios.defaults.headers.common['x-access-token'] =
  sessionStorage.getItem('token');
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

export const apiUpdateMembers = (selectedUsers, groupId) =>
function action(dispatch) {
  axios.defaults.headers.common['x-access-token'] =
  sessionStorage.getItem('token');
  const request = axios({
    method: 'POST',
    data: { usersIds: selectedUsers },
    url: `/api/v1/groups/${groupId}/user/`
  });
  return request.then(
    (response) => {
      dispatch(search(response.data));
    }
  );
};
