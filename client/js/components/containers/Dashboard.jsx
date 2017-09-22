import React from 'react';
import { connect } from 'react-redux';
import { logoutUser, loginUser } from '../../actions/user';
import { Footer, Header, SideMenu, Groups } from '../presentational';
import api from '../helpers/api';

/**
 * Dashboard component
*/
class Dashboard extends React.Component {
  /**
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
   * @return {undefined}
  */
  componentWillMount() {
    if (sessionStorage.getItem('user') === null) {
      location.hash = '#login';
      return;
    }
    api(null, '/api/v1/users/me/', 'GET').then((response) => {
      this.setState({ groups: response.user.groups, loading: '' });
    });
  }

  /**
   * @return {JSX} Returns Dashboard JSX
  */
  render() {
    return (
      <div>
        <Header />
        <section className="page-container container-fluid">
          <div className="container">
            <div className="row">
              <SideMenu
                onLogout={this.props.onLogout}
              />
              <div className="section page-content align-top pl-0 col m7 l8">
                <h5>My Groups</h5>
                { this.state.loading === '' ?
                  <Groups groups={this.state.groups} />
                  : this.state.loading
                }
              </div>
            </div>
          </div>
        </section>
        <Footer />
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
