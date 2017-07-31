import React from 'react';
import { Footer, Header, SideMenu } from '../presentational';
import { Groups } from './';
import api from '../helpers/api';

// const groups = [
//   { name: 'Andela Bootcampers', id: 1, unread: 5 },
//   { name: 'React Devs', id: 2, unread: 7 }
// ];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      loading: 'Loading...'
    };
  }

  componentWillMount() {
    if (sessionStorage.getItem('user') === null) {
      location.hash = '#login';
      return;
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
    api(null, '/api/users/me/', 'GET', headers).then((response) => {
      console.log('Response: ', response);
      this.setState({ groups: response.data.groups, loading: '' });
    });
  }

  render() {
    return (
      <div>
        <Header/>
          <section className="page-container container-fluid">
            <div className="container">
              <div className="row">
                <SideMenu/>
                <div className="section page-content align-top pl-0 col m7 l8 xl9">
                  <h5>My Groups</h5>
                  { this.state.loading }
                  <Groups groups={this.state.groups}/>
                </div>
              </div>
            </div>
          </section>
        <Footer/>
      </div>
    );
  }
}

export default Dashboard;
