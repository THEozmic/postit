import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { Messages } from './';
import changeSelectedGroupAction from '../../actions/changeSelectedGroup';
import loadMessages from '../../actions/loadMessages';
import api from '../helpers/api';

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'Loading...'
    };
  }

  componentWillMount() {
    const headers = new Headers();
    const { selectedGroup } = this.props;
    console.log('GROUP:::::::', selectedGroup);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
    api(null, `/api/groups/${this.props.selectedGroup.id}/messages`, 'GET', headers).then(
      (messages) => {
        this.setState({ loading: '', messages });
        this.props.loadMessages(messages);
        console.log('MESSAGES::::::::::>>>> ', messages);
      });
    // const messages = [
    //   {
    //     id: 1, from: '@michael', priority: 'normal', content: 'Hello guys', readBy: ['@emeka', '@obi']
    //   },
    //   {
    //     id: 2, from: '@emeka', priority: 'normal', content: 'Hello @michael', readBy: ['@michael', '@obi'],
    //   }
    // ];
  }

  render() {
    const { onChangeSelectedGroup, messages, selectedGroup } = this.props;
    console.log(messages, '=======>>>>');
    if (selectedGroup.name === '' || selectedGroup.name === undefined || selectedGroup.name === null) {
      location.hash = '#dashboard';
      return null;
    }
    return (
      <div>
        <Header/>
          <section className="page-container container-fluid">
            <div className="container">
              <div className="row">
                <SideMenu ingroup={true} onChangeSelectedGroup={ onChangeSelectedGroup }/>
                <div className="section page-content align-top pl-0 col m7 l8 xl9">
                  <h5 className="group-header">{ selectedGroup.name }</h5>
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
    messages: state.messages,
    selectedGroup: state.selectedGroup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSelectedGroup: group => dispatch(changeSelectedGroupAction(group)),
    loadMessages: allMessages => dispatch(loadMessages(allMessages))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
