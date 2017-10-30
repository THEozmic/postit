import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Header Component
 * @method Header
 * @returns {Object} JSX
 * @param {Object} props
 */
const Header = ({ username }) =>
  (<header className="page-header">
    <div className="container">
      <Link
        className="page-title justify-content-center align-items-center"
        to="/"
      >
      Post
      <span>It</span>
      </Link>
      { username !== '' ?
        <span className="user-greeting">Hi, { username }</span>
      : ''}
    </div>
  </header>);

Header.defaultProps = {
  username: ''
};

Header.propTypes = {
  username: PropTypes.string
};

export default Header;

