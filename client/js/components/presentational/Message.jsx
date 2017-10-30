import React from 'react';
import PropTypes from 'prop-types';

/**
 * Message Component
 * @method Message
 * @returns {Object} JSX
 * @param {Object} props
 */
const Message = ({ message }) =>
  (
    <div className="message-container" key={message.id}>
      <div className="message" key={message.id}>
        <div className="message-details">
          <span className="messenger">@{message.fromUser}</span>
          <span className={`message-type ${message.priority.toLowerCase()}`}>
            {message.priority.toLowerCase()}</span>
        </div>
        <div className="message-content">{message.message}</div>
      </div>
    </div>
  );

Message.propTypes = {
  message: PropTypes.object.isRequired
};
export default Message;
