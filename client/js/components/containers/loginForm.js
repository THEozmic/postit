import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class LoginForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog" aria-labelledby="loginModal" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5
                  className="modal-title"
                  id="loginModalLabel">Login to your account</h5>
                  <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body">
                  <form>
                      <div>
                          <div className="form-group">
                              <label>Username/Email</label>
                              <input
                              className="form-control" type="text"/>
                          </div>
                          <div className="form-group">
                              <label>Password</label>
                              <input
                              className="form-control"
                              type="password"/>
                          </div>
                          <a
                          href="forgot-password.html">
                          Forgot Password?</a>
                      </div>
                  </form>
              </div>
              <div className="modal-footer">
                  <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal">Cancel</button>
                  <button
                  type="button"
                  className="btn btn-primary">
                  Login</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const stateToProps = (state) => {
  if (state) {
    return {
      loginFormIsOpen: state.loginFormIsOpen
    };
  }
};

const dispatchToProps = (dispatch) => {
  if (dispatch) {
    return {
      toggleLoginForm: loginFormIsOpen =>
      dispatch(actions.toggleLoginModal(loginFormIsOpen))
    };
  }
};

export default connect(stateToProps, dispatchToProps)(LoginForm);
