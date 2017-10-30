import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * SideMenu Component
 * @class SideMenu
 * @extends {React.Component}
 */
export class SideMenu extends React.Component {

  /**
   * @param {function} completeLogout
   * @returns {void}
   * This method removes the user token from localStorage
   * and fires an action to logout the user
   */
  logout(completeLogout) {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    completeLogout();
  }

  /**
   * @returns {JSX} the JSX for the side menu component
   */
  render() {
    const {
      onLogout,
      groupId } = this.props;

    return (
      <aside className="left dashboard-menu pr-3">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className={this.props.active === 'dashboard' ? 'active' : ''}
            >My Groups</Link>
          </li>
          <li>
            <Link
              to="/new-group"
              className={this.props.active === 'create-group' ? 'active' : ''}
            >Create Group</Link>
          </li>
          { this.props.showSearchLink ?
            <li>
              <Link
                to={`/group/${groupId}/search`}
                className={this.props.active === 'search' ? 'active' : ''}
              >
             Add/Remove Members</Link>
            </li> : ''}
          <li>
            <Link
              className="logout"
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
