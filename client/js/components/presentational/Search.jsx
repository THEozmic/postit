import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from './';
import { apiFetchGroup, apiSearch, apiUpdateMembers } from '../../actions/';

/**
 * The component for the search page
 */
class Search extends React.Component {

  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onFinishClick = this.onFinishClick.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.isAdmin = this.isAdmin.bind(this);
    this.state = {
      foundUsers: [],
      selectedUsers: [],
      nextPage: 2,
      prevPage: 0,
      selectedGroup: {},
      groupMembers: []
    };
  }

  /**
   * @returns {void}
   */
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.apiFetchGroup(id, false)
    .then(() => {
      this.setState({
        selectedGroup: this.props.selectedGroup,
        groupMembers: this.props.selectedGroup.users
      });
    });
  }

  /**
   * @param {int} page
   * @returns {void}
   * This method simply updates the state of the "next" and "prev"
   * buttons when they are clicked
   */
  onPageChange(page) {
    if (this.term.value.trim() !== '') {
      if (page === 'prev') {
        if (this.state.prevPage > 0) {
          this.onSearchChange(this.state.prevPage);
          this.setState({ nextPage: this.state.nextPage - 1 });
          this.setState({ prevPage: this.state.prevPage - 1 });
        }
      } else {
        this.onSearchChange(this.state.nextPage);
        this.setState({ nextPage: this.state.nextPage + 1 });
        this.setState({ prevPage: this.state.prevPage + 1 });
      }
    }
  }

  /**
   * @param {object} event
   * @returns {void} this returns nothing
   * It is called when the "Finish" button is clicked
   * It sends the list of users whose "in-group" status of the
   * selected group needs to be changed
   */
  onFinishClick(event) {
    event.preventDefault();
    const selectedUsers = JSON.stringify(this.state.selectedUsers);
    this.props.apiUpdateMembers(selectedUsers, this.props.selectedGroup.id)
    .then(() => {
      history.back();
      Materialize.toast('Group members list updated!', 4000);
    });
  }

  /**
   * @param {int} page
   * @returns {void} returns nothing
   * only requests for the search results
   * it's called when the search input value changes
   */
  onSearchChange(page = this.state.prevPage + 1) {
    this.setState({ foundUsers: [] });
    if (this.term.value.trim() !== '') {
      this.props.apiSearch(this.props.selectedGroup.id, this.term.value, page)
      .then(() => {
        const searchData = this.props.searchData;
        const nUsers = searchData.users.map((user) => {
          this.state.selectedUsers.map((sUser) => {
            if (sUser.id === user.id) {
              user.ingroup = true;
            }
            return searchData;
          });
          return user;
        });
        this.setState({ foundUsers: nUsers });
      });
    }
  }

  /**
   * @returns {void} this method doesn't return anything
   * It forms the array of users whose "in-group" status need to
   * be changed
   *
   * @param {object} event
   * @param {object} user
   */
  onSelectUser(event, user) {
    event.preventDefault();
    let alreadySelected = false;
    this.state.selectedUsers.map((sUser) => {
      if (sUser.id === user.id) {
        alreadySelected = true;
        return sUser;
      }
      return false;
    });
    if (!alreadySelected) {
      if (!this.isAdmin()) {
        alreadySelected = false;
        Materialize.toast('Only an Admin can do that', 4000);
        return;
      }
      const selectedUsers = this.state.selectedUsers.concat(user);
      this.setState({ selectedUsers });
    } else {
      const users = this.state.selectedUsers
      .filter(sUser => sUser.id !== user.id);
      this.setState({ selectedUsers: users });
    }

    // flip the ingroup value
    let foundUsers = Object.assign([], this.state.foundUsers);
    foundUsers = foundUsers.map((fUser) => {
      if (fUser.id === user.id) {
        fUser.ingroup = !fUser.ingroup;
      }
      return fUser;
    });
    this.setState({ foundUsers });
  }

  /**
   * @returns {boolean} true or false based on if the "current user" is
   * the admin of the selected group
   */
  isAdmin() {
    if (this.state.selectedGroup.admin ===
      JSON.parse(sessionStorage.getItem('user')).id) {
      return true;
    }
    return false;
  }

  /**
   * @returns {JSX} This returns the JSX for teh Search page DOM
   */
  render() {
    // Here we are doing to dynamic form title,
    // depending on if the user is an admin
    let action = 'Add users to ';
    if (this.isAdmin()) {
      action = 'Add or Remove users from ';
    }
    const title = { action: `${action}`,
      group: this.state.selectedGroup.name,
      last: ' group' };

    const members = [];
    this.state.groupMembers.map(member => members.push(member.username));
    return (
      <Form title={title} active="search" showSideMenu>
        <div>
          <div className="input-field">
            <input
              type="text"
              id="search"
              onChange={() => this.onSearchChange()}
              ref={(input) => { this.term = input; }}
            />
            <label htmlFor="search">Search by username</label>
          </div>
          <div className="search-results">
            {this.state.foundUsers.map(fUser =>
              (
                <button
                  key={fUser.id}
                  onClick={event => this.onSelectUser(event, fUser)}
                  className={fUser.ingroup ? 'ingroup' : ''}
                >{fUser.ingroup ? <span>&#10004; </span> : ''}
                @{fUser.username}</button>)
            )}
            <div className="search-pages">
              <button
                onClick={() => this.onPageChange('prev')}
                className="search-prev"
              >Prev</button>
              <span>{this.state.prevPage + 1}</span>
              <button
                onClick={() => this.onPageChange('next')}
                className="search-next"
              >Next</button>
            </div>
          </div>
          <button
            className="waves-effect waves-light btn action-btn"
            onClick={this.onFinishClick}
          >Finish</button>
          <Link
            className="right waves-effect waves-teal btn-flat action-btn"
            to={`/group/${this.state.selectedGroup.id}`}
          >Cancel</Link>
        </div>
      </Form>);
  }
}

Search.propTypes = {
  match: PropTypes.object.isRequired,
  apiFetchGroup: PropTypes.func.isRequired,
  selectedGroup: PropTypes.object.isRequired,
  apiSearch: PropTypes.func.isRequired,
  searchData: PropTypes.object.isRequired,
  apiUpdateMembers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedGroup: state.selectedGroup,
  searchData: state.search
});

const mapDispatchToProps = dispatch => ({
  apiFetchGroup: (groupId, withMessages) =>
  dispatch(apiFetchGroup(groupId, withMessages)),
  apiSearch: (groupId, searchTerm, page) =>
  dispatch(apiSearch(groupId, searchTerm, page)),
  apiUpdateMembers: (selectedUsers, groupId) =>
  dispatch(apiUpdateMembers(selectedUsers, groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
