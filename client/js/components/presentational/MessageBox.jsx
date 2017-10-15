import React from 'react';
import PropTypes from 'prop-types';

/**
 * The MessageBox component contains the textarea for typing messages,
 * the send button and the priority level message selector
 */
class MessageBox extends React.Component {

  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.sendMessageDetails = this.sendMessageDetails.bind(this);
  }

  /**
   * @returns {void}
   */
  sendMessageDetails() {
    this.props.sendMessageDetails(this.priority, this.content);
    this.content.value = '';
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
              disabled={this.props.sendStatus === 'SENDING'}
              className="btn btn-primary"
              onClick={this.sendMessageDetails}
            >
              {this.props.sendStatus}</button>
          </div>
        </div>
      </div>
    );
  }
}

MessageBox.propTypes = {
  sendMessageDetails: PropTypes.func.isRequired,
  sendStatus: PropTypes.string.isRequired
};

export default MessageBox;
