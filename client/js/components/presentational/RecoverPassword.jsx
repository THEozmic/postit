import React from 'react';
import { Form } from './';
import api from '../helpers/api';

class Recover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '',
      buttonText: 'Send'
    };
    this.onSend = this.onSend.bind(this);
  }
  onSend(e) {
    e.preventDefault();
    if (this.state.buttonText === 'Okay') {
      location.hash = '#login';
      return;
    }
    api(`email=${this.email.value}`,
    '/api/users/request-password/', 'POST').then(
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
  render() {
    return (
      <Form title='Recover your password' sidemenu={false}>
          { this.state.successMessage !== '' ?
          <div className='section' style={{ color: '#0275d8' }}>
            { this.state.successMessage }
          </div> :
          <div className='input-field'>
            <input type='email' id='email' ref={(input) => { this.email = input; } }/>
            <label for='email'>Email</label>
          </div>
        }
        <button onClick={this.onSend}
        className='waves-effect waves-light btn action-btn'>{ this.state.buttonText }</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
        href='#login'>Login</a>
      </Form>
    );
  }
}

export default Recover;
