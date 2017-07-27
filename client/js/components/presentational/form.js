import React from 'react';
import { Footer, Header } from './';

const Form = ({ title, children }) =>
<div>
  <Header/>
    <section className="container">
      <h5>{ title }</h5>
      <div className='row'>
        <div className='col s12 m6'>
          <form className='form'>
            { children }
          </form>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default Form;
