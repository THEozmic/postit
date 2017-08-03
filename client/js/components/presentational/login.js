import React from 'react';
import { connect } from 'react-redux';
import Form from './form';
import loginUser from '../../actions/loginUser';
import api from '../helpers/api';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.onLoginUser = this.onLoginUser.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      error_message: ''
    };
  }

  onFocus() {
    this.setState({ error_message: '' });
  }

  onLoginUser(e) {
    e.preventDefault();
    let { username, password } = this;
    username = username.value.trim();
    password = password.value;
    if (username !== '' || password !== '') {
      const userString = `username=${username}&password=${password}`;
      api(userString, '/api/signin', 'POST').then(
        (_loginRes) => {
          if (_loginRes.error === undefined) {
            this.props.onLoginUser(JSON.stringify(_loginRes));
            sessionStorage.setItem('user', JSON.stringify(_loginRes));
            location.hash = '#dashboard';
          } else {
            this.setState({ error_message: _loginRes.error.message });
          }
        }
      );
    } else {
      this.setState({ error_message: 'Error: One or more fields are empty' });
    }
  }

  render() {
    return (
      <Form title='Login to your account' sidemenu={false}>
        <div className='input-field'>
          <input onFocus={this.onFocus}
          type='text' id='username'
          ref = {(input) => { this.username = input; }} />
          <label for='username'>Username</label>
        </div>
        <div className='input-field'>
          <input onFocus={this.onFocus}
          type='password' id='password' ref={(input) => { this.password = input; }}/>
          <label for='password'>Password</label>
        </div>
        { this.state.error_message === '' ? '' :
        <div className='red card' style={{ padding: '5px 10px' }}>{this.state.error_message}</div>}
        <div className='section'>
          <a href='recover-password'>Forgot Password?</a>
        </div>
        <button
        onClick= { this.onLoginUser }
        className='waves-effect waves-light btn action-btn'>
        Login</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
          href='#register'>Register</a>
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: user => dispatch(loginUser(user))
  };
};

export default connect(null, mapDispatchToProps)(Login);

