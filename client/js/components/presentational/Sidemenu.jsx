import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * The component for the side menu
 */
class SideMenu extends React.Component {

  /**
   * @param {function} completeLogout
   * @returns {void}
   * This method removes the user token from sessionStorage
   * and fires an action to logout the user
   */
  logout(completeLogout) {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
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
            <Link
              to="dashboard"
              className={active === 'dashboard' ? 'active' : ''}
            >My Groups</Link>
          </li>
          <li>
            <Link
              to="new-group"
              className={active === 'create-group' ? 'active' : ''}
            >Create Group</Link>
          </li>
          { showSearchLink ?
            <li>
              <Link
                to={`group/${groupId}/search`}
                className={active === 'search' ? 'active' : ''}
              >
              Update Members</Link>
            </li> : ''}
          <li>
            <Link
              to="/login"
              onClick={() => this.logout(onLogout)}
            >Logout</Link>
          </li>
        </ul>
      </aside>
    );
  }
}

SideMenu.defaultProps = {
  showSearchLink: false,
  groupId: 0,
  active: 'dashboard'
};

SideMenu.propTypes = {
  active: PropTypes.string,
  showSearchLink: PropTypes.bool,
  onLogout: PropTypes.func.isRequired,
  groupId: PropTypes.number
};

export default SideMenu;
