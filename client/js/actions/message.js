import axios from 'axios';
import changeSelectedGroup from './group';

export function loadMessages(messages) {
  return {
    type: 'LOAD_MESSAGES',
    messages
  };
}

export const sendMessage = newMessage => ({
  type: 'SEND_MESSAGE',
  newMessage
});

export function fetchMessages(groupId) {
  return function action(dispatch) {
    const request = axios({
      method: 'GET',
      url: `/api/v1/groups/${groupId}`,
      headers:
        { 'x-access-token': JSON.parse(sessionStorage.getItem('user')).token }
    });
    return request.then(
      (response) => {
        dispatch(loadMessages(response.data.messages));
        dispatch(changeSelectedGroup(response.data));
      }
    );
  };
}
