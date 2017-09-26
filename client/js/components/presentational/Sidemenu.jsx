import React from 'react';
import PropTypes from 'prop-types';

/**
 * The component for the side menu
 */
class SideMenu extends React.Component {

  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  /**
   * @param {function} completeLogout
   * @returns {undefined}
   * This method removes the user token from sessionStorage
   * and fires an action to logout the user
   */
  logout(completeLogout) {
    sessionStorage.removeItem('user');
    completeLogout();
  }

  /**
   * @returns {JSX} the JSX for the side menu component
   */
  render() {
    const {
      active = 'dashboard',
      showSearchLink = false,
      onLogout,
      groupId } = this.props;

    return (
      <aside className="left dashboard-menu pr-3">
        <ul>
          <li>
            <a
              href="#dashboard"
              className={active === 'dashboard' ? 'active' : ''}
            >My Groups</a>
          </li>
          <li>
            <a href="#new-group" className={active === 'create-group' ? 'active' : ''}>Create Group</a>
          </li>
          { showSearchLink ?
            <li>
              <a
                href={`#/group/${groupId}/search`}
                className={active === 'search' ? 'active' : ''}
              >
              Update Members</a>
            </li> : ''}
          <li>
            <a href="/#/login" onClick={() => this.logout(onLogout)}>Logout</a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideMenu;
