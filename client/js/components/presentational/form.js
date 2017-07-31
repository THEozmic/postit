import React from 'react';
import { Footer, Header, SideMenu } from './';

const Form = ({ title, children, active, ingroup, sidemenu = true }) =>
<div>
  <Header/>
    <section className="page-container container-fluid">
      <div className="container">
        <div className="row">
          { sidemenu ? <SideMenu active={ active } ingroup={ingroup}/> : '' }
          <div className="section page-content align-top pl-0 col m7 l8 xl9">
            <section>
              <h5>{ title }</h5>
              <div className='row'>
                <div className='col s12 m8'>
                  <form className='form'>
                    { children }
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default Form;
