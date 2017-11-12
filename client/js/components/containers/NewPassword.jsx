import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from './Form';
import { apiResetPassword } from '../../actions/user';
import clearError from '../../actions/common';

/**
 * New Password Page
 * @class NewPassword
 * @extends {React.Component}
 */
export class NewPassword extends React.Component {

  /**
   * Creates an instance of NewPassword
   * @param {any} props -
   * @memberof NewPassword
   */
  constructor(props) {
    super(props);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      errorMessage: '',
      success: '',
      resetText: 'Reset',
      password: '',
      confirmPassword: '',
      isButtonDisabled: false
    };
  }

    /**
   * @return {void}
   * @param {object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      if (nextProps.user.message !== 'Password Reset Successful') {
        this.setState({ errorMessage: 'An unexpected error occurred' });
      } else {
        this.setState({ isButtonDisabled: false });
      }
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
  onSubmitPassword(event) {
    event.preventDefault();
    if (this.props.user.btnText === 'Okay') {
      location.hash = '#login';
      return;
    }

    if (this.state.password === '') {
      this.setState({ errorMessage: 'Password field is required' });
      return;
    }

    if (this.state.confirmPassword === '') {
      this.setState({ errorMessage: 'Password Again field is required' });
      return;
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ errorMessage: 'Passwords don\'t match.' });
      return;
    }

    if (this.state.password !== '') {
      const hash = this.props.match.params.hash;
      if (hash === undefined) {
        this.setState({ errorMessage: 'Hash not given.' });
        return;
      }
      this.setState({ isButtonDisabled: true });
      this.props.clearError();
      this.props.apiResetPassword({ password: this.state.password, hash });
    }
  }

  /**
   * @returns {JSX} for NewPassword component
   */
  render() {
    return (
      <Form title="Reset Password" showSideMenu={false}>
        <div>
          { this.props.user.message !== 'Password Reset Successful' ?
            <div>
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
              <div className="input-field">
                <input
                  onFocus={this.onFocus}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={this.onChange}
                  value={this.state.confirmPassword}
                />
                <label htmlFor="confirmPassword">Password Again</label>
              </div>
            </div> :
            <div className="blue-text section">
              {this.props.user.message}
            </div>
          }
          { this.state.errorMessage === '' ? '' :
          <div
            className="red card section"
          >{this.state.errorMessage}</div>}
          <button
            onClick={this.onSubmitPassword}
            className="waves-effect waves-light btn action-btn"
            id="submitPassword"
            disabled={this.state.isButtonDisabled}
          >{this.props.user.btnText || 'Update Password'}</button>
          <Link
            className="right waves-effect waves-teal btn-flat action-btn"
            to="/login"
          >Login</Link>
        </div>
      </Form>
    );
  }
}

NewPassword.propTypes = {
  match: PropTypes.object.isRequired,
  apiResetPassword: PropTypes.func.isRequired,
  user: PropTypes.object,
  error: PropTypes.string,
  clearError: PropTypes.func
};

NewPassword.defaultProps = {
  error: '',
  user: {},
  clearError: () => {}
};

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  apiResetPassword: ({ password, hash }) =>
  dispatch(apiResetPassword({ password, hash })),
  clearError: () =>
  dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
