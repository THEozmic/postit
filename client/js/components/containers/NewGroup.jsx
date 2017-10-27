import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from './Form';
import { apiCreateGroup } from '../../actions/user';


/**
 * Create a New Group Page
 * @class NewGroup
 * @extends {React.Component}
 */
export class NewGroup extends React.Component {
  /**
   * Creates an instance of NewGroup
   * @param {any} props -
   * @memberof NewGroup
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
   * @returns {void}
   * @param {object} event
   */
  onCreateGroup(event) {
    event.preventDefault();
    if (this.name.value === '') {
      this.setState({ error: 'Error: One or more fields are empty' });
      return;
    }
    if (this.name.value.length > 30) {
      return this.setState({ errorMessage: 'Group name too long' });
    }
    if (this.desc.value.length > 50) {
      return this.setState({ errorMessage: 'Group description too long' });
    }

    this.props.apiCreateGroup({ name: this.name.value, desc: this.desc.value })
    .then(() => {
      location.href = '/#/dashboard';
      Materialize.toast('Group created!', 4000);
    });
  }

  /**
   * @return {JSX} for NewGroup component
   */
  render() {
    return (
      <Form
        title="Create a new group"
        active="create-group"
        showSideMenu
        showSearchLink={false}
      >
        <div>
          <div className="input-field">
            <input
              type="text"
              id="name"
              ref={(input) => { this.name = input; }}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="desc"
              ref={(input) => { this.desc = input; }}
            />
            <label htmlFor="desc">Description</label>
          </div>
          { this.state.errorMessage === '' ? '' :
          <div
            className="red card"
            style={{ padding: '5px 10px' }}
          >{this.state.errorMessage}</div>}
          <button
            className="waves-effect waves-light btn action-btn"
            id="createGroup"
            onClick={this.onCreateGroup}
          >Create</button>
          <Link
            className="right waves-effect waves-teal btn-flat action-btn"
            to="/dashboard"
          >Cancel</Link>
        </div>
      </Form>
    );
  }
}

NewGroup.propTypes = {
  apiCreateGroup: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  apiCreateGroup: ({ name, desc }) =>
  dispatch(apiCreateGroup({ name, desc }))
});

export default connect(null, mapDispatchToProps)(NewGroup);
