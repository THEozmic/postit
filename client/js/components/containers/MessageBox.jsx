import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import { apiSendMessage } from '../../actions/message';

/**
 * MessageBox Component
 * The MessageBox component contains the textarea for typing messages,
 * the send button and the priority level message selector
 * @class MessageBox
 * @extends {React.Component}
 */
export class MessageBox extends React.Component {

  /**
   * Creates an instance of MessageBox
   * @param {any} props -
   * @memberof MessageBox
   */
  constructor(props) {
    super(props);
    this.state = {
      message_error: '',
      sendStatus: 'SEND'
    };
    this.scrollPane = this.scrollPane.bind(this);
    this.send = this.send.bind(this);

    this.scrollOptions = {
      ease: 'in-expo',
      duration: 900
    };
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
  send() {
    const message = this.content.value.trim();
    const priority = this.priority.value.trim();
    if (message !== '') {
      this.setState({ sendStatus: 'SENDING' });
      this.props.apiSendMessage({
        message,
        priority,
        toGroup: this.props.groupId
      }).then(() => {
        this.setState({ sendStatus: 'SEND' });
        this.content.value = '';
      });
      this.scrollPane();
    }
  }

  /**
   * @returns {JSX} for the MessageBox component
   */
  render() {
    return (
      <div className="new-message">
        <div className="col-12 pl-0 pr-0 pb-2">
          <textarea
            className="message-box"
            id="messageBox"
            placeholder="Type your message..."
            ref={(input) => { this.content = input; }}
          />
        </div>
        <div className="col-12 pl-0 pr-0">
          <div className="priority-level">
            <select
              className="browser-default"
              ref={(input) => { this.priority = input; }}
            >
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div className="right">
            <button
              disabled={this.state.sendStatus === 'SENDING'}
              className="btn btn-primary sendMessage"
              onClick={this.send}
            >
              {this.state.sendStatus}</button>
          </div>
        </div>
      </div>
    );
  }
}

MessageBox.defaultProps = {
  groupId: 1
};

MessageBox.propTypes = {
  apiSendMessage: PropTypes.func.isRequired,
  groupId: PropTypes.number
};

const mapDispatchToProps = dispatch => ({
  apiSendMessage: newMessage => dispatch(apiSendMessage(newMessage)),
});

export default connect(null, mapDispatchToProps)(MessageBox);
