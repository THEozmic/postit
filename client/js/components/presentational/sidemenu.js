import React from 'react';
import { connect } from 'react-redux';
import logoutUser from '../../actions/logoutUser';

const SideMenu = ({ ingroup = false, onChangeSelectedGroup, user, onLogout }) => {
  if (Object.keys(user).length === 0) {
    location.hash = '#login';
    return null;
  }
  return (
    <aside className="left dashboard-menu pr-3">
      <ul>
        <li>
          <a href="#dashboard" className="active">My Groups</a>
        </li>
        <li>
          <a href="#new-group" data-toggle="modal" data-target="#createGroupModal">Create Group</a>
        </li>
        { ingroup ?
        <li>
          <a href="#search" onClick={ () => onChangeSelectedGroup('Andela Bootcampers') }>Add members</a>
        </li> : ''}
        <li>
          <a href="#" onClick={ onLogout }>Logout</a>
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
    onLogout: () => dispatch(logoutUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
