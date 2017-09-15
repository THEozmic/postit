import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { Messages } from './';
import { loadMessages } from '../../actions/message';
import { logoutUser, loginUser } from '../../actions/user';
import api from '../helpers/api';

/**
 *
 */
class Group extends React.Component {
  /**
   *
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
    this.filterMessages = this.filterMessages.bind(this);
    this.loadMessages = this.loadMessages.bind(this);
  }

  /**
   * @return {undefined} Returns Nothing
   */
  componentWillMount() {
    const id = this.props.match.params.id;
    api(null, `/api/groups/${id}`, 'GET')
    .then((group) => {
      this.setState({
        loading: '',
        messages: group.messages,
        originalMessages: group.messages,
        selectedGroup: group });
      this.props.loadMessages(group.messages);
    });
  }

  /**
   *
   * @param {*} messages
   */
  loadMessages(messages) {
    this.props.loadMessages(messages);
    this.setState({ messages });
  }

  /**
   *
   * @param {*} e
   */
  filterMessages(e) {
    if (e.target.value === 'Unread') {
      const editable = this.state.originalMessages;
      const newMessages = editable.filter((message) => {
        if (!message.readBy.split(',')
          .includes(JSON.parse(sessionStorage.getItem('user'))
            .userData.username)) {
          if (message.fromUser !== JSON.parse(sessionStorage.getItem('user'))
            .userData.username) {
            return true;
          }
        }
        return false;
      });
      this.setState({ messages: newMessages });
      this.props.loadMessages(newMessages);
    }
    if (e.target.value === 'Read') {
      const editable = this.state.originalMessages;
      const newMessages = editable.filter((message) => {
        if (message.readBy.split(',')
          .includes(JSON.parse(sessionStorage.getItem('user'))
            .userData.username)) {
          return true;
        }
        return false;
      });
      this.setState({ messages: newMessages });
      this.props.loadMessages(newMessages);
    }
    if (e.target.value === 'All') {
      this.setState({ messages: this.state.originalMessages });
      this.props.loadMessages(this.state.originalMessages);
      this.props.loadMessages(this.state.originalMessages);
    }
    this.setState({ filter: e.target.value });
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
                <SideMenu showSearchLink={true}
                user={this.props.user} onLogout={this.props.onLogout}
                onLoginUser={this.props.onLoginUser}/>
                <div className="section page-content align-top pl-0 col m7 l8">
                  <div className='group-header-container'>
                    <span className='group-header'>
                      <h5 title={this.state.selectedGroup.desc}>
                        { this.state.selectedGroup.name }</h5>
                    </span>
                    <span className='message-filter-container'>
                      <select className="browser-default left"
                      value={this.state.filter}
                      onChange={this.filterMessages}>
                        <option value='All'>All</option>
                        <option value='Read'>Read</option>
                        <option value='Unread'>Unread</option>
                      </select>
                    </span>
                  </div>
                   { this.state.loading !== '' ? this.state.loading :
                   <Messages messages={ this.state.messages } loadMessages={ this.loadMessages }/> }
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

const mapDispatchToProps = dispatch => ({
  loadMessages: allMessages => dispatch(loadMessages(allMessages)),
  onLogout: () => dispatch(logoutUser()),
  onLoginUser: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
