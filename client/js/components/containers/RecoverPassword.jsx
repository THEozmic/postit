import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from './';
import { apiRequestPassword } from '../../actions/user';


/**
 * Recover component
 */
class Recover extends React.Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '',
      buttonText: 'Send'
    };
    this.onSend = this.onSend.bind(this);
  }

  /**
   * @returns {void}
   * @param {*} event
   */
  onSend(event) {
    event.preventDefault();
    if (this.state.buttonText === 'Okay') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      location.hash = '#login';
      return;
    }

    this.props.apiRequestPassword(this.email.value)
    .then(() => {
      this.setState({
        successMessage: 'A password reset link has been sent to that email',
        buttonText: 'Okay'
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
                ref={(input) => { this.email = input; }}
              />
              <label htmlFor="email">Email</label>
            </div>
          }
          <button
            onClick={this.onSend}
            className="waves-effect waves-light btn action-btn"
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

Recover.propTypes = {
  apiRequestPassword: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  apiRequestPassword: email =>
  dispatch(apiRequestPassword(email))
});

export default connect(null, mapDispatchToProps)(Recover);
