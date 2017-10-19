import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from './Form';
import { apiLoginUser } from '../../actions/user';

/**
 * Login Page
 * @class Login
 * @extends {React.Component}
 */
export class Login extends React.Component {
  /**
   * Creates an instance of Login
   * @param {any} props -
   * @memberof Login
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
   * @returns {void}
   * This method is called when the user focuses on the input,
   * if there's an error relating to that input, it clears it.
   */
  onFocus() {
    this.setState({ error_message: '' });
  }

  /**
   * @param {*} event
   * @returns {void}
   * This method is called when the user clicks on "Login"
   * It gets the form values and makes an api call
   */
  onLoginUser(event) {
    event.preventDefault();
    let { username, password } = this;
    username = username.value.trim();
    password = password.value;
    if (username !== '' || password !== '') {
      this.props.apiLoginUser({ username, password })
      .then(() => {
        location.href = '/#/dashboard';
      }).catch((err) => {
        this.setState({ error_message: `Error: ${err.data.error}` });
      });
    } else {
      this.setState({ error_message: 'Error: One or more fields are empty' });
    }
  }

  /**
   * @returns {JSX} for Login component
   */
  render() {
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
            <Link to="recover-password">Forgot Password?</Link>
          </div>
          <button
            id="login"
            onClick={this.onLoginUser}
            className="waves-effect waves-light btn action-btn"
          >Login</button>
          <Link
            className="right waves-effect waves-teal btn-flat action-btn"
            to="register"
          >Register</Link>
        </div>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  apiLoginUser: ({ username, password }) =>
   dispatch(apiLoginUser({ username, password })),
});

Login.propTypes = {
  apiLoginUser: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);

