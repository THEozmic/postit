import React from 'react';
import { connect } from 'react-redux';

const Header = ({ user = '{}' }) => {
  user = JSON.parse(user);
  console.log(user, 'this is user');
  return (<header className="page-header">
      <div className='container'>
        <a
        className='page-title justify-content-center align-items-center'
        href="#">
        Post
        <span>It</span>
        </a>
        { !user.userData ? '' :
        <span className="user-greeting">Hi, { user.userData.username }</span>
        }
      </div>
  </header>);
};

const mapStateToProps = (state) => {
  return {
    user: state.userData
  };
};
export default connect(mapStateToProps, null)(Header);

