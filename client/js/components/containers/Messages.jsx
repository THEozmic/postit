import React from 'react';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import MessageBox from '../presentational/MessageBox.jsx';
import { sendMessage } from '../../actions/message';
import api from '../helpers/api';

/**
 *
 */
class Messages extends React.Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      message_error: '',
      selectedGroup: {},
      sendStatus: 'SEND',
      messages: []
    };
    this.send = this.send.bind(this);
    this.acceptMessageDetails = this.acceptMessageDetails.bind(this);
  }

  /**
   *
   */
  scrollPane() {
    scrollToElement('.scroll-to', {
      ease: 'in-expo',
      duration: 900
    });
  }

  /**
   *
   */
  componentWillMount() {
    const id = this.props.match.params.id;
    this.setState({ messages: this.props.messages });
    api(null, `/api/groups/${id}`, 'GET')
    .then((group) => {
      this.setState({ selectedGroup: group });
    });
    api('', `/api/groups/${id}/read`, 'POST');
  }

  /**
   *
   */
  componentDidMount() {
    this.scrollPane();
  }

  /**
   *
   * @param {*} e
   */
  send(priority, content) {
    content = content.value.trim();
    priority = priority.value.trim();
    const readBy = '';
    if (content === '' || priority === '') {
      this.setState({ message_error: 'Error: Message has no priority, sender or content' });
      return;
    }

    this.setState({ sendStatus: 'SEND...' });
    const newMessageBody =
    `message=${content}&priority=${priority}&toGroup=${this.state.selectedGroup.id}`;
    api(newMessageBody, `/api/groups/${this.state.selectedGroup.id}/message`,
    'POST').then(
      (response) => {
        this.setState({ sendStatus: 'SEND' });
        const newMessage = {
          id: response.id,
          message: content,
          fromUser: JSON.parse(this.props.user).userData.username,
          priority: priority.toLowerCase(),
          readBy
        };
        const newMessages = this.props.messages.concat([newMessage]);
        this.props.loadMessages(newMessages);
      }
    );
    this.scrollPane();
  }

  acceptMessageDetails(priority, content) {
    this.send(priority, content);
  }

  /**
   *
   */
  render() {
    return (
      <div className="page-content align-top pl-0 col-md-7 col-lg-9">
        <div className="messages">
          { this.props.messages.map(message =>
            <div className='message-container' key={message.id}>
                <div className="message">
                  <div className="message-details">
                    <span className="messenger">@{message.fromUser}</span>
                    <span className={`message-type ${message.priority.toLowerCase()}`}>
                      {message.priority.toLowerCase()}</span>
                  </div>
                  <div className="message-content">{message.message}</div>
                   { message.readBy === '' && message.readBy.length === 0 ? '' :
                  <div className="message-read-list">Read by: <span>@
                  {message.readBy.split(',').join(', @')}</span></div>
                  }
                </div>
              </div>)
          }
          <div className="scroll-to"></div>
        </div>
        <MessageBox
         sendMessageDetails={this.send} sendStatus={this.state.sendStatus}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userData
});

const mapDispatchToProps = dispatch => ({
  send: newMessage => dispatch(sendMessage(newMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
