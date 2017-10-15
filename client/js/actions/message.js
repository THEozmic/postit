import axios from 'axios';
import { changeSelectedGroup } from './group';

const loadMessages = messages => ({
  type: 'LOAD_MESSAGES',
  messages
});

const sendMessage = newMessage => ({
  type: 'SEND_MESSAGE',
  newMessage
});

const apiFetchGroup = (groupId, withMessages = true) =>
function action(dispatch) {
  axios.defaults.headers.common['x-access-token'] =
  sessionStorage.getItem('token');
  const request = axios({
    method: 'GET',
    url: `/api/v1/groups/${groupId}`
  });
  return request.then(
    (response) => {
      if (withMessages) {
        dispatch(loadMessages(response.data.messages));
      }
      dispatch(changeSelectedGroup(response.data));
    }
  );
};

export const apiSendMessage = ({ message, priority, toGroup }) =>
  function action(dispatch) {
    const request = axios({
      method: 'POST',
      url: `/api/v1/groups/${toGroup}/message`,
      data: { message, priority, toGroup },
      headers: [
        { 'x-access-token': sessionStorage.getItem('token') }
      ]
    });
    return request.then(
      () => {
        dispatch(apiFetchGroup(toGroup));
      }
    );
  };

export { apiFetchGroup, sendMessage, loadMessages };
