import React from 'react';
import { connect } from 'react-redux';

const SideMenu = ({ ingroup = false, onChangeSelectedGroup, user }) => {
  if (user.username === undefined) {
    location.hash = '#login';
  } else {
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
            <a href="#">Logout</a>
          </li>
        </ul>
    </aside>);
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.userData
  };
};
export default connect(mapStateToProps, null)(SideMenu);
