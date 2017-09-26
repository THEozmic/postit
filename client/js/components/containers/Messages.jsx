import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import { MessageBox, Message } from '../presentational/';
import { sendMessage } from '../../actions/message';
import api from '../helpers/api';

/**
 * Messages component
 */
class Messages extends React.Component {
  /**
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
    this.scrollPane = this.scrollPane.bind(this);

    this.scrollOptions = {
      ease: 'in-expo',
      duration: 900
    };
  }

  /**
   * @returns {undefined}
   */
  componentWillMount() {
    this.setState({ messages: this.props.messages });
  }

  /**
   * @returns {undefined}
   */
  componentDidMount() {
    this.scrollPane();
  }

  /**
   * @returns {undefined}
   * This method is called after the component has renders
   * It scrolls the page to the bottom so that the user can see the newest
   * messages
   */
  scrollPane() {
    scrollToElement('.scroll-to', this.scrollOptions);
  }

  /**
   * @returns {undefined}
   * @param {string} priority
   * @param {string} content
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
    api(newMessageBody, `/api/v1/groups/${this.props.groupId}/message`,
    'POST').then(
      (response) => {
        this.setState({ sendStatus: 'SEND' });
        const newMessage = {
          id: response.message.id,
          message: content,
          fromUser: JSON.parse(sessionStorage.getItem('user'))
          .userData.username,
          priority: priority.toLowerCase(),
          readBy
        };
        this.setState({ messages: this.state.messages.concat(newMessage) });
      }
    );
    this.scrollPane();
  }

  /**
   * @returns {JSX} for the Messages component
   */
  render() {
    return (
      <div className="page-content align-top pl-0 col-md-7 col-lg-9">
        <div className="messages">
          { this.state.messages.map(message =>
            <Message key={message.id} message={message} />)
          }
        </div>
        <div className="scroll-to" />
        <MessageBox
          sendMessageDetails={this.send}
          sendStatus={this.state.sendStatus}
        />
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

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  groupId: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
