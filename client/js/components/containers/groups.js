import React from 'react';
import { connect } from 'react-redux';
import changeSelectedGroup from '../../actions/changeSelectedGroup';

class Groups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { groups } = this.props;
    return (
    <div>
      { groups.length !== 0 ?
        groups.map(group =>
          <a className="group-card" href={`#group/${group.id}`}
          key={group.id}>
            <div className="group-name">
               { group.count === 0 ? '' :
              <span className="right group-unread-count badge-danger">{group.count}</span>
              }
              <span>{group.name}</span>
              <small>{group.desc}</small>
            </div>
          </a>
        ) :
        'You don\'t belong to any group'
      }
    </div>);
  }
}

export default Groups;
