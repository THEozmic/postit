import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageBox from './MessageBox';
import { Message } from '../presentational/';

/**
 * Messages Component
 * @class Messages
 * @extends {React.Component}
 */
export class Messages extends React.Component {
  /**
   * Creates an instance of Messages
   * @param {any} props -
   * @memberof Messages
   */
  constructor(props) {
    super(props);
    this.state = {
      message_error: '',
      sendStatus: 'SEND',
      messages: []
    };
  }

  /**
   * @returns {void}
   */
  componentWillMount() {
    this.setState({ messages: this.props.messages });
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
        <MessageBox groupId={this.props.groupId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages
});

Messages.defaultProps = {
  messages: [],
  groupId: 1
};

Messages.propTypes = {
  messages: PropTypes.array,
  groupId: PropTypes.number
};

export default connect(mapStateToProps, null)(Messages);
