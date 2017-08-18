import React from 'react';
import { connect } from 'react-redux';
import logoutUser from '../../actions/logoutUser';
import loginUser from '../../actions/loginUser';
import { Footer, Header, SideMenu, Groups } from '../presentational';
import api from '../helpers/api';

/**
 *
*/
class Dashboard extends React.Component {
  /**
   *
   * @param {*} props
  */
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      loading: 'Loading...'
    };
  }

  /**
   *
  */
  componentWillMount() {
    if (sessionStorage.getItem('user') === null) {
      location.hash = '#login';
      return;
    }
    api(null, '/api/users/me/', 'GET').then((response) => {
      this.setState({ groups: response.user.groups, loading: '' });
    });
  }

  /**
   *
  */
  render() {
    return (
      <div>
        <Header/>
          <section className="page-container container-fluid">
            <div className="container">
              <div className="row">
                <SideMenu user={this.props.user}
                onLogout={this.props.onLogout} onLoginUser={this.props.onLoginUser}/>
                <div className="section page-content align-top pl-0 col m7 l8">
                  <h5>My Groups</h5>
                  { this.state.loading === '' ?
                    <Groups groups={this.state.groups}/>
                    : this.state.loading
                  }
                </div>
              </div>
            </div>
          </section>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userData
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutUser()),
  onLoginUser: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
