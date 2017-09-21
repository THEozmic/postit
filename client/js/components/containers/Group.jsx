import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { Messages } from './';
import { fetchMessages } from '../../actions/message';
import { logoutUser, loginUser } from '../../actions/user';
import api from '../helpers/api';

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
      messages: this.props.messages,
      filter: '',
      originalMessages: this.props.messages
    };
    this.loadMessages = this.loadMessages.bind(this);
  }

  /**
   * @returns {undefined}
   */
  componentWillMount() {
    const groupId = this.props.match.params.id;
    this.props.fetchMessages(groupId).then((data) => {
       console.log(data);
    });
  }

  /**
   * @param {*} messages
   * @returns {undefined}
   * It is called by a child component and it sets the redux store and the state
   * with the new message object
   */
  loadMessages(messages) {
    // const groupId = this.props.match.params.id;
    // this.props.loadMessages(messages);
    this.setState({ messages });
  }

  /**
   * @returns {JSX} for Group component
   */
  render() {
    return (
      <div>
        <Header/>
          <section className="page-container container-fluid">
            <div className="container">
              <div className="row">
                <SideMenu showSearchLink={true}
                user={this.props.user} onLogout={this.props.onLogout}
                onLoginUser={this.props.onLoginUser} groupId={this.props.match.params.id}/>
                <div className="section page-content align-top pl-0 col m7 l8">
                  <div className='group-header-container'>
                    <span className='group-header'>
                      <h5 title={this.state.selectedGroup.desc}>
                        { this.state.selectedGroup.name }</h5>
                    </span>
                  </div>
                   { this.state.loading !== '' ? this.state.loading : ''}
                   {/* <Messages messages={ this.props.messages } loadMessages={ this.loadMessages } groupId={this.props.match.params.id}/> } */}
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
  messages: state.messages,
  user: state.userData
});

// const mapDispatchToProps = dispatch => ({
//   fetchMessages: groupId => dispatch(fetchMessages(groupId)),
//   onLogout: () => dispatch(logoutUser()),
//   onLoginUser: user => dispatch(loginUser(user))
// });

export default connect(mapStateToProps, { fetchMessages })(Group);
