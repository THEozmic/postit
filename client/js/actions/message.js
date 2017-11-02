import axios from 'axios';
import { changeSelectedGroup } from './group';

/**
 * Loads the messages into the store
 * @param {array} messages
 * @return {object} action
 */
const loadMessages = messages => ({
  type: 'LOAD_MESSAGES',
  messages
});

/**
 * Fetches group data including messages, depending the
 * params values
 * @param {number} groupId
 * @param {boolean} withMessages
 * @return {object} action
 */
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

/**
 * Makes API calls to Send messages
 * @param {object} options
 * @return {object} action
 */
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
