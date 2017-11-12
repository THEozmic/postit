import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from './Form';
import { apiRegisterUser } from '../../actions/user';
import clearError from '../../actions/common';

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
    this.onChange = this.onChange.bind(this);
    this.state = {
      errorMessage: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      isButtonDisabled: false
    };
  }

  /**
   * @return {void}
   * @param {object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      location.href = '#/dashboard';
    }

    if (nextProps.error !== '') {
      this.setState({ isButtonDisabled: false, errorMessage: nextProps.error });
    }
  }

  /**
   * This function changes intial states based on onChange events
   * @param {object} event [the events object parameter]
   * @return {[type]}      [description]
   */
  onChange(event) {
    return this.setState({ [event.target.name]: event.target.value });
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
    let { username, email, phone } = this.state;
    const password = this.state.password;
    username = username.trim();
    email = email.trim();
    phone = phone.trim();
    if (username === '' || email === '' || phone === '' || password === '') {
      this.setState({ errorMessage: 'Error: One or more fields are empty' });
      return;
    }
    this.setState({ isButtonDisabled: true });
    this.props.clearError();
    this.props.apiRegisterUser({ username, email, password, phone });
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
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field">
            <input
              onFocus={this.onFocus}
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              onFocus={this.onFocus}
              type="text"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="input-field">
            <input
              onFocus={this.onFocus}
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
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
            disabled={this.state.isButtonDisabled}
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
  clearError: () =>
  dispatch(clearError())
});

const mapStateToProps = state => ({
  error: state.error,
  user: state.user
});

Register.defaultProps = {
  apiRegisterUser: () => {},
  user: {},
  error: '',
  clearError: () => {}
};

Register.propTypes = {
  apiRegisterUser: PropTypes.func,
  error: PropTypes.string,
  user: PropTypes.object,
  clearError: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
