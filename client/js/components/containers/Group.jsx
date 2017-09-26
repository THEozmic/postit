import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { Messages } from './';
import { fetchMessages } from '../../actions/message';
import { logoutUser, loginUser } from '../../actions/user';

/**
 * The Group page component
 */
class Group extends React.Component {
  /**
   * @param {*} props
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
   * @returns {undefined}
   */
  componentWillMount() {
    const groupId = this.props.match.params.id;
    this.props.fetchMessages(groupId).then(() => {
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
                groupId={this.props.match.params.id}
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
                  loadMessages={this.props.loadMessages}
                  groupId={this.props.match.params.id}
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
  user: state.userData,
  selectedGroup: state.selectedGroup
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: groupId => dispatch(fetchMessages(groupId)),
  onLogout: () => dispatch(logoutUser()),
  onLoginUser: user => dispatch(loginUser(user))
});

Group.propTypes = {
  messages: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  fetchMessages: PropTypes.func.isRequired,
  selectedGroup: PropTypes.object.isRequired,
  onLogout: PropTypes.funct.isRequired,
  onLoginUser: PropTypes.func.isRequired,
  loadMessages: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
