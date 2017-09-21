import axios from 'axios';

const loadMessages = messages => ({
  type: 'LOAD_MESSAGES',
  messages
});

export const sendMessage = newMessage => ({
  type: 'SEND_MESSAGE',
  newMessage
});

export const fetchMessages = groupId =>
(dispatch =>
    axios.get(`/api/groups/${groupId}`)
    .then((response) => {
      console.log(response);
      dispatch(loadMessages(response.messages));
    })
    .catch((error) => {
      console.log(error);
    })
  );

