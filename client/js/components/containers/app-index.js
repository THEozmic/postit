import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

/**
  Index page parent component
*/
class AppIndex extends React.Component {
  /**
    returns the component jsx
    @returns {JSX} component
  */
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false
    };
    this.showLoginModal = this.showLoginModal.bind(this);
  }

  showLoginModal() {
    this.setState({ showLoginModal: true });
  }
  render() {
    return (
        <div>
            <header className="page-header col s12">
                <a
                className={'page-title container\
                justify-content-center\
                align-items-center'}
                href="index.html">Post<span>It</span></a>
            </header>

            <section className="container col s12">
                <div>
                    <h5>
                        <p className="mt-5">A web application
                            that lets you easily share
                            messages to people you care about.
                        </p>
                    </h5>
                    <div class="action-buttons">
                        <button
                        className="waves-effect waves-light btn action-btn">
                        Create an account
                        </button>
                        <button
                        onClick={this.showLoginModal}
                        className="waves-effect waves-light btn action-btn">
                        Login
                        </button>

                    </div>
                    <div className="steps">
                        <div> 1. Create an account</div>
                        <div> 2. Create a message board</div>
                        <div> 3. Add friends to board</div>
                        <div> 4. Post away!</div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div
                className="modal fade"
                id="createAccountModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="createAccountModal"
                aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5
                            className="modal-title"
                            id="createAccountModalLabel">
                            Create an account</h5>
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
                                        <label>Username</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        placeholder=
                                        {'Select\
                                         a username you can easily remember'}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                        className="form-control"
                                        type="email"
                                        placeholder
                                        =
                                        {'Select an email\
                                        address you have access to'}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Select strong password"/>
                                    </div>
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
                            Create</button>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div
                className="modal open"
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
                
            </section>

            <footer className="container left col s12">
                <div
                className="col s12">
                    <section>
                        <h5>About</h5>
                        <p>
                            <strong>PostIt </strong>
                            is an open source web application.
                        </p>
                    </section>

                    <section>
                        <h5>Made with love by</h5>
                        <div><img src="dist/images/Landscape-white.png"/></div>
                    </section>

                    <section>
                        <h5>Help and support</h5>
                        <a href="#/userguide">User Guide</a>
                    </section>
                </div>
            </footer>
        </div>
    );
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
      toggleLoginModal: loginFormIsOpen =>
      dispatch(actions.toggleLoginModal(loginFormIsOpen))
    };
  }
};

export default connect(stateToProps, dispatchToProps)(AppIndex);
