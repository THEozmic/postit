import React from 'react';
import api from '../helpers/api';

const logout = (completeLogout) => {
  sessionStorage.removeItem('user');
  completeLogout();
};

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: {}
    };
  }

  componentWillMount() {
    const id = location.href.split('/')[location.href.split('/').length - 1];
    if (!isNaN(id)) {
      api(null, `/api/groups/${id}`, 'GET')
      .then((result) => {
        this.setState({ selectedGroup: result });
      });
    }
  }

  render() {
    const { active = 'dashboard', user, showSearchLink = false, onLogout, onLoginUser } = this.props;

    if (sessionStorage.getItem('user') !== null && location.hash !== '#/register') {
      if (user.token === undefined) {
        onLoginUser(sessionStorage.getItem('user'));
      }
    } else {
      location.hash = '#login';
      return null;
    }

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
            <a href={`#/group/${this.state.selectedGroup.id}/search`} className={ active === 'search' ? 'active' : ''}>
            Update Members</a>
          </li> : ''}
          <li>
            <a href="#" onClick={ () => logout(onLogout) }>Logout</a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideMenu;
