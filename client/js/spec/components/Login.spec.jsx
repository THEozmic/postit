/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { Login } from '../../components/containers/Login';
import dummy from '../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given Login component is mounted', () => {
  let treeShallow, treeMount;
  const props = {
    onLogout: dummy.func,
    messages: dummy.emptyArray,
    match: dummy.match,
    apiLoginUser: dummy.promiseFunc,
    selectedGroup: dummy.emptyObject,
  };
  const onFocus = dummy.func;
  const onLoginUser = sinon.spy();
  beforeEach(() => {
    treeShallow = shallow(<Login {...props} />);
    treeMount = mount(<Login {...props} />);
  });

  it('should render properly', () => {
    expect(treeShallow.length).toBe(1);
  });

  it('should call onFocus when username field gains focus', () => {
    treeMount.find('#username').simulate('focus', onFocus());
    expect(onFocus.calledOnce).toBe(true);
  });

  it('should update state when the onChange method is called',
  () => {
    treeMount.find('#username').simulate('change', { target:
      { value: 'mike', name: 'username' } });
    expect(treeMount.state('username')).toEqual('mike');
  });

  it('should call onLoginUser when login button is clicked', () => {
    const onLoginUserSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <Login onLoginUser={onLoginUserSpy} {...props} />);
    const button = component.find('#login').at(1);
    button.simulate('click', onLoginUserSpy());
    component.instance().onLoginUser({ preventDefault: () => {} });
    expect(onLoginUserSpy.calledOnce).toEqual(true);
  });

  it('should have error message when login button is clicked with empty fields',
  () => {
    const onLoginUserSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <Login onLoginUser={onLoginUserSpy} {...props} />);
    const button = component.find('#login').at(1);
    button.simulate('click', onLoginUserSpy());
    component.instance().onLoginUser({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toEqual('Error: One or more fields are empty');
  });

  it('should clear error message when input field gain focus', () => {
    treeMount.find('#username').simulate('focus', onFocus());
    expect(treeMount.state('errorMessage')).toEqual('');
  });

  it('should not show any error when form is submitted with filled fields',
  () => {
    const onLoginUserSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <Login onLoginUser={onLoginUserSpy} {...props} />);
    component.find('#username').simulate('change', { target:
    { value: 'mike', name: 'username' } });
    component.find('#password').simulate('change', { target:
    { value: 'mike', name: 'password' } });
    const button = component.find('#login').at(1);
    button.simulate('click', onLoginUserSpy());
    component.instance().onLoginUser({ preventDefault: () => {} });
    expect(component.state('errorMessage')).not
    .toEqual('Error: One or more fields are empty');
  });
});
