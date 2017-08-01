import React from 'react';
import { connect } from 'react-redux';
import Form from './form';
import loginUser from '../../actions/loginUser';
import api from '../helpers/api';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.onRegisterUser = this.onRegisterUser.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      error_message: ''
    };
  }

  onFocus() {
    this.setState({ error_message: '' });
  }

  onRegisterUser(e) {
    e.preventDefault();
    let { username, email, phone, password } = this;
    username = username.value.trim();
    email = email.value.trim();
    phone = phone.value.trim();
    password = password.value;
    const user = {
      username,
      email,
      phone,
      password
    };
    if (username === '' || email === '' || phone === '' || password === '') {
      this.setState({ error_message: 'Error: One or more fields are empty' });
      return;
    }
    const userString = `username=${username}&email=${email}&password=${password}&phone=${phone}`;
    api(userString, 'http://localhost:3000/api/users', 'POST', null).then(
      (_registerRes) => {
        if (_registerRes.error === undefined) {
          api(userString, 'http://localhost:3000/api/signin', 'POST', null).then(
            (_loginRes) => {
              if (_loginRes.error === undefined) {
                console.log(_loginRes);
                this.props.onLoginUser(JSON.stringify(_loginRes));
                sessionStorage.setItem('user', JSON.stringify(_loginRes));
                location.hash = '#dashboard';
              } else {
                this.setState({ error_message: _loginRes.error.message });
              }
            }
          );
        } else {
          this.setState({ error_message: _registerRes.error.message });
        }
      }
    );
  }

  render() {
    return (
      <Form title='Create a new account' sidemenu={false}>
        <div className='input-field'>
          <input onFocus={this.onFocus}
          type='text' id='username'
          ref = {(input) => { this.username = input; }} />
          <label for='username'>Username</label>
        </div>
        <div className='input-field'>
          <input onFocus={this.onFocus}
          type='email' id='email' ref={(input) => { this.email = input; }}/>
          <label for='email'>Email</label>
        </div>
        <div className='input-field'>
          <input onFocus={this.onFocus}
          type='text' id='phone' ref={(input) => { this.phone = input; }}/>
          <label for='phone'>Phone</label>
        </div>
        <div className='input-field'>
          <input onFocus={this.onFocus}
          type='password' id='password' ref={(input) => { this.password = input; }}/>
          <label for='password'>Password</label>
        </div>
        { this.state.error_message === '' ? '' :
        <div className='red card' style={{ padding: '5px 10px' }}>{this.state.error_message}</div>}
        <button
        onClick= { this.onRegisterUser }
        className='waves-effect waves-light btn action-btn'>
        Register</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
          href='#login'>Login</a>
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: user => dispatch(loginUser(user))
  };
};

export default connect(null, mapDispatchToProps)(Register);
