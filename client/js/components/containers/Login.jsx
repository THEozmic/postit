import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from './Form';
import { apiLoginUser } from '../../actions/user';
import clearError from '../../actions/common';

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
    this.onChange = this.onChange.bind(this);
    this.state = {
      errorMessage: '',
      username: '',
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
   * @param {*} event
   * @returns {void}
   * This method is called when the user clicks on "Login"
   * It gets the form values and makes an api call
   */
  onLoginUser(event) {
    event.preventDefault();
    const { password } = this.state;
    const username = this.state.username.trim();
    if (username !== '' || password !== '') {
      this.setState({ isButtonDisabled: true });
      this.props.clearError();
      this.props.apiLoginUser({ username, password });
    } else {
      this.setState({ errorMessage: 'Error: One or more fields are empty' });
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
              name="username"
              onChange={this.onChange}
              value={this.state.username}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field">
            <input
              onFocus={this.onFocus}
              type="password"
              id="password"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
            />
            <label htmlFor="password">Password</label>
          </div>
          { this.state.errorMessage === '' ? '' :
          <div
            className="red card"
          >{this.state.errorMessage}</div>}
          <div className="section">
            <Link to="recover-password">Forgot Password?</Link>
          </div>
          <button
            id="login"
            onClick={this.onLoginUser}
            className="waves-effect waves-light btn action-btn"
            disabled={this.state.isButtonDisabled}
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
  clearError: () =>
    dispatch(clearError()),
});

const mapStateToProps = state => ({
  error: state.error,
  user: state.user
});

Login.defaultProps = {
  error: '',
  user: {},
  clearError: () => {}
};

Login.propTypes = {
  apiLoginUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  error: PropTypes.string,
  clearError: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
