import React from 'react';
import Form from '../presentational/form';
import api from '../helpers/api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onFinishClick = this.onFinishClick.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.state = {
      foundUsers: [],
      selectedUsers: [],
      nextPage: 2,
      prevPage: 0,
      selectedGroup: {},
      groupMembers: []
    };
  }

  componentWillMount() {
    const id = location.href.split('/')[location.href.split('/').length - 2];
    api(null, `/api/groups/${id}`, 'GET')
    .then((result) => {
      this.setState({ selectedGroup: result, groupMembers: result.users });
    });
  }

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

  onFinishClick(e) {
    e.preventDefault();
    api(`usersIds=${JSON.stringify(this.state.selectedUsers)}`, `/api/groups/${this.state.selectedGroup.id}/user/`, 'POST')
    .then((result) => {
      if (result.status < 400 && result.status > 199) {
        history.back();
      }
    });
  }

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
   *
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
   *
   */
  render() {
    // if (this.selectedGroup.name === '' || this.selectedGroup.name === undefined) {
    //   location.hash = '#dashboard';
    //   return null;
    // }
    let action = 'Add users to ';
    console.log(this.state.selectedGroup);
    if (this.state.selectedGroup.admin === JSON.parse(sessionStorage.getItem('user')).userData.id) {
      action = 'Add or Remove users from ';
    }
    const title = [`${action}`,
      <span style={{ color: '#0275d8' }}>{ this.state.selectedGroup.name }</span>,
      ' group'];

    const members = [];
    this.state.groupMembers.map((member) => {
      console.log(member.username);
      members.push(member.username);
    });
    console.log(members);

    return (
      <Form title={ title } active='search' showSideMenu={true}>
        <div className='input-field'>
          <input type='text' id='search' onChange={ () => this.onSearchChange() } ref={(input) => { this.term = input; }}/>
          <label for='search'>Search by username</label>
        </div>
        {/* <div style={{ color: '#252830' }}>
          Group Members: @{ members.join(', @') }
        </div> */}
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
