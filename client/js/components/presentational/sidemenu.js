import React from 'react';
import { connect } from 'react-redux';
import logoutUser from '../../actions/logoutUser';
import loginUser from '../../actions/loginUser';

const logout = (completeLogout) => {
  sessionStorage.removeItem('user');
  completeLogout();
};

const SideMenu = ({ active = 'dashboard', user, ingroup = false, onChangeSelectedGroup, onLogout, onLoginUser }) => {
  if (sessionStorage.getItem('user') !== null && location.hash !== '#/register') {
    if (user.token === undefined) {
      onLoginUser(sessionStorage.getItem('user'));
      console.log('SIDEMENU_SESSION:::::::', sessionStorage.getItem('user'));
    }
  }

  console.log('SIDEMENU_USER:::::::', user);

  return (
    <aside className="left dashboard-menu pr-3">
      <ul>
        <li>
          <a href="#dashboard" className={ active === 'dashboard' ? 'active' : ''}>My Groups</a>
        </li>
        <li>
          <a href="#new-group" className={ active === 'create-group' ? 'active' : ''}
          data-toggle="modal" data-target="#createGroupModal">Create Group</a>
        </li>
        { ingroup ?
        <li>
          <a href="#search" className={ active === 'search' ? 'active' : ''}>
          Add members</a>
        </li> : ''}
        <li>
          <a href="#" onClick={ () => logout(onLogout) }>Logout</a>
        </li>
      </ul>
  </aside>);
};

const mapStateToProps = (state) => {
  return {
    user: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logoutUser()),
    onLoginUser: user => dispatch(loginUser(user))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
