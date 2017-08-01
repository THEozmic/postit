import React from 'react';
import { connect } from 'react-redux';
import Form from '../presentational/form';
import api from '../helpers/api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onFinishClick = this.onFinishClick.bind(this);
    this.state = {
      foundUsers: [],
      selectedUsers: []
    };
  }

  onFinishClick(e) {
    e.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
    api(`users=${JSON.stringify(this.state.selectedUsers)}`, `/api/groups/${this.props.selectedGroup.id}/user/`, 'POST', headers)
    .then(result => console.log('FINISH RESULT:::::', result));
  }

  onSearchChange() {
    if (this.term.value.trim() !== '') {
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      api(null, `/api/search/${this.props.selectedGroup.id}/${this.term.value.trim()}`, 'GET', headers).then(
        (users) => {
          console.log(users);
          const nUsers = users.data.map((user) => {
            this.state.selectedUsers.map((sUser) => {
              if (sUser.id === user.id) {
                user.ingroup = true;
              }
              return users;
            });
            console.log('USER:::>>>>', user);
            return user;
          });
          this.setState({ foundUsers: nUsers });
        }
      );
    }
  }

  onSelectUser(user) {
    // Remove from selectedUsers list if it exists there
    // or Add to selectedUsers list
    let alreadySelected = false;
    this.state.selectedUsers.map((sUser) => {
      if (sUser.id === user.id) {
        alreadySelected = true;
        return sUser;
      }
      return false;
    });
    console.log('ALREADY SELECTED:::::', alreadySelected);
    if (!alreadySelected) {
      const selectedUsers = this.state.selectedUsers.concat(user);
      this.setState({ selectedUsers });
    } else {
      const users = this.state.selectedUsers.filter(sUser => sUser.id !== user.id);
      this.setState({ selectedUsers: users });
    }
    console.log('SELECTED USERS:::::', this.state.selectedUsers.concat(user));

    // flip the ingroup value
    let foundUsers = Object.assign([], this.state.foundUsers);
    console.log(foundUsers);
    foundUsers = foundUsers.map((fUser) => {
      if (fUser.id === user.id) {
        fUser.ingroup = !fUser.ingroup;
      }
      return fUser;
    });
    this.setState({ foundUsers });
  }

  render() {
    const { selectedGroup } = this.props;
    console.log('SELECTED GROUP:::::::', selectedGroup);
    if (selectedGroup.name === '' || selectedGroup.name === undefined) {
      location.hash = '#dashboard';
      return null;
    }

    const title = ['Add users to ',
      <span style={{ color: '#0275d8' }}>{ selectedGroup.name }</span>,
      ' group'];

    return (
      <Form title={ title } active='search' ingroup={true}>
        <h6 style={{ color: '#0275d8' }}>Selected Users: { this.state.selectedUsers.map(user => `${user.id}, `) }</h6>
        <div className='input-field'>
          <input type='text' id='search' onChange={ this.onSearchChange } ref={(input) => { this.term = input; }}/>
          <label for='search'>Search by username</label>
        </div>
        <div className='search-results'>
          {this.state.foundUsers.map(fUser =>
            <span key={fUser.id}
            onClick={() => this.onSelectUser(fUser)}
            className={fUser.ingroup ? 'ingroup' : ''}>@{fUser.username}</span>
          )}
          <div class="search-pages"><a href="#/1" className="search-prev">Prev</a><a href="#/2">2</a><a href="#/3" className="search-next">Next</a></div>
        </div>
        <button className='waves-effect waves-light btn action-btn'
          onClick={this.onFinishClick}>Finish</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
        href='#dashboard'>Cancel</a>
      </Form>);
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGroup: state.selectedGroup
  };
};
export default connect(mapStateToProps, null)(Search);
