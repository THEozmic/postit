import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from './Form';
import { apiFetchGroup, apiSearch, apiUpdateMembers } from '../../actions/';

/**
 * Search Page
 * @class Search
 * @extends {React.Component}
 */
export class Search extends React.Component {

  /**
   * Creates an instance of Search
   * @param {any} props -
   * @memberof Search
   */
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
    this.onFinishClick = this.onFinishClick.bind(this);
    this.isAdmin = this.isAdmin.bind(this);
    this.state = {
      foundUsers: [],
      selectedUsers: [],
      selectedGroup: {},
      groupMembers: [],
      currentPage: 0,
      totalPages: 1,
      prevSearchQuery: '',
      noUsersFound: false
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
        groupMembers: this.props.selectedGroup.users
      });
    });
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
      location.href = `/#/group/${this.props.selectedGroup.id}`;
      Materialize.toast('Group members list updated!', 4000);
    });
  }

  /**
   * @param {string} nav
   * @returns {void} returns nothing
   * only requests for the search results
   * it's called when the search input value changes
   */
  onSearchChange(nav) {
    this.setState({ noUsersFound: false });
    if (this.term.value.trim() !== '') {
      if (this.state.currentPage === 0) {
        this.setState({
          currentPage: 1
        });
        this.makeSearch(0);
        this.setState({
          prevSearchQuery: this.term.value.trim()
        });
        return;
      }

      if (this.state.prevSearchQuery !== this.term.value.trim()) {
        this.setState({
          currentPage: 1
        });
        this.makeSearch(0);
        this.setState({
          prevSearchQuery: this.term.value.trim()
        });
        return;
      }

      if (nav === 'prev') {
        if (this.state.currentPage === 1) {
          return;
        }
        this.makeSearch(this.state.currentPage - 2);
        this.setState({
          currentPage: this.state.currentPage - 1
        });
      }

      if (nav === 'next') {
        if (this.state.totalPages === this.state.currentPage) {
          return;
        }
        this.setState({
          currentPage: this.state.currentPage + 1
        });
        this.makeSearch(this.state.currentPage);
      }

      this.setState({
        prevSearchQuery: this.term.value.trim()
      });
    }
    return true;
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
   * @return {void}
   * @param {int} page
   */
  makeSearch(page) {
    this.props.apiSearch(this.props.selectedGroup.id, this.term.value,
      page)
      .then(() => {
        const searchResults = this.props.searchResults;

        // no search results gotten
        // set the current page to zero
        if (searchResults.pages === 0) {
          this.setState({ currentPage: 0, foundUsers: [], noUsersFound: true });
          return;
        }

        // update the totalPages
        this.setState({
          totalPages: searchResults.pages
        });

        // determine who's been selected or not
        const nUsers = searchResults.users.map((user) => {
          this.state.selectedUsers.map((sUser) => {
            if (sUser.id === user.id) {
              user.ingroup = true;
            }
            return searchResults;
          });
          return user;
        });
        this.setState({ foundUsers: nUsers });
      });
  }

  /**
   * @param {object} event
   * @returns {void}
   * This method simply updates the state of the "next"
   * buttons when they are clicked
   */
  nextPage(event) {
    event.preventDefault();
    this.onSearchChange('next');
  }

  /**
   * @param {object} event
   * @returns {void}
   * This method simply updates the state of the "prev"
   * buttons when they are clicked
   */
  prevPage(event) {
    event.preventDefault();
    this.onSearchChange('prev');
  }

  /**
   * @returns {boolean} true or false based on if the "current user" is
   * the admin of the selected group
   */
  isAdmin() {
    if (this.props.selectedGroup.admin ===
      this.props.user.id) {
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
    let action = 'Add members to ';
    if (this.isAdmin()) {
      action = 'Add/Remove members from ';
    }
    const title = { action: `${action}`,
      group: this.props.selectedGroup.name,
      last: ' group' };

    const members = [];
    this.state.groupMembers.map(member => members.push(member.username));
    return (
      <Form
        title={title}
        active="search"
        showSideMenu
        showSearchLink
        onSubmit={event => event.preventDefault()}
      >
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
            {
              this.state.foundUsers.map(fUser =>
              (
                <button
                  key={fUser.id}
                  onClick={event => this.onSelectUser(event, fUser)}
                  className={fUser.ingroup ? 'ingroup' : ''}
                >{fUser.ingroup ? <span>&#10004; </span> : ''}
                @{fUser.username}</button>)
            ) }
            { this.state.noUsersFound ?
            'No users found' : <div className="space" />
            }
            {this.state.foundUsers.length !== 0 ?
              <div className="search-pages">
                <button
                  onClick={event => this.prevPage(event)}
                  className="search-prev"
                >Prev</button>
                <span>
                  {this.state.currentPage}/{this.state.totalPages}
                </span>
                <button
                  onClick={event => this.nextPage(event)}
                  className="search-next"
                >Next</button>
              </div> : ''
            }
          </div>
          <button
            className="waves-effect waves-light btn action-btn"
            onClick={this.onFinishClick}
          >Finish</button>
          <Link
            className="right waves-effect waves-teal btn-flat action-btn"
            to={`/group/${this.props.selectedGroup.id}`}
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
  searchResults: PropTypes.object.isRequired,
  apiUpdateMembers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedGroup: state.selectedGroup,
  searchResults: state.search,
  user: state.user
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
