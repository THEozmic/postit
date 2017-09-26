import React from 'react';
import PropTypes from 'prop-types';

/**
 * Groups component
 * @returns {JSX} for Groups component
 * @param {*} props
 */
const Groups = ({ groups }) =>
  (
    <div>
      { groups.length !== 0 ?
        groups.map(group =>
          (<a
            className="group-card"
            href={`#group/${group.id}`}
            key={group.id}
          >
            <div className="group-name">
              <span>{group.name}</span>
              <small className="group-desc">{group.desc}</small>
            </div>
          </a>)
        ) :
        'You don\'t belong to any group'
      }
    </div>);

export default Groups;
