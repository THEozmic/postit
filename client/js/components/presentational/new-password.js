import React from 'react';
import Form from './form';
import api from '../helpers/api';

class NewPassword extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      error: '',
      success: '',
      resetText: 'Reset'
    };
  }

  onFocus() {
    this.setState({ error: '' });
  }

  onSubmitPassword(e) {
    e.preventDefault();
    if (this.state.resetText === 'Okay') {
      location.hash = '#login';
      return;
    }
    if (this.password.value !== this.confirmPassword.value) {
      this.setState({ error: 'Passwords don\'t match.' });
      return;
    }
    if (this.password.value !== '') {
      
      api(`password=${this.password.value}&email=`, '/api/users/reset-password/', 'POST')
      .then((response) => {
        this.setState({
          success: 'Password reset successful',
          resetText: 'Okay'
        });
      });
    }
  }

  render() {
    return (
      <Form title='Reset Password' sidemenu={false}>
        { this.state.success === '' ?
        <div>
          <div className='input-field'>
            <input onFocus={this.onFocus}
            type='password' id='password' ref={(input) => { this.password = input; }}/>
            <label for='password'>Password</label>
          </div>
          <div className='input-field'>
            <input onFocus={this.onFocus}
            type='password' id='cpassword' ref={(input) => { this.confirmPassword = input; }}/>
            <label for='cpassword'>Password Again</label>
          </div>
        </div> :
        <div className='section' style={{ color: '#0275d8' }}>
          {this.state.success}
        </div>
        }
        { this.state.error === '' ? '' :
        <div className='red card' style={{ padding: '5px 10px' }}>{this.state.error}</div>}
        <button
        onClick= { this.onSubmitPassword }
        className='waves-effect waves-light btn action-btn'>
        {this.state.resetText}</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
          href='#login'>Login</a>
      </Form>
    );
  }
}

export default NewPassword;
