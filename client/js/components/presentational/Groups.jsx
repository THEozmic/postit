import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Groups Component
 * @method Groups
 * @returns {Object} JSX
 * @param {Object} props
 */
const Groups = ({ groups }) =>
  (
    <div className="groups">
      { groups.length !== 0 ?
        groups.map(group =>
          (<Link
            className="group-card"
            to={`group/${group.id}`}
            key={group.id}
          >
            <div className="group-name">
              <span>{group.name}</span>
              <small className="group-desc">{group.desc}</small>
            </div>
          </Link>)
        ) :
        'You don\'t belong to any group'
      }
    </div>);

Groups.propTypes = {
  groups: PropTypes.array.isRequired
};

export default Groups;
