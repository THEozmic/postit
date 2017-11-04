import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from './Form';
import { apiResetPassword } from '../../actions/user';

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
      confirmPassword: ''
    };
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
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: 'Passwords don\'t match.' });
      return;
    }
    if (this.state.password !== '') {
      const hash = this.props.match.params.hash;
      if (hash === undefined) {
        this.setState({ error: 'Invalid hash.' });
        return;
      }

      this.props.apiResetPassword({ password: this.state.password, hash })
      .then(() => {
        if (this.props.user.message !== 'Password Reset Successful') {
          this.setState({ error: 'An unexpected error occurred' });
        }
      }).catch((error) => {
        this.setState({ errorMessage: error.data.message });
      });
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
            <div className="red card section">
              {this.props.user.message}
            </div>
          }
          { this.state.errorMessage === '' ? '' :
          <div
            className="red card"
          >{this.state.errorMessage}</div>}
          <button
            onClick={this.onSubmitPassword}
            className="waves-effect waves-light btn action-btn"
            id="submitPassword"
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
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  apiResetPassword: ({ password, hash }) =>
  dispatch(apiResetPassword({ password, hash }))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
