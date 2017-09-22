import React from 'react';
import { connect } from 'react-redux';

/**
 * Header component
 * @param {*} props
 * @returns {JSX} for Header component
 */
const Header = () => {
  let username = '';
  if (JSON.parse(sessionStorage.getItem('user')) !== null) {
    username = JSON.parse(sessionStorage.getItem('user')).userData.username;
  }
  return (
    <header className="page-header">
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
};

const mapStateToProps = state =>
  ({
    user: state.userData
  });

export default connect(mapStateToProps, null)(Header);

