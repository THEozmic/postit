import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './';

/**
 * NotFoundPage Component
 * @method NotFoundPage
 * @returns {Object} JSX
 */
const NotFoundPage = () =>
  (
    <div>
      <Header />
      <div className="section container">
        <h5 className="red-text">404 Error</h5>
        <br />
        <h4>Page not found.</h4>
        <br />
        <Link
          to="/dashboard"
          className="waves-effect waves-light btn action-btn"
        >Go Home</Link>
      </div>
      <Footer />
    </div>
  );

export default NotFoundPage;
