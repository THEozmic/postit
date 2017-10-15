import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFoundPage component
 * @returns {JSX} for NotFoundPage component
 */
const NotFoundPage = () =>
  (
    <div><h5>Page not found.</h5> <Link to="/dashboard">Go Back?</Link></div>
  );

export default NotFoundPage;
