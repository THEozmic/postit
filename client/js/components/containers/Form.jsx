import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { logoutUser, loginUser } from '../../actions/user';

/**
 * Form component
 * @returns {JSX} for Form component
 */
const Form = ({ showSideMenu, active, user, onLogout, onLoginUser, children, title }) =>
  (
    <div>
      <Header />
      <section className="page-container container-fluid">
        <div className="container">
          <div className="row">
            { showSideMenu ?
              <SideMenu
                active={active}
                user={user}
                onLogout={onLogout}
                onLoginUser={onLoginUser}
              /> : '' }
            <div className="section page-content align-top pl-0 col m7 l8">
              <section>
                <h5>
                  {title.action || title }
                  <span style={{ color: '#0275d8' }}>
                    {title.group || ''}
                  </span> {title.last || ''}
                </h5>
                <div className="row">
                  <div className="col s12 m8">
                    <form className="form">
                      { children }
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );

const mapStateToProps = state =>
  ({
    messages: state.messages,
    user: state.userData
  });

const mapDispatchToProps = dispatch =>
  ({
    onLogout: () => dispatch(logoutUser()),
    onLoginUser: user => dispatch(loginUser(user))
  });


export default connect(mapStateToProps, mapDispatchToProps)(Form);
