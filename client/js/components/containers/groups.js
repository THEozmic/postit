import React from 'react';
import { connect } from 'react-redux';
import changeSelectedGroup from '../../actions/changeSelectedGroup';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSelectedGroup = this.onChangeSelectedGroup.bind(this);
    this.groupSaved = false;
  }

  onChangeSelectedGroup(group, e) {
    // save group id
    if (!this.groupSaved) {
      this.props.onChangeSelectedGroup(group);
      console.log(e);
      this.groupSaved = true;
    }
  }

  render() {
    const { groups } = this.props;
    console.log('Groups: ', groups);
    return (
    <div>
      {
        groups.map((group) => {
          return <a className="group-card" href="#group"
          onClick={e => this.onChangeSelectedGroup(group, e)} key={group.id}>
            <div className="group-name">
              <span className="right group-unread-count badge-danger">{group.unread}</span>
              <span>{group.name}</span>
            </div>
          </a>;
        }, this)
      }
    </div>);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSelectedGroup: group => dispatch(changeSelectedGroup(group)),
  };
};


export default connect(null, mapDispatchToProps)(Groups);
