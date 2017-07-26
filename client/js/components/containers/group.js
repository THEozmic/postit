import React from 'react';
import { Footer, Header, SideMenu } from '../presentational';
import { Messages } from './';

const Group = () =>
<div>
  <Header/>
    <section className="page-container container-fluid">
      <div className="container">
        <div className="row">
          <SideMenu ingroup={true}/>
          <div className="section page-content align-top pl-0 col m7 l8 xl9">
            <h5 className="group-header">Andela Bootcampers</h5>
            <Messages/>
          </div>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default Group;
