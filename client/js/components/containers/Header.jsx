import React from 'react';
import PropTypes from 'prop-types';
/**
 * Header component
 * @param {*} props
 * @returns {JSX} for Header component
 */
const Header = ({ username }) =>
  (<header className="page-header">
    <div className="container">
      <a
        className="page-title justify-content-center align-items-center"
        href="/#/"
      >
      Post
      <span>It</span>
      </a>
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

