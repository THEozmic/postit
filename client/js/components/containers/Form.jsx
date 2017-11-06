import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { logoutUser, loginUser } from '../../actions/user';

/**
 * Form Component
 * @func Form
 * @returns {Object} JSX
 * @param {Object} props
 */
export const Form =
(props) => {
  const { showSideMenu = false, active,
    onLogout, onLoginUser, children,
    title, onSubmit = null, showSearchLink = false } = props;

  return (
    <div>
      <Header />
      <section className="page-container container-fluid">
        <div className="container">
          <div className="row">
            {
              showSideMenu ?
                <SideMenu
                  active={active || 'dashboard'}
                  onLogout={onLogout}
                  onLoginUser={onLoginUser}
                  showSearchLink={showSearchLink}
                /> : null
            }
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
                    { onSubmit === null ?
                      <form className="form">
                        { children }
                      </form> :
                      <form className="form" onSubmit={onSubmit}>
                        { children }
                      </form>}
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
};

const mapStateToProps = state =>
  ({
    messages: state.messages,
    user: state.user
  });

const mapDispatchToProps = dispatch =>
  ({
    onLogout: () => dispatch(logoutUser()),
    onLoginUser: user => dispatch(loginUser(user))
  });

Form.defaultProps = {
  title: '',
  active: 'dashboard',
  onLoginUser: () => {},
  onLogout: () => {},
  showSideMenu: false,
  children: '',
  onSubmit: () => {},
  showSearchLink: false
};

Form.propTypes = {
  showSideMenu: PropTypes.bool,
  active: PropTypes.string,
  onLogout: PropTypes.func,
  onLoginUser: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onSubmit: PropTypes.func,
  showSearchLink: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
