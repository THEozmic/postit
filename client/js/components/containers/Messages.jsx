import React from 'react';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import { MessageBox, Message } from '../presentational/';
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
      sendStatus: 'SEND',
      messages: []
    };
    this.send = this.send.bind(this);
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
  componentDidMount() {
    this.scrollPane();
  }

  componentWillMount() {
    this.setState({ messages: this.props.messages });
  }

  /**
   *
   *
   */
  send(priority, content) {
    content = content.value.trim();
    priority = priority.value.trim();
    const readBy = '';
    if (content === '' || priority === '') {
      return;
    }

    this.setState({ sendStatus: 'SEND...' });
    const newMessageBody =
    `message=${content}&priority=${priority}&toGroup=${this.props.groupId}`;
    api(newMessageBody, `/api/groups/${this.props.groupId}/message`,
    'POST').then(
      (response) => {
        this.setState({ sendStatus: 'SEND' });
        const newMessage = {
          id: response.id,
          message: content,
          fromUser: JSON.parse(sessionStorage.getItem('user')).user.username,
          priority: priority.toLowerCase(),
          readBy
        };
        this.setState({ messages: this.state.messages.concat(newMessage) });
      }
    );
    this.scrollPane();
  }

  /**
   *
   */
  render() {
    return (
      <div className="page-content align-top pl-0 col-md-7 col-lg-9">
        <div className="messages">
          { this.state.messages.map(message =>
            <Message key={message.id} message={message} groupId={this.props.groupId}/>)
          }
        </div>
        <div className="scroll-to"></div>
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
