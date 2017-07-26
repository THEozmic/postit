import React from 'react';
import { Footer, Header } from './';

const Login = () =>
<div>
  <Header/>
    <section className="container">
      <h5>Login to your account</h5>
      <div className='row'>
        <div className='col s11 m6'>
          <form className='form'>
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
            href='#register'>Or Register</a>
            <div className="section">
              <a href='#recover-password'>Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default Login;
