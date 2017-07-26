import React from 'react';
import { Footer, Header } from './';

const Search = () =>
<div>
  <Header/>
    <section className="container">
      <h5>Add users to a group</h5>
      <div className='row'>
        <div className='col s12 m6'>
          <form className='form'>
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
          </form>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

export default Search;
