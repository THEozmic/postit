import React from 'react';
import { connect } from 'react-redux';
import Form from '../presentational/form';

const Search = ({ selectedGroup }) => {
  if (selectedGroup === '') {
    location.hash = 'dashboard';
  }
  const title = `Add users to ${selectedGroup} group`;
  return (
  <Form title={ title }>
    <div className='input-field'>
      <input type='text' id='search'/>
      <label for='search'>Search by username</label>
    </div>
    <div className='search-results'>
      <span className="selected">michael</span>
      <span>charles</span>
      <span>philip</span>
      <div class="search-pages"><a href="#/1" className="search-prev">Prev</a><a href="#/2">2</a><a href="#/3" className="search-next">Next</a></div>
    </div>
    <a className='waves-effect waves-light btn action-btn'
      href='#group'>Finish</a>
    <a className='right waves-effect waves-teal btn-flat action-btn'
    href='#dashboard'>Cancel</a>
  </Form>);
};

const mapStateToProps = (state) => {
  return {
    selectedGroup: state.selectedGroup
  };
};
export default connect(mapStateToProps, null)(Search);
