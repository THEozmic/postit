import React from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';
import scrollToElement from 'scroll-to-element';
import sendMessage from '../../actions/sendMessage';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message_error: ''
    };
    this.send = this.send.bind(this);
    this.scrollPane = this.scrollPane.bind(this);
  }

  scrollPane() {
    scrollToElement('.second', {
      offset: -60,
      ease: 'in-expo',
      duration: 900
    });
  }

  componentDidMount() {
    this.scrollPane();
  }

  send(e) {
    e.preventDefault();
    let { content, from, priority } = this;
    content = content.value.trim();
    from = '@michael';
    priority = priority.value.trim().toLowerCase();
    const id = this.props.messages[this.props.messages.length - 1].id + 1;
    const readBy = [];
    if (content === '' || from === '' || priority === '') {
      this.setState({ message_error: 'Error: Message has no priority, sender or content' });
      return;
    }
    const newMessage = { id, content, from, priority, readBy };
    fetch('http://localhost:8000/api/users')
    .then((response) => {
      console.log(response, '==============>>>>');
      if (response.body.status === 200) {
        this.props.send(newMessage);
      }
    });

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
                    <span className="messenger">{message.from}</span>
                    <span className={`message-type ${message.priority}`}>{message.priority}</span>
                  </div>
                  <div>{message.content}</div>
                  {message.readBy.length === 0 ? '' :
                  <div className="message-read-list">Read by: <span>
                  {message.readBy.join(', ')}</span></div>
                  }
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
const mapDispatchToProps = (dispatch) => {
  return {
    send: newMessage => dispatch(sendMessage(newMessage))
  };
};

export default connect(null, mapDispatchToProps)(Messages);
