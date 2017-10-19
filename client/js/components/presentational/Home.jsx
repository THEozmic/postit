import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header } from './';

/**
 * Home Component
 * @method Home
 * @returns {Object} JSX
 * @param {Object} props
 */
const Home = () =>
  (<div>
    <Header />
    <section className="container">
      <div>
        <h5 className="intro-text">
          <p className="mt-5">
            Now you can send <span className="important">prioritized </span>
            broadcasts to people who need to recieve them!
          </p>
        </h5>
        <div className="steps">
          <h4 className="title">Get started</h4>
          <div> 1. Create an account</div>
          <div> 2. Create a group</div>
          <div> 3. Add people to the group</div>
          <div> 4. Post Broadcasts that matter</div>
        </div>
        <div className="action-buttons">
          <Link
            id="create-account"
            to="register"
            className="waves-effect waves-light btn action-btn"
          >Start Here</Link>
          <Link
            id="login"
            to="login"
            className="waves-effect waves-light btn action-btn"
          >Login</Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>);

export default Home;
