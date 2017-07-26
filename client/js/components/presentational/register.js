import React from 'react';
import { Footer, Header } from './';

const Register = () =>
<div>
  <Header/>
    <section className="container">
      <h5>Create a new account</h5>
      <div className='row'>
        <div className='col s12 m6'>
          <form className='form'>
            <div className='input-field'>
              <input type='text' id='username'/>
              <label for='username'>Username</label>
            </div>
            <div className='input-field'>
              <input type='email' id='email'/>
              <label for='email'>Email</label>
            </div>
            <div className='input-field'>
              <input type='text' id='phone'/>
              <label for='phone'>Phone</label>
            </div>
            <div className='input-field'>
              <input type='password' id='password'/>
              <label for='password'>Password</label>
            </div>
            <button
            className='waves-effect waves-light btn action-btn'>
            Register</button>
            <a className='right waves-effect waves-teal btn-flat action-btn'
             href='#login'>Login</a>
          </form>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default Register;
