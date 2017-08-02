import React from 'react';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import sendMessage from '../../actions/sendMessage';
import loadMessages from '../../actions/loadMessages';
import api from '../helpers/api';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message_error: '',
      selectedGroup: {}
    };
    this.send = this.send.bind(this);
  }

  scrollPane() {
    scrollToElement('.second', {
      offset: -60,
      ease: 'in-expo',
      duration: 900
    });
  }

  componentWillMount() {
    const id = location.href.split('/')[location.href.split('/').length - 1];
    api(null, `/api/groups/${id}`, 'GET')
    .then((result) => {
      this.setState({ selectedGroup: result });
    });
  }

  componentDidMount() {
    this.scrollPane();
  }

  send(e) {
    e.preventDefault();
    let { content, priority } = this;
    content = content.value.trim();
    priority = priority.value.trim();
    const readBy = [];
    if (content === '' || priority === '') {
      this.setState({ message_error: 'Error: Message has no priority, sender or content' });
      return;
    }
    const newMessageBody =
    `message=${content}&from_user=${JSON.parse(this.props.user).data.username}
    &priority=${priority}&to_group=${this.state.selectedGroup.id}`;
    api(newMessageBody, `/api/groups/${this.state.selectedGroup.id}/message`, 'POST').then(
      (response) => {
        const newMessage = {
          id: response.id,
          message: content,
          from_user: JSON.parse(this.props.user).data.username,
          priority: priority.toLowerCase()
        };
        this.props.loadMessages(this.props.messages.concat([newMessage]));
      }
    );
    this.content.value = '';
    this.scrollPane();
  }

  render() {
    let n = 0;
    return (
      <div className="page-content align-top pl-0 col-md-7 col-lg-9">
        <div className="messages">
          { this.props.messages.map((message) => {
            n += 1;
            let secondClass = '';
            if (this.props.messages.length - 1 === n) {
              secondClass = ' second';
            } else {
              secondClass = '';
            }
            return (
              <div className={`message-container${secondClass}`} key={message.id}>
                <div className="message">
                  <div className="message-details">
                    <span className="messenger">@{message.from_user}</span>
                    <span className={`message-type ${message.priority.toLowerCase()}`}>
                      {message.priority.toLowerCase()}</span>
                  </div>
                  <div>{message.message}</div>
                  {/* {message.readBy.length === 0 ? '' :
                  <div className="message-read-list">Read by: <span>
                  {message.readBy.join(', ')}</span></div>
                  } */}
                </div>
              </div>);
          })
          }
        </div>
        <div className="new-message">
            <div className="col-12 pl-0 pr-0 pb-2">
              <textarea className="message-box" placeholder="Type your message..."
              ref={(input) => { this.content = input; }}></textarea>
            </div>
            <div className="col-12 pl-0 pr-0">
              <div class="priority-level">
                <select class="browser-default" ref={(input) => { this.priority = input; }}>
                  <option value="Normal">Normal</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
              <div className="right"><button className="btn btn-primary" onClick={this.send}>Send</button></div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    send: newMessage => dispatch(sendMessage(newMessage)),
    loadMessages: allMessages => dispatch(loadMessages(allMessages))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
