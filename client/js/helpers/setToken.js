import axios from 'axios';

/**
 * setToken - This function sets the authorization token to the
 * header of the browser with the name x-access-token
 *
 * @param  {string} token token generated when a
 * user provides a valid credential
 * for logging in
 * @return {null} description
 */
export default function setToken(token) {
  localStorage.setItem('token', token);
  if (token) {
    axios.defaults.headers.common['x-access-token'] = `${token}`;
    return true;
  }
}
