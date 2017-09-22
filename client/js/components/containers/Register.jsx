import React from 'react';
import { connect } from 'react-redux';
import { Form } from './';
import { loginUser } from '../../actions/user';
import api from '../helpers/api';

/**
 * Register component
 */
class Register extends React.Component {

  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.onRegisterUser = this.onRegisterUser.bind(this);
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
   * @returns {undefined}
   * @param {*} event
   */
  onRegisterUser(event) {
    event.preventDefault();
    let { username, email, phone, password } = this;
    username = username.value.trim();
    email = email.value.trim();
    phone = phone.value.trim();
    password = password.value;
    if (username === '' || email === '' || phone === '' || password === '') {
      this.setState({ error_message: 'Error: One or more fields are empty' });
      return;
    }
    const userString = `username=${username}&email=${email}&password=${password}&phone=${phone}`;
    api(userString, '/api/v1/users', 'POST', null).then(
      (_registerRes) => {
        if (_registerRes.error === undefined) {
          this.props.onLoginUser(JSON.stringify(_registerRes));
          sessionStorage.setItem('user', JSON.stringify(_registerRes));
          location.hash = '#dashboard';
        } else {
          this.setState({ error_message: _registerRes.error });
        }
      }
    );
  }

  /**
   * @returns {JSX} for Register component
   */
  render() {
    return (
      <Form title="Create a new account" sidemenu={false}>
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
            type="email"
            id="email"
            ref={(input) => { this.email = input; }}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            onFocus={this.onFocus}
            type="text"
            id="phone"
            ref={(input) => { this.phone = input; }}
          />
          <label htmlFor="phone">Phone</label>
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
        <div className="red card" style={{ padding: '5px 10px' }}>{this.state.error_message}</div>}
        <button
          id="register"
          onClick={this.onRegisterUser}
          className="waves-effect waves-light btn action-btn"
        >Register</button>
        <a
          className="right waves-effect waves-teal btn-flat action-btn"
          href="#login"
        >Login</a>
      </Form>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onLoginUser: user => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(Register);
