import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, SideMenu } from '../presentational';
import { Messages } from './';
import changeSelectedGroupAction from '../../actions/changeSelectedGroup';


const Group = ({ onChangeSelectedGroup }) =>
<div>
  <Header/>
    <section className="page-container container-fluid">
      <div className="container">
        <div className="row">
          <SideMenu ingroup={true} onChangeSelectedGroup={ onChangeSelectedGroup }/>
          <div className="section page-content align-top pl-0 col m7 l8 xl9">
            <h5 className="group-header">Andela Bootcampers</h5>
            <Messages/>
          </div>
        </div>
      </div>
    </section>
  <Footer/>
</div>;

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSelectedGroup: group => dispatch(changeSelectedGroupAction(group))
  };
};

export default connect(null, mapDispatchToProps)(Group);
