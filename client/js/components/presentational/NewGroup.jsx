import React from 'react';
import Form from './Form.jsx';
import api from '../helpers/api';

/**
 * @return {void}
 */
class NewGroup extends React.Component {
  /**
   * @return {void}
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.onCreateGroup = this.onCreateGroup.bind(this);
    this.state = {
      error: '',
      errorMessage: ''
    };
  }
  /**
   * @return {void}
   * @param {event} e
   */
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
    if (this.name.value.length > 30) {
      return this.setState({ errorMessage: 'Group name too long' });
    }
    if (this.name.value.length > 40) {
      return this.setState({ errorMessage: 'Group description too long' });
    }
    api(`name=${this.name.value}&desc=${this.desc.value}`, '/api/groups', 'POST').then(
      (response) => {
        location.hash = '#dashboard';
      }
    );
  }

  /**
   * @return {JSX} JSX
   */
  render() {
    return (
      <Form title='Create a new group' active='create-group' showSideMenu={true} showSearchLink={true}>
        <div className='input-field'>
          <input type='text' id='name' ref={ (input) => { this.name = input; } }/>
          <label for='name'>Name</label>
        </div>
        <div className='input-field'>
          <input type='text' id='desc' ref={ (input) => { this.desc = input; } }/>
          <label for='desc'>Description</label>
        </div>
        { this.state.errorMessage === '' ? '' :
        <div className='red card' style={{ padding: '5px 10px' }}>{this.state.errorMessage}</div>}
        <button className='waves-effect waves-light btn action-btn'
        onClick={this.onCreateGroup}>Create</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
        href='#dashboard'>Cancel</a>
      </Form>
    );
  }
}


export default NewGroup;
