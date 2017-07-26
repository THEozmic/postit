import React from 'react';

const Groups = () =>
<div>
  <a className="group-card" href="#group">
    <div className="group-name">
      <span className="right group-unread-count badge-danger">5</span>
      <span>Andela Bootcampers</span>
    </div>
  </a>
  <a className="group-card" href="#group">
    <div className="group-name">
      <span>Lagos Google Developer Experts</span>
    </div>
  </a>
  <a className="group-card" href="#group">
    <div className="group-name">
      <span className="right group-unread-count badge-danger">1</span>
      <span>Charles Obi Estate Members</span>
    </div>
  </a>
  <a className="group-card" href="#group">
    <div className="group-name">
      <span className="right group-unread-count badge-danger">3</span>
      <span>CYON Members</span>
    </div>
  </a>
  <a className="group-card" href="#group">
    <div className="group-name">
      <span className="right group-unread-count badge-danger">99+</span>
      <span>PHC Devs Connect</span>
    </div>
  </a>
</div>;

export default Groups;
