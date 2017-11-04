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
      email: ''
    };
    this.onSend = this.onSend.bind(this);
    this.onChange = this.onChange.bind(this);
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
    .test(this.email.value)) {
      this.setState({ errorMessage: 'Invalid email' });
      return;
    }

    this.setState({
      buttonText: 'SENDING...'
    });

    this.props.apiRequestPassword(this.state.email.trim())
    .then(() => {
      Materialize.toast('Email sent! Please check your inbox', 4000);
      localStorage.removeItem('token');
      location.hash = '#login';
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.data.error,
        buttonText: 'TRY AGAIN'
      });
    });
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
};

const mapDispatchToProps = dispatch => ({
  apiRequestPassword: email =>
  dispatch(apiRequestPassword(email))
});

export default connect(null, mapDispatchToProps)(RecoverPassword);
