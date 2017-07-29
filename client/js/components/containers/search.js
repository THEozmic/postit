import React from 'react';
import { connect } from 'react-redux';
import Form from '../presentational/form';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.state = {
      foundUsers: [],
      selectedUsers: []
    };
  }

  onSearchChange() {
    const users = [
      { id: 1, username: '@kobi', ingroup: false },
      { id: 2, username: '@sola', ingroup: false },
      { id: 3, username: '@akpan', ingroup: false }];

    this.setState({ foundUsers: users });
  }

  onSelectUser(user) {
    // Remove from selectedUsers list if it exists there
    // or Add to selectedUsers list
    if (this.state.selectedUsers.includes(user)) {
      const users = this.state.selectedUsers.filter(sUser => sUser.id !== user.id);
      this.setState({ selectedUsers: users });
    } else {
      const users = this.state.selectedUsers.concat(user);
      this.setState({ selectedUsers: users });
    }

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
    if (selectedGroup === '') {
      location.hash = 'dashboard';
    }
    const title = `Add users to ${selectedGroup} group`;
    return(
      <Form title={ title }>
        <div className='input-field'>
          <input type='text' id='search' onChange={ this.onSearchChange } ref={(input) => { this.term = input; }}/>
          <label for='search'>Search by username</label>
        </div>
        <div className='search-results'>
          {this.state.foundUsers.map(fUser =>
            <span key={fUser.id}
            onClick={() => this.onSelectUser(fUser)}
            className={fUser.ingroup ? 'ingroup' : ''}>{fUser.username}</span>
          )}
          <div class="search-pages"><a href="#/1" className="search-prev">Prev</a><a href="#/2">2</a><a href="#/3" className="search-next">Next</a></div>
        </div>
        <a className='waves-effect waves-light btn action-btn'
          href='#group'>Finish</a>
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
