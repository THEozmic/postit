import axios from 'axios';
import changeSelectedGroup from './group';

const loadMessages = messages => ({
  type: 'LOAD_MESSAGES',
  messages
});

const sendMessage = newMessage => ({
  type: 'SEND_MESSAGE',
  newMessage
});

const fetchMessages = groupId => function action(dispatch) {
  const request = axios({
    method: 'GET',
    url: `/api/v1/groups/${groupId}`,
    headers: [
      { 'x-access-token': JSON.parse(sessionStorage.getItem('users')).token }
    ]
  });
  return request.then(
    (response) => {
      dispatch(loadMessages(response.data.messages));
      dispatch(changeSelectedGroup(response.data));
    }
  );
};

export { fetchMessages, sendMessage, loadMessages };
