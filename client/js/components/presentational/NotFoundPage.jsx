import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFoundPage Component
 * @method NotFoundPage
 * @returns {Object} JSX
 */
const NotFoundPage = () =>
  (
    <div><h5>Page not found.</h5> <Link to="/dashboard">Go Back?</Link></div>
  );

export default NotFoundPage;
