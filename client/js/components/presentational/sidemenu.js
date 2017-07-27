import React from 'react';

const SideMenu = ({ ingroup = false, onChangeSelectedGroup }) => {
  console.log(onChangeSelectedGroup, '=========>>>');
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
};

export default SideMenu;
