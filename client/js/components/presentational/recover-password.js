import React from 'react';
import Form from './form';

const Recover = () =>
<Form title='Recover your password'>
  <div className='input-field'>
    <input type='email' id='email'/>
    <label for='email'>Email</label>
  </div>
  <a href='#login'
  className='waves-effect waves-light btn action-btn'>Send Password</a>
  <a className='right waves-effect waves-teal btn-flat action-btn'
  href='#login'>Login</a>
</Form>;

export default Recover;
