import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { Messages } from './';
import changeSelectedGroupAction from '../../actions/changeSelectedGroup';
import loadMessages from '../../actions/loadMessages';

class Group extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const messages = [
      {
        id: 1, from: '@michael', priority: 'normal', content: 'Hello guys', readBy: ['@emeka', '@obi']
      },
      {
        id: 2, from: '@emeka', priority: 'normal', content: 'Hello @michael', readBy: ['@michael', '@obi'],
      }
    ];
    this.props.loadMessages(messages);
  }

  render() {
    const { onChangeSelectedGroup, messages } = this.props;
    console.log(messages, '=======>>>>');
    return (
      <div>
        <Header/>
          <section className="page-container container-fluid">
            <div className="container">
              <div className="row">
                <SideMenu ingroup={true} onChangeSelectedGroup={ onChangeSelectedGroup }/>
                <div className="section page-content align-top pl-0 col m7 l8 xl9">
                  <h5 className="group-header">Andela Bootcampers</h5>
                  <Messages messages={ messages }/>
                </div>
              </div>
            </div>
          </section>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSelectedGroup: group => dispatch(changeSelectedGroupAction(group)),
    loadMessages: allMessages => dispatch(loadMessages(allMessages))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
