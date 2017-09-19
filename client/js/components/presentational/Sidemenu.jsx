import React from 'react';
import api from '../helpers/api';



class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(completeLogout) {
    sessionStorage.removeItem('user');
    completeLogout();
  }

  render() {
    const { active = 'dashboard', showSearchLink = false, onLogout, groupId } = this.props;

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
          { showSearchLink ?
          <li>
            <a href={`#/group/${groupId}/search`} className={ active === 'search' ? 'active' : ''}>
            Update Members</a>
          </li> : ''}
          <li>
            <a href="#" onClick={ () => this.logout(onLogout) }>Logout</a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideMenu;
