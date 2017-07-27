import React from 'react';
import { connect } from 'react-redux';
import Form from './form';
import registerUser from '../../actions/registerUser';

class Register extends React.Component{

  constructor(props) {
    super(props);

    this.onRegisterUser = this.onRegisterUser.bind(this);
  }

  onRegisterUser(e) {
    e.preventDefault();
    let { username, email, phone, password } = this;
    username = username.value;
    const user = {
      username,
      email,
      phone,
      password
    };
    this.props.onRegisterUser(user);
    location.hash = '#dashboard';
  }

  render() {
    return (
      <Form title='Create a new account'>
        <div className='input-field'>
          <input type='text' id='username' ref={(input) => { this.username = input; }}/>
          <label for='username'>Username</label>
        </div>
        <div className='input-field'>
          <input type='email' id='email' ref={(input) => { this.email = input; }}/>
          <label for='email'>Email</label>
        </div>
        <div className='input-field'>
          <input type='text' id='phone' ref={(input) => { this.phone = input; }}/>
          <label for='phone'>Phone</label>
        </div>
        <div className='input-field'>
          <input type='password' id='password' ref={(input) => { this.password = input; }}/>
          <label for='password'>Password</label>
        </div>
        <button
        onClick= { this.onRegisterUser }
        className='waves-effect waves-light btn action-btn'>
        Register</button>
        <a className='right waves-effect waves-teal btn-flat action-btn'
          href='#login'>Login</a>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterUser: user => dispatch(registerUser(user))
  };
};

export default connect(null, mapDispatchToProps)(Register);
