import React from 'react';
import ReactDOM from 'react-dom';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const scrollToDiv = ReactDOM.findDOMNode(this.refs.last);
    scrollToDiv.scrollTop = scrollToDiv.scrollHeight;
  }

  render() {
    return (
      <div className="page-content align-top pl-0 col-md-7 col-lg-9">
        <div className="col-md-12 row pb-0 container">
          {/* <div className="col-md-4 col-sm-12 pl-0 pb-3 float-right">
            <select className="form-control">
              <option>Unread Messages</option>
              <option>Read Messages</option>
              <option>All Messages</option>
            </select>
          </div> */}
        </div>
        <div className="messages">
          <div className="message-container">
            <div className="message-details">
              <span className="messenger">@charles</span>
              <span className="message-type critical">Critical</span>
            </div>
            <div className="message">This is to inform all bootcampers that they are not expected to be @ andela office on tuesday as the office will not be open for business. We all are going offsite! Cheers!</div>
            <div className="message-read-list">Read by: <span>@michael, @emeka, @tracy, @philip</span></div>
          </div>
          <div className="message-container">
            <div className="message-details">
              <span className="messenger">@michael</span>
              <span className="message-type urgent">Urgent</span>
            </div>
            <div className="message">Hello guys, I just got an invitation to the fellowship program. I thought I should let you guys know.</div>
            <div className="message-read-list">Read by: <span>@emeka, @tracy, @michael, @philip</span></div>
          </div>
          <div className="message-container">
            <div className="message-details">
              <span className="messenger">@emeka</span>
              <span className="message-type normal">Normal</span>
            </div>
            <div className="message">Welcome bootcampers! I am emeka and I am your Facilitator, please get yourself comfortable with the study videos.</div>
            <div className="message-read-list">Read by: <span>@philip, @michael, @tracy, @emeka</span></div>
          </div>
          <div className="message-container">
            <div className="message-details">
              <span className="messenger">@michael</span>
              <span className="message-type urgent">Urgent</span>
            </div>
            <div className="message">Hello guys, I just got an invitation to the fellowship program. I thought I should let you guys know.</div>
            <div className="message-read-list">Read by: <span>@tracy, @emeka, @michael, @philip</span></div>
          </div>
          <div className="message-container" ref="last">
            <div className="message-details">
              <span className="messenger">@emeka</span>
              <span className="message-type normal">Normal</span>
            </div>
            <div className="message">Welcome bootcampers! I am emeka and I am your Facilitator, please get yourself comfortable with the study videos.</div>
            <div className="message-read-list">Read by: <span>@michael, @emeka, @tracy, @philip</span></div>
          </div>
        </div>
        <div className="new-message">
            <div className="col-12 pl-0 pr-0 pb-2">
              <textarea className="message-box" placeholder="Type your message..."></textarea>
            </div>
            <div className="col-12 pl-0 pr-0">
              <div className="col-6 container m-0 float-left pl-0">
                <select className="form-control">
                  <option>Normal</option>
                  <option>Urgent</option>
                  <option>Critical</option>
                </select>
              </div>
              <div className="right"><button className="btn btn-primary float-right">Send</button></div>
            </div>
          </div>
      </div>
    );
  }
}

export default Messages;

