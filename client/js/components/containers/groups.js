import React from 'react';
import { connect } from 'react-redux';
import changeSelectedGroup from '../../actions/changeSelectedGroup';

class Groups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { groups } = this.props;
    console.log('Groups: ', groups);
    return (
    <div>
      {
        groups.map((group) => {
          return <a className="group-card" href={`#group/${group.id}`}
          key={group.id}>
            <div className="group-name">
              { group.unread === 0 ? '' :
              <span className="right group-unread-count badge-danger">{group.unread}</span>
              }
              <span>{group.name}</span>
            </div>
          </a>;
        }, this)
      }
    </div>);
  }
}

export default Groups;
