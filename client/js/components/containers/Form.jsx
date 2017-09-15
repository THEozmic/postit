import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { logoutUser, loginUser } from '../../actions/user';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
          <section className="page-container container-fluid">
            <div className="container">
              <div className="row">
                { this.props.showSideMenu ? <SideMenu active={ this.props.active } user={this.props.user} onLogout={this.props.onLogout} onLoginUser={this.props.onLoginUser}/> : '' }
                <div className="section page-content align-top pl-0 col m7 l8">
                  <section>
                    <h5>{this.props.title.action || this.props.title } <span style={{ color: '#0275d8' }}>{this.props.title.group || ''}</span> {this.props.title.last || ''}</h5>
                    <div className='row'>
                      <div className='col s12 m8'>
                        <form className='form'>
                          { this.props.children }
                        </form>
                      </div>
                    </div>
                  </section>
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
    user: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logoutUser()),
    onLoginUser: user => dispatch(loginUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
