import React from 'react';
import { Footer, Header } from './';

const NewGroup = () =>
<div>
  <Header/>
    <section className="container">
      <h5>Create a new group</h5>
      <div className='row'>
        <div className='col s12 m6'>
          <form className='form'>
            <div className='input-field'>
              <input type='text' id='name'/>
              <label for='name'>Name</label>
            </div>
            <a className='waves-effect waves-light btn action-btn'
             href='#group'>Create</a>
            <a className='right waves-effect waves-teal btn-flat action-btn'
            href='#dashboard'>Cancel</a>
          </form>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default NewGroup;
