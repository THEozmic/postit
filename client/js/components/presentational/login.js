import React from 'react';
import Form from './form';

const Login = () =>
<Form title='Login to your account'>
  <div className='input-field'>
    <input type='text' id='username'/>
    <label for='username'>Username</label>
  </div>
  <div className='input-field'>
    <input type='password' id='password'/>
    <label for='password'>Password</label>
  </div>
  <a href='#dashboard'
  className='waves-effect waves-light btn action-btn'>Login</a>
  <a className='right waves-effect waves-teal btn-flat action-btn'
  href='#register'>Register</a>
  <div className="section">
    <a href='#recover-password'>Forgot Password?</a>
  </div>
</Form>;

export default Login;
