import React from 'react';
import { Footer, Header, SideMenu } from '../presentational';
import { Groups } from './';

const groups = [
  { name: 'Andela Bootcampers', id: 1, unread: 5 },
  { name: 'React Devs', id: 2, unread: 7 }
];

const Dashboard = () =>
<div>
  <Header/>
    <section className="page-container container-fluid">
      <div className="container">
        <div className="row">
          <SideMenu/>
          <div className="section page-content align-top pl-0 col m7 l8 xl9">
            <h5>My Groups</h5>
            <Groups groups={groups}/>
          </div>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default Dashboard;
