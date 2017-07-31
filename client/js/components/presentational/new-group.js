import React from 'react';
import Form from './form';
import api from '../helpers/api';

class NewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onCreateGroup = this.onCreateGroup.bind(this);
    this.state = {
      error: ''
    };
  }

  onCreateGroup(e) {
    e.preventDefault();
    if (this.name.value === '') {
      this.setState({ error: 'Error: One or more fields are empty' });
      return;
    }
    if (sessionStorage.getItem('user') === null) {
      location.hash = '#login';
      return;
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
    api(`name=${this.name.value}`, '/api/groups', 'POST', headers).then(
      (response) => {
        console.log(response);
        location.hash = '#dashboard';
      }
    );
  }

  render() {
    return (
      <Form title='Create a new group' active='create-group'>
        <div className='input-field'>
          <input type='text' id='name' ref={ (input) => { this.name = input; } }/>
          <label for='name'>Name</label>
        </div>
        <button className='waves-effect waves-light btn action-btn'
        onClick={this.onCreateGroup}>Create</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
        href='#dashboard'>Cancel</a>
      </Form>
    );
  }
}


export default NewGroup;
