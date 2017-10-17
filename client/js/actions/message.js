import axios from 'axios';
import { changeSelectedGroup } from './group';

const loadMessages = messages => ({
  type: 'LOAD_MESSAGES',
  messages
});

const apiFetchGroup = (groupId, withMessages = true) =>
function action(dispatch) {
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
      data: { message, priority, toGroup }
    });
    return request.then(
      () => {
        dispatch(apiFetchGroup(toGroup));
      }
    );
  };

export { apiFetchGroup, loadMessages };
