import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { Messages } from './';
import changeSelectedGroupAction from '../../actions/changeSelectedGroup';
import loadMessages from '../../actions/loadMessages';
import logoutUser from '../../actions/logoutUser';
import loginUser from '../../actions/loginUser';
import api from '../helpers/api';

class Group extends React.Component {
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
  }

  componentWillMount() {
    const id = location.href.split('/')[location.href.split('/').length - 1];
    api(null, `/api/groups/${id}`, 'GET')
    .then((result) => {
      this.setState({ selectedGroup: result });
      api(null, `/api/groups/${id}/messages`, 'GET').then(
        (messages) => {
          this.setState({ loading: '', messages, originalMessages: messages });
          this.props.loadMessages(messages);
        });
    });
  }

  filterMessages(e) {
    console.log('OLD MESSAGES>>>>', this.state.messages);
    console.log('FILTER>>>', e.target.value);
    if (e.target.value === 'Unread') {
      const editable = this.state.originalMessages;
      const newMessages = editable.filter((message) => {
        if (!message.readBy.split(',')
          .includes(JSON.parse(sessionStorage.getItem('user'))
            .data.username)) {
          if (message.from_user !== JSON.parse(sessionStorage.getItem('user'))
            .data.username) {
            return true;
          }
        }
        return false;
      });
      console.log('NEW MESSAGES>>>>', newMessages);
      this.setState({ messages: newMessages });
      this.props.loadMessages(newMessages);
      console.log('MESSAGE STATE>>>', this.state.messages);
      console.log('ORIGINAL MESSAGE STATE>>>', this.state.originalMessages);
    }
    if (e.target.value === 'Read') {
      const editable = this.state.originalMessages;
      const newMessages = editable.filter((message) => {
        if (message.readBy.split(',')
          .includes(JSON.parse(sessionStorage.getItem('user'))
            .data.username)) {
          return true;
        }
        return false;
      });
      console.log('NEW MESSAGES>>>>', newMessages);
      this.setState({ messages: newMessages });
      this.props.loadMessages(newMessages);
      console.log('MESSAGE STATE>>>', this.state.messages);
      console.log('ORIGINAL MESSAGE STATE>>>', this.state.originalMessages);
    }
    if (e.target.value === 'All') {
      this.setState({ messages: this.state.originalMessages });
      this.props.loadMessages(this.state.originalMessages);
      console.log('MESSAGE STATE>>>', this.state.messages);
      this.props.loadMessages(this.state.originalMessages);
      console.log('ORIGINAL MESSAGE STATE>>>', this.state.originalMessages);
    }
    this.setState({ filter: e.target.value });
  }

  render() {
    return (
      <div>
        <Header/>
          <section className="page-container container-fluid">
            <div className="container">
              <div className="row">
                <SideMenu showSearchLink={true} user={this.props.user} onLogout={this.props.onLogout} onLoginUser={this.props.onLoginUser}/>
                <div className="section page-content align-top pl-0 col m7 l8">
                  <div className='group-header-container'>
                    <span className='group-header'>
                      <h5 title={this.state.selectedGroup.desc}>{ this.state.selectedGroup.name }</h5>
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
                   <Messages messages={ this.props.messages } loadMessages={ this.props.loadMessages }/> }
                </div>
              </div>
            </div>
          </section>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    user: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMessages: allMessages => dispatch(loadMessages(allMessages)),
    onLogout: () => dispatch(logoutUser()),
    onLoginUser: user => dispatch(loginUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
