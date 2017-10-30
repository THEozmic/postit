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
      error: '',
      errorMessage: '',
      isButtonDisabled: false
    };
  }

  /**
   * @returns {void}
   * @param {Object} event
  */
  onChange(event) {
    if (event.target.value.length > 20) {
      this.setState({
        errorMessage: `Group ${event.target.name} too long`
      });
    } else {
      this.setState({
        errorMessage: ''
      });
    }
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
    if (this.name.value === '') {
      this.setState({ error: 'Error: One or more fields are empty' });
      return;
    }
    if (this.name.value.length > 20) {
      return this.setState({ errorMessage: 'Group name too long' });
    }
    if (this.desc.value.length > 20) {
      return this.setState({ errorMessage: 'Group description too long' });
    }

    this.setState({ isButtonDisabled: true });
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
              name="name"
              type="text"
              id="name"
              ref={(input) => { this.name = input; }}
              onFocus={() => this.onFocus}
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
              ref={(input) => { this.desc = input; }}
              onFocus={() => this.onFocus}
              onChange={event => this.onChange(event)}
              maxLength="21"
            />
            <label htmlFor="desc">Description</label>
          </div>
          { this.state.errorMessage === '' ? '' :
          <div
            className="red card"
          >{this.state.errorMessage}</div>}
          <button
            className="waves-effect waves-light btn action-btn"
            id="createGroup"
            disabled={this.state.isButtonDisabled}
            onClick={event => this.onCreateGroup(event)}
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
