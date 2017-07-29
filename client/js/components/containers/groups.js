import React from 'react';

const Groups = ({ groups }) =>
<div>
  {
    groups.map((group) => {
      return <a className="group-card" href="#group" key={group.id}>
        <div className="group-name">
          <span className="right group-unread-count badge-danger">{group.unread}</span>
          <span>{group.name}</span>
        </div>
      </a>;
    }, this)
  }
</div>;

export default Groups;
