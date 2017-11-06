/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { Register } from '../../components/containers/Register';
import dummy from '../__mocks__/dummy';

jest.mock('../../helpers/setToken');
jest.mock('react-router-dom');

describe('Given Register component is mounted', () => {
  let treeShallow, treeMount;
  const props = {
    onLogout: dummy.func,
    messages: dummy.emptyArray,
    match: dummy.match,
    apiRegisterUser: dummy.promiseFuncReject,
    selectedGroup: dummy.emptyObject,
    apiGetCurrentUser: dummy.func
  };
  const onFocus = dummy.func;
  const onRegisterUser = sinon.spy();
  beforeEach(() => {
    treeShallow = shallow(<Register {...props} />);
    treeMount = mount(<Register {...props} />);
  });

  it('should render properly', () => {
    expect(treeShallow.length).toBe(1);
  });

  it('should call onFocus method when username field gains focus', () => {
    treeMount.find('#username').simulate('focus', onFocus());
    expect(onFocus.calledOnce).toBe(true);
  });

  it('should update state when the onChange method is called',
  () => {
    treeMount.find('#username').simulate('change', { target:
      { value: dummy.string, name: 'username' } });
    expect(treeMount.state('username')).toEqual(dummy.string);
  });

  it('should call onRegisterUser when register button is clicked', () => {
    const onRegisterUserSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <Register onRegisterUser={onRegisterUserSpy} {...props} />);
    const button = component.find('#login').at(1);
    button.simulate('click', onRegisterUserSpy());
    component.instance().onRegisterUser({ preventDefault: () => {} });
    expect(onRegisterUserSpy.calledOnce).toEqual(true);
  });

  it('should have error message when login button is clicked with empty fields',
  () => {
    const onRegisterUserSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <Register onRegisterUser={onRegisterUserSpy} {...props} />);
    const button = component.find('#login').at(1);
    button.simulate('click', onRegisterUserSpy());
    component.instance().onRegisterUser({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toEqual('Error: One or more fields are empty');
  });

  it('should clear error message when input field gain focus', () => {
    treeMount.find('#username').simulate('focus', onFocus());
    expect(treeMount.state('errorMessage')).toEqual('');
  });

  it('should not show error when form is submitted with filled fields',
  () => {
    const onRegisterUserSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <Register onRegisterUser={onRegisterUserSpy} {...props} />);
    component.find('#username').simulate('change', { target:
    { value: dummy.string, name: 'username' } });
    component.find('#password').simulate('change', { target:
    { value: dummy.string, name: 'password' } });
    component.find('#phone').simulate('change', { target:
    { value: dummy.phone, name: 'phone' } });
    component.find('#email').simulate('change', { target:
    { value: dummy.email, name: 'email' } });
    const button = component.find('#register').at(1);
    button.simulate('click', onRegisterUserSpy());
    component.instance().onRegisterUser({ preventDefault: () => {} });
    expect(component.state('errorMessage')).not
    .toEqual('Error: One or more fields are empty');
  });
});
