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
      loading: 'Loading...',
      selectedGroup: {}
    };
  }

  componentWillMount() {
    const id = location.href.split('/')[location.href.split('/').length - 1];
    console.log('Location:::', this.props.location.query);
    api(null, `/api/groups/${id}`, 'GET')
    .then((result) => {
      this.setState({ selectedGroup: result });
      api(null, `/api/groups/${id}/messages`, 'GET').then(
        (messages) => {
          this.setState({ loading: '', messages });
          this.props.loadMessages(messages);
        });
    });
  }

  render() {
    const { messages } = this.props;
    console.log(messages, '=======>>>>');
    return (
      <div>
        <Header/>
          <section className="page-container container-fluid">
            <div className="container">
              <div className="row">
                <SideMenu ingroup={true}/>
                <div className="section page-content align-top pl-0 col m7 l8 xl9">
                  <h5 className="group-header">{ this.state.selectedGroup.name }</h5>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMessages: allMessages => dispatch(loadMessages(allMessages))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
