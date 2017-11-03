import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

/**
 * Header Component
 * @method Header
 * @returns {Object} JSX
 */
const Header = () =>
  (<header className="page-header">
    <div className="container">
      <Link
        className="page-title justify-content-center align-items-center"
        to="/"
      >
      Post
      <span>It</span>
      </Link>
      {
      jwt.decode(localStorage.token) !== null ?
        <span className="user-greeting">Hi,
        { jwt.decode(localStorage.token).data.username }</span>
      : null }
    </div>
  </header>);

Header.defaultProps = {
  username: ''
};

Header.propTypes = {
  username: PropTypes.string
};

export default Header;
