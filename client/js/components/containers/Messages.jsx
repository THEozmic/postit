import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import { MessageBox, Message } from '../presentational/';
import { apiSendMessage } from '../../actions/message';

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
   * @returns {void}
   */
  componentWillMount() {
    this.setState({ messages: this.props.messages });
  }

  /**
   * @returns {void}
   */
  componentDidMount() {
    this.scrollPane();
  }

  /**
   * @returns {void}
   * This method is called after the component has renders
   * It scrolls the page to the bottom so that the user can see the newest
   * messages
   */
  scrollPane() {
    scrollToElement('.scroll-to', this.scrollOptions);
  }

  /**
   * @returns {void}
   * @param {string} priority
   * @param {string} message
   */
  send(priority, message) {
    message = message.value.trim();
    priority = priority.value.trim();
    if (message === '' || priority === '') {
      return;
    }
    this.setState({ sendStatus: 'SENDING' });
    this.props.apiSendMessage({
      message,
      priority,
      toGroup: this.props.groupId
    }).then(() => {
      this.setState({ sendStatus: 'SEND' });
    });
    this.scrollPane();
  }

  /**
   * @returns {JSX} for the Messages component
   */
  render() {
    return (
      <div className="page-content align-top pl-0 col-md-7 col-lg-9">
        <div className="messages">
          { this.props.messages.map(message =>
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
  user: state.user,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  apiSendMessage: newMessage => dispatch(apiSendMessage(newMessage)),
});

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  groupId: PropTypes.number.isRequired,
  apiSendMessage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
