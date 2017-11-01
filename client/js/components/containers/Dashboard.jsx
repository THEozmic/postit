import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser, apiGetCurrentUser } from '../../actions/user';
import { Footer, Header, SideMenu, Groups } from '../presentational';

/**
 * Dashboard Page
 * @class Dashboard
 * @extends {React.Component}
 */
export class Dashboard extends React.Component {

  /**
   * Creates an instance of Dashboard
   * @param {any} props
   * @memberof Dashboard
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: 'Loading...'
    };
  }

  /**
   * @return {void}
  */
  componentWillMount() {
    this.props.apiGetCurrentUser(localStorage.getItem('token'))
    .then(() => {
      this.setState({
        loading: ''
      });
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
              <SideMenu onLogout={this.props.onLogout} />
              <div className="section page-content align-top pl-0 col m7 l8">
                <h5>My Groups</h5>
                { this.state.loading === '' &&
                 this.props.user.groups !== undefined ?
                   <Groups
                     groups={this.props.user.groups}
                   />
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
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutUser()),
  apiGetCurrentUser: token => dispatch(apiGetCurrentUser(token))
});

Dashboard.defaultProps = {
  user: {}
};

Dashboard.propTypes = {
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.object,
  apiGetCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
