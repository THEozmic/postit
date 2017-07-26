import React from 'react';
import { Footer, Header, SideMenu } from '../presentational';
import { Groups } from './';

const Dashboard = () =>
<div>
  <Header/>
    <section className="page-container container-fluid">
      <div className="container">
        <div className="row">
          <SideMenu/>
          <div className="section page-content align-top pl-0 col m7 l9">
            <h5>My Groups</h5>
            <Groups/>
          </div>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default Dashboard;
