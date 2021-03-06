/* global Materialize */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from './Form';
import {
  apiFetchGroup,
  apiSearch,
  apiUpdateMembers,
  stopSearch } from '../../actions/';

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
    this.onChange = this.onChange.bind(this);
    this.showConfirmMessage = this.showConfirmMessage.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      foundUsers: [],
      selectedUsers: [],
      selectedGroup: {},
      groupMembers: [],
      currentPage: 0,
      totalPages: 1,
      prevSearchQuery: '',
      noUsersFound: false,
      searchTerm: '',
      updateConfirmed: false,
      confirmMessage: '',
      buttonText: 'Finish',
      showCancelBtn: false,
      errorMessage: '',
      disableBtn: false
    };
  }

  /**
   * @returns {void}
   */
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.apiFetchGroup(id, false);
  }

  /**
   * @returns {void}
   * @param {object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedGroup.users !== undefined) {
      this.setState({
        groupMembers: nextProps.selectedGroup.users
      });
    }

    if (nextProps.searchResults.status === 'complete') {
      this.props.stopSearch();
      location.href = `/#/group/${nextProps.selectedGroup.id}`;
      Materialize.toast('Group members list updated!', 4000);
    }

    if (nextProps.searchResults.pages !== undefined &&
      this.state.searchTerm !== '') {
      const searchResults = nextProps.searchResults;
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
    if (this.state.selectedUsers.length !== 0) {
      if (this.state.confirmMessage !== '') {
        const selectedUsers = JSON.stringify(this.state.selectedUsers);
        this.setState({ disableBtn: true });
        this.props.apiUpdateMembers(selectedUsers, this.props.selectedGroup.id);
      } else {
        this.showConfirmMessage();
      }
    } else {
      if (this.state.searchTerm.trim() === ''
      && this.state.foundUsers.length === 0) {
        this.setState({
          errorMessage: 'Please search for a user or click cancel to go back'
        });
        return;
      }
      this.setState({
        errorMessage:
        'Please click on a username to add or remove the user from this group'
      });
    }
  }

  /**
   * @returns {void}
   */
  onCancelClick() {
    this.setState({
      confirmMessage: '',
      buttonText: 'Finish',
      showCancelBtn: false
    });
  }

  /**
   * This function changes intial states based on onChange events
   * @param {object} event [the events object parameter]
   * @return {[type]}      [description]
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value },
      this.onSearchChange);
  }

  /**
  *  @return {void}
   * This method is called when the user focuses on the input,
   * if there's an error relating to that input, it clears it.
  */
  onFocus() {
    this.setState({ errorMessage: '' });
  }

  /**
   * @param {string} nav
   * @returns {void} returns nothing
   * only requests for the search results
   * it's called when the search input value changes
   */
  onSearchChange(nav) {
    this.setState({ noUsersFound: false });
    if (this.state.searchTerm.trim() !== '') {
      if (this.state.currentPage === 0) {
        this.setState({
          currentPage: 1
        });
        this.makeSearch(0);
        this.setState({
          prevSearchQuery: this.state.searchTerm.trim()
        });
        return;
      }

      if (this.state.prevSearchQuery !== this.state.searchTerm.trim()) {
        this.setState({
          currentPage: 1
        });
        this.makeSearch(0);
        this.setState({
          prevSearchQuery: this.state.searchTerm.trim()
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
        prevSearchQuery: this.state.searchTerm.trim()
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
    this.setState({ errorMessage: '' });
    let selectedUsers = this.state.selectedUsers;
    const isFound = selectedUsers.find(sUser => sUser.id === user.id);
    if (!this.isAdmin() && user.ingroup === true &&
    typeof isFound === 'undefined') {
      Materialize.toast('Only an Admin can do that', 4000);
      return;
    }
    if (typeof isFound !== 'undefined') {
      selectedUsers = selectedUsers.filter(sUser => sUser.id === user.id);
    } else {
      selectedUsers.push(user);
    }
    user.ingroup = !user.ingroup;
    let foundUsers = this.state.foundUsers;
    foundUsers = foundUsers.filter(sUser => sUser.id !== user.id);
    foundUsers.push(user);
    this.setState({ foundUsers });
    this.setState({ selectedUsers });
  }

   /**
   * @returns {void}
   */
  showConfirmMessage() {
    this.setState({
      confirmMessage: 'Are you sure you want to update users in this group?',
      buttonText: 'Yes',
      showCancelBtn: true,
      errorMessage: ''
    });
  }

  /**
   * @return {void}
   * @param {int} page
   */
  makeSearch(page) {
    this.props.apiSearch(this.props.selectedGroup.id, this.state.searchTerm,
      page);
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
          { this.state.confirmMessage === '' ?
            <div>
              <div className="input-field">
                <input
                  type="text"
                  id="search"
                  name="searchTerm"
                  onChange={this.onChange}
                  value={this.state.searchTerm}
                  onFocus={this.onFocus}
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
            </div>
          :
            <div className="blue-text text-darken-2 section">
              {this.state.confirmMessage}</div>
          }
          { this.state.errorMessage === '' ? '' :
          <div
            className="red card"
          >{this.state.errorMessage}</div>}
          <button
            className="waves-effect waves-light btn action-btn"
            onClick={this.onFinishClick}
            disabled={this.state.disableBtn}
          >{this.state.buttonText}</button>
          { this.state.showCancelBtn ?
            <button
              className="waves-effect waves-teal red btn action-btn"
              onClick={this.onCancelClick}
            >No</button>
          : '' }
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
  user: PropTypes.object,
  stopSearch: PropTypes.func.isRequired
};

Search.defaultProps = {
  user: {}
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
  dispatch(apiUpdateMembers(selectedUsers, groupId)),
  stopSearch: () =>
  dispatch(stopSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
