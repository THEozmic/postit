import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header } from './';

/**
 * Home component
 * @returns {JSX} for the Home component
 */
const Home = () =>
  (<div>
    <Header />
    <section className="container">
      <div>
        <h5>
          <p className="mt-5">
            A web application
            that lets you easily share
            messages to people you care about.
          </p>
        </h5>
        <div className="steps">
          <div> 1. Create an account</div>
          <div> 2. Create a message board</div>
          <div> 3. Add friends to board</div>
          <div> 4. Post away!</div>
        </div>
        <div className="action-buttons">
          <Link
            id="create-account"
            to="register"
            className="waves-effect waves-light btn action-btn"
          >Create an account</Link>
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
