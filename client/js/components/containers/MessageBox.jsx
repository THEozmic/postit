import React from 'react';

// const MessageBox = (inputs, send, sendStatus) =>
//   <div className="new-message">
//     <div className="col-12 pl-0 pr-0 pb-2">
//       {/* <textarea className="message-box" placeholder="Type your message..."
//       ref={(input) => { inputs.content = input; }}></textarea> */}
//     </div>
//     <div className="col-12 pl-0 pr-0">
//       <div className="priority-level">
//         {/* <select className="browser-default" ref={(input) => { inputs.priority = input; }}>
//           <option value="Normal">Normal</option>
//           <option value="Urgent">Urgent</option>
//           <option value="Critical">Critical</option>
//         </select> */}
//       </div>
//       {/* <div className="right">
//         <button disabled={sendStatus === 'SEND...'}
//         className="btn btn-primary" onClick={send}>
//         {sendStatus}</button></div> */}
//     </div>
//   </div>;

class MessageBox extends React.Component {

  constructor(props) {
    super(props);
    this.sendMessageDetails = this.sendMessageDetails.bind(this);
  }
  sendMessageDetails() {
    this.props.sendMessageDetails(this.priority, this.content);
    this.content.value = '';
  }
  render() {
    return (
      <div className="new-message">
        <div className="col-12 pl-0 pr-0 pb-2">
          <textarea className="message-box" placeholder="Type your message..."
          ref={(input) => { this.content = input; }}></textarea>
        </div>
        <div className="col-12 pl-0 pr-0">
          <div className="priority-level">
            <select className="browser-default" ref={(input) => { this.priority = input; }}>
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div className="right">
            <button disabled={this.props.sendStatus === 'SEND...'}
            className="btn btn-primary" onClick={this.sendMessageDetails}>
            {this.props.sendStatus}</button></div>
        </div>
      </div>
    );
  }
}

export default MessageBox;