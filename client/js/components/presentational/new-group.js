import React from 'react';
import Form from './form';

const NewGroup = () =>
<Form title='Create a new group'>
  <div className='input-field'>
    <input type='text' id='name'/>
    <label for='name'>Name</label>
  </div>
  <a className='waves-effect waves-light btn action-btn'
  href='#group'>Create</a>
  <a className='right waves-effect waves-teal btn-flat action-btn'
  href='#dashboard'>Cancel</a>
</Form>;

export default NewGroup;
