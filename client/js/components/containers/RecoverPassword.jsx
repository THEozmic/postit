/* global Materialize */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from './Form';
import { apiRequestPassword } from '../../actions/user';

/**
 * Recover Password Page
 * @class RecoverPassword
 * @extends {React.Component}
 */
export class RecoverPassword extends React.Component {

  /**
   * Creates an instance of RecoverPassword
   * @param {any} props -
   * @memberof RecoverPassword
   */
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '',
      buttonText: 'Send',
      errorMessage: '',
      email: '',
      isButtonDisabled: false
    };
    this.onSend = this.onSend.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

   /**
   * @return {void}
   * @param {object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      if (nextProps.user.message === 'Success') {
        localStorage.removeItem('token');
        location.href = '#/login';
        Materialize.toast('Email sent! Please check your inbox', 4000);
      }
    }

    if (nextProps.error !== '') {
      this.setState({
        errorMessage: nextProps.error,
        buttonText: 'TRY AGAIN',
        isButtonDisabled: false
      });
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
   */
  onFocus() {
    this.setState({ errorMessage: '' });
  }

  /**
   * @returns {void}
   * @param {*} event
   */
  onSend(event) {
    event.preventDefault();
    if (this.state.email.trim() === '') {
      this.setState({ errorMessage: 'Please provide an email' });
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    .test(this.state.email)) {
      this.setState({ errorMessage: 'Invalid email' });
      return;
    }

    this.setState({
      buttonText: 'SENDING...'
    });

    this.setState({ isButtonDisabled: true });
    this.props.apiRequestPassword(this.state.email.trim());
  }

  /**
   * @returns {JSX} for the RecoverPassword component
   */
  render() {
    return (
      <Form title="Recover your password" showSideMenu={false}>
        <div>
          { this.state.successMessage !== '' ?
            <div className="section" style={{ color: '#0275d8' }}>
              { this.state.successMessage }
            </div> :
            <div className="input-field">
              <input
                type="email"
                id="email"
                name="email"
                onChange={this.onChange}
                onFocus={this.onFocus}
                value={this.state.email}
              />
              <label htmlFor="email">Email</label>
            </div>
          }
          { this.state.errorMessage === '' ? '' :
          <div
            className="red card"
          >{this.state.errorMessage}</div>}
          <button
            onClick={this.onSend}
            className="waves-effect waves-light btn action-btn"
            id="submitEmail"
            disabled={this.state.isButtonDisabled}
          >{ this.state.buttonText }</button>
          <Link
            className="right waves-effect waves-teal btn-flat action-btn"
            to="/login"
          >Login</Link>
        </div>
      </Form>
    );
  }
}

RecoverPassword.propTypes = {
  apiRequestPassword: PropTypes.func.isRequired,
  error: PropTypes.string,
  user: PropTypes.object
};

RecoverPassword.defaultProps = {
  error: '',
  user: {}
};

const mapDispatchToProps = dispatch => ({
  apiRequestPassword: email =>
  dispatch(apiRequestPassword(email))
});

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
