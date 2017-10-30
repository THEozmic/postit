import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import Messages from './Messages';
import { apiFetchGroup } from '../../actions/message';
import { logoutUser, loginUser } from '../../actions/user';

/**
 * Group Page
 * @class Grpup
 * @extends {React.Component}
 */
export class Group extends React.Component {
  /**
   * Creates an instance of Group
   * @param {any} props -
   * @memberof Group
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: 'Loading Messages...',
      selectedGroup: { name: 'Loading...' },
      messages: this.props.messages
    };
  }

  /**
   * @returns {void}
   */
  componentWillMount() {
    const groupId = this.props.match.params.id;
    this.props.apiFetchGroup(groupId).then(() => {
      this.setState({ loading: '', selectedGroup: this.props.selectedGroup });
    });
  }

  /**
   * @returns {JSX} for Group component
   */
  render() {
    return (
      <div>
        <Header />
        <section className="page-container container-fluid">
          <div className="container">
            <div className="row">
              <SideMenu
                showSearchLink
                onLogout={this.props.onLogout}
                onLoginUser={this.props.onLoginUser}
                groupId={parseInt(this.props.match.params.id, 10)}
              />
              <div className="section page-content align-top pl-0 col m7 l8">
                <div className="group-header-container">
                  <span className="group-header">
                    <h5 title={this.state.selectedGroup.desc}>
                      { this.state.selectedGroup.name }</h5>
                  </span>
                </div>
                { this.state.loading !== '' ? this.state.loading :
                <Messages
                  messages={this.props.messages}
                  groupId={parseInt(this.props.match.params.id, 10)}
                /> }
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
  messages: state.messages,
  user: state.user,
  selectedGroup: state.selectedGroup
});

const mapDispatchToProps = dispatch => ({
  apiFetchGroup: groupId => dispatch(apiFetchGroup(groupId)),
  onLogout: () => dispatch(logoutUser()),
  onLoginUser: user => dispatch(loginUser(user))
});

Group.propTypes = {
  messages: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  apiFetchGroup: PropTypes.func.isRequired,
  selectedGroup: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onLoginUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
