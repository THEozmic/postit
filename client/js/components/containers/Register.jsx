import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from './Form';
import { apiRegisterUser, apiGetCurrentUser } from '../../actions/user';
import setToken from '../../helpers/setToken';

/**
 * Registration Page
 * @class Register
 * @extends {React.Component}
 */
export class Register extends React.Component {

  /**
   * Creates an instance of Register
   * @param {any} props -
   * @memberof Register
   */
  constructor(props) {
    super(props);
    this.onRegisterUser = this.onRegisterUser.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      errorMessage: ''
    };
  }

  /**
   * @returns {void}
   * This method is called when the user focuses on the input,
   * if there's an error relating to that input, it clears it.
   */
  onFocus() {
    this.setState({ errorMessage: '' });
  }

  /**
   * @returns {void}
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
      this.setState({ errorMessage: 'Error: One or more fields are empty' });
      return;
    }
    this.props.apiRegisterUser({ username, email, password, phone })
    .then((response) => {
      setToken(response.data.token);
      this.props.apiGetCurrentUser();
    })
    .catch((error) => {
      this.setState({ errorMessage: error.data.error });
    });
  }

  /**
   * @returns {JSX} for Register component
   */
  render() {
    return (
      <Form title="Create a new account" showSideMenu={false}>
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
          {
            this.state.errorMessage === '' ? '' :
            <div className="red card" >
              {this.state.errorMessage}
            </div>
          }
          <button
            id="submitDetails"
            onClick={this.onRegisterUser}
            className="waves-effect waves-light btn action-btn"
          >Register</button>
          <Link
            className="right waves-effect waves-teal btn-flat action-btn"
            to="login"
          >Login</Link>
        </div>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  apiRegisterUser: ({ username, email, password, phone }) =>
  dispatch(apiRegisterUser({ username, email, password, phone })),
  apiGetCurrentUser: () =>
  dispatch(apiGetCurrentUser())
});

Register.defaultProps = {
  apiRegisterUser: () => {},
  apiGetCurrentUser: () => {}
};

Register.propTypes = {
  apiRegisterUser: PropTypes.func,
  apiGetCurrentUser: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Register);
