import React from 'react';

/**
  Docs of this class
*/
export default class AppIndex extends React.Component {

  /**
    Docs of this method
    @returns {JSX} SideMenu component
  */
  render() {
    return (
        <div>
            <header className="page-header container-fluid mt-5">
                <a
                className={'page-title container\
                justify-content-center\
                align-items-center'}
                href="index.html">Post<span>It</span></a>
            </header>

            <section className="page-content container-fluid">
                <div
                className="container justify-content-center align-items-center">
                    <p
                    className="mt-5">
                    {'A web application\
                     that lets you easily share messages quickly.'}</p>
                    <div>
                        <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#createAccountModal">
                        Create an account</button>
                        <button
                        className="btn btn-secondary"
                        data-toggle="modal"
                        data-target="#loginModal">Login</button>
                    </div>
                    <div className="container-fluid steps mt-5">
                        <div className="row"> 1. Create an account</div>
                        <div className="row"> 2. Create a message board</div>
                        <div className="row"> 3. Add friends to board</div>
                        <div className="row"> 4. Post away!</div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div
                class="modal fade"
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
            </section>

            <footer className="container-fluid mt-5 bottom">
                <div
                className="container justify-content-center align-items-center">
                    <section>
                        <h5>About</h5>
                        <p>
                            <strong>PostIt</strong>
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
