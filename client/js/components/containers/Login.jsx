import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from './';
import { loginUser } from '../../actions/user';
import api from '../helpers/api';

/**
 * Login component
 */
class Login extends React.Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.onLoginUser = this.onLoginUser.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      error_message: ''
    };
  }

  /**
   * @returns {undefined}
   * This method is called when the user focuses on the input,
   * if there's an error relating to that input, it clears it.
   */
  onFocus() {
    this.setState({ error_message: '' });
  }

  /**
   * @param {*} event
   * @returns {undefined}
   * This method is called when the user clicks on "Login"
   * It gets the form values and makes an api call
   */
  onLoginUser(event) {
    event.preventDefault();
    let { username, password } = this;
    username = username.value.trim();
    password = password.value;
    if (username !== '' || password !== '') {
      const userString = `username=${username}&password=${password}`;
      api(userString, '/api/v1/users/signin', 'POST').then(
        (_loginRes) => {
          if (_loginRes.error === undefined) {
            this.props.onLoginUser(JSON.stringify(_loginRes));
            sessionStorage.setItem('user', JSON.stringify(_loginRes));
            location.hash = '#dashboard';
          } else {
            this.setState({ error_message: _loginRes.error });
          }
        }
      );
    } else {
      this.setState({ error_message: 'Error: One or more fields are empty' });
    }
  }

  /**
   * @returns {JSX} for Login component
   */
  render() {
    if (sessionStorage.getItem('user') !== null) {
      location.hash = '#dashboard';
      return null;
    }
    return (
      <Form title="Login to your account" showSideMenu={false}>
        <div>
          <div className="input-field">
            <input
              onFocus={this.onFocus}
              type="text"
              id="username"
              ref={(input) => { this.username = input; }}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field">
            <input
              onFocus={this.onFocus}
              type="password"
              id="password"
              ref={(input) => { this.password = input; }}
            />
            <label htmlFor="password">Password</label>
          </div>
          { this.state.error_message === '' ? '' :
          <div
            className="red card"
            style={{ padding: '5px 10px' }}
          >{this.state.error_message}</div>}
          <div className="section">
            <a href="#recover-password">Forgot Password?</a>
          </div>
          <button
            id="login"
            onClick={this.onLoginUser}
            className="waves-effect waves-light btn action-btn"
          >Login</button>
          <a
            className="right waves-effect waves-teal btn-flat action-btn"
            href="#register"
          >Register</a>
        </div>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoginUser: user => dispatch(loginUser(user))
});

Login.propTypes = {
  onLoginUser: PropTypes.func.isRequired
};
export default connect(null, mapDispatchToProps)(Login);

