import React from 'react';
import { Form } from './';
import api from '../helpers/api';

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
   * @returns {undefined}
   */
  componentWillMount() {
    const id = this.props.match.params.id;
    api(null, `/api/groups/${id}`, 'GET')
    .then((result) => {
      this.setState({ selectedGroup: result, groupMembers: result.users });
    });
  }

  /**
   * @param {int} page
   * @returns {undefined}
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
   * @returns {undefined} this returns nothing
   * It is called when the "Finish" button is clicked
   * It sends the list of users whose "in-group" status of the
   * selected group needs to be changed
   */
  onFinishClick(event) {
    event.preventDefault();
    api(`usersIds=${JSON.stringify(this.state.selectedUsers)}`, `/api/groups/${this.state.selectedGroup.id}/user/`, 'POST')
    .then((result) => {
      if (result.status < 400 && result.status > 199) {
        history.back();
      }
    });
  }

  /**
   * @param {int} page
   * @returns {undefined} returns nothing
   * only requests for the search results
   * it's called when the search input value changes
   */
  onSearchChange(page = this.state.prevPage + 1) {
    this.setState({ foundUsers: [] });
    if (this.term.value.trim() !== '') {
      api(null,
        `/api/search/${this.state.selectedGroup.id}/${this.term.value.trim()}/${page - 1}`,
        'GET')
        .then(
        (searchData) => {
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
        }
      );
    }
  }

  /**
   * @returns {undefined} this method doesn't return anything
   * It forms the array of users whose "in-group" status need to
   * be changed
   *
   * @param {object} user
   */
  onSelectUser(user) {
    let alreadySelected = false;
    this.state.selectedUsers.map((sUser) => {
      if (sUser.id === user.id) {
        alreadySelected = true;
        return sUser;
      }
      return false;
    });
    if (!alreadySelected) {
      const selectedUsers = this.state.selectedUsers.concat(user);
      this.setState({ selectedUsers });
      if (!this.isAdmin()) {
        alert('Only an Admin can do that');
        return;
      }
    } else {
      const users = this.state.selectedUsers.filter(sUser => sUser.id !== user.id);
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
    if (this.state.selectedGroup.admin === JSON.parse(sessionStorage.getItem('user')).userData.id) {
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
    this.state.groupMembers.map((member) => {
      members.push(member.username);
    });

    return (
      <Form title={ title } active='search' showSideMenu={true}>
        <div className='input-field'>
          <input type='text' id='search' onChange={ () => this.onSearchChange() } ref={(input) => { this.term = input; }}/>
          <label for='search'>Search by username</label>
        </div>
        <div className='search-results'>
          {this.state.foundUsers.map(fUser =>
            <span key={fUser.id}
            onClick={() => this.onSelectUser(fUser)}
            className={fUser.ingroup ? 'ingroup' : ''}>@{fUser.username}</span>
          )}
          <div class="search-pages">
            <span onClick={() => this.onPageChange('prev')} className="search-prev">Prev</span><span>{this.state.prevPage + 1}</span><span onClick={() => this.onPageChange('next')} className="search-next">Next</span></div>
        </div>
        <button className='waves-effect waves-light btn action-btn'
          onClick={this.onFinishClick}>Finish</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
        href={`#/group/${this.state.selectedGroup.id}`}>Cancel</a>
      </Form>);
  }
}

export default Search;
