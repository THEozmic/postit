import React from 'react';
import { connect } from 'react-redux';
import Form from './form';
import loginUser from '../../actions/loginUser';

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
    const userString = `username=${username}&email=${email}&password=${password}&phon=${phone}`;
    fetch('http://localhost:3000/api/users', { method: 'POST',
      body: userString
    })
    .then((body) => {
      console.log(body, '==============>>>>');
      if (response.body.status === 200) {
        this.props.onLoginUser(user);
        location.hash = '#dashboard';
      } else {
        this.setState({ error_message: response.body.error.message });
      }
    });
  }

  render() {
    return (
      <Form title='Create a new account'>
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
