import React from 'react';
import { Form } from './';
import api from '../helpers/api';

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
   * @returns {undefined}
   * @param {*} event
   */
  onSend(event) {
    event.preventDefault();
    if (this.state.buttonText === 'Okay') {
      location.hash = '#login';
      return;
    }
    api(`email=${this.email.value}`,
    '/api/v1/users/request-password/', 'POST').then(
      (response) => {
        if (response.data.error === undefined) {
          this.setState({
            successMessage: 'A password reset link has been sent to that email',
            buttonText: 'Okay'
          });
        }
      }
    );
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
          <a
            className="right waves-effect waves-teal btn-flat action-btn"
            href="#login"
          >Login</a>
        </div>
      </Form>
    );
  }
}

export default Recover;
