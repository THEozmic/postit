/* global Materialize */
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
    this.state = {
      errorMessage: '',
      isButtonDisabled: false,
      name: '',
      description: ''
    };
    this.onFocus = this.onFocus.bind(this);
    this.onCreateGroup = this.onCreateGroup.bind(this);
  }

  /**
   * @returns {void}
   * @param {Object} event
  */
  onChange(event) {
    if (event.target.value.length > 20) {
      this.setState({
        errorMessage: `Group ${event.target.name} text limit reached!`
      });
    } else {
      this.setState({
        errorMessage: ''
      });
    }
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @returns {void}
   * This method is called when the user focuses on the input,
   * if there's an error relating to that input, it clears it.
   */
  onFocus() {
    this.setState({ errorMessage: '' });
  }

  /**
   * @returns {void}
   * @param {object} event
   */
  onCreateGroup(event) {
    event.preventDefault();
    if (this.state.name === '') {
      this.setState({ error: 'Error: One or more fields are empty' });
      return;
    }
    if (this.state.name.length > 20) {
      return this.setState({ errorMessage: 'Group name too long' });
    }
    if (this.state.description.length > 20) {
      return this.setState({ errorMessage: 'Group description too long' });
    }

    this.setState({ isButtonDisabled: true });
    this.props.apiCreateGroup({
      name: this.state.name,
      desc: this.state.description
    })
    .then(() => {
      Materialize.toast('Group created!', 4000);
      location.href = '/#/dashboard';
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
              name="name"
              type="text"
              id="name"
              value={this.state.name}
              onFocus={this.onFocus}
              onChange={event => this.onChange(event)}
              maxLength="21"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input
              name="description"
              type="text"
              id="desc"
              value={this.state.description}
              onFocus={this.onFocus}
              onChange={event => this.onChange(event)}
              maxLength="21"
            />
            <label htmlFor="description">Description</label>
          </div>
          { this.state.errorMessage === '' ? '' :
          <div
            className="red card"
          >{this.state.errorMessage}</div>}
          <button
            className="waves-effect waves-light btn action-btn"
            id="createGroup"
            disabled={this.state.isButtonDisabled}
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
