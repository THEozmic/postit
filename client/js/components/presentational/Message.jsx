import React from 'react';

const Message = ({ message }) => {
  return (
    <div className='message-container' key={message.id}>
    <div className="message" key={message.id}>
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
  </div>
  );
};

export default Message;
