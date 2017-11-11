import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser, apiFetchGroups } from '../../actions/user';
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
  componentDidMount() {
    this.props.apiFetchGroups(localStorage.getItem('token'));
  }

  /**
   * @return {void}
   * @param {object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.groups !== nextProps.groups) {
      this.setState({
        loading: ''
      });
    }
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
                 this.props.groups !== undefined ?
                   <Groups
                     groups={this.props.groups}
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
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutUser()),
  apiFetchGroups: token => dispatch(apiFetchGroups(token))
});

Dashboard.defaultProps = {
  groups: [],
  apiFetchGroups: () => {}
};

Dashboard.propTypes = {
  onLogout: PropTypes.func.isRequired,
  groups: PropTypes.array,
  apiFetchGroups: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
