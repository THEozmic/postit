/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { NewPassword } from '../../components/containers/NewPassword';
import dummy from '../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given Register component is mounted', () => {
  let treeShallow, treeMount;
  const props = {
    onLogout: dummy.func,
    messages: dummy.emptyArray,
    match: dummy.match,
    user: dummy.user,
    apiResetPassword: dummy.promiseFuncReject,
    selectedGroup: dummy.emptyObject,
  };
  const onFocus = dummy.func;
  const onSubmitPassword = sinon.spy();
  beforeEach(() => {
    treeShallow = shallow(<NewPassword {...props} />);
    treeMount = mount(<NewPassword {...props} />);
  });

  it('should render properly', () => {
    expect(treeShallow.length).toBe(1);
  });

  it('should call onFocus when password field gains focus', () => {
    treeMount.find('#password').simulate('focus', onFocus());
    expect(onFocus.calledOnce).toBe(true);
  });

  it('should update state when the onChange method is called',
  () => {
    treeMount.find('#password').simulate('change', { target:
      { value: 'pass', name: 'password' } });
    expect(treeMount.state('password')).toEqual('pass');
  });

  it('should call onSubmitPassword when change button is clicked', () => {
    const onSubmitPasswordSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    const button = component.find('#login').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(onSubmitPasswordSpy.calledOnce).toEqual(true);
  });

  it('should have error message when submit is clicked with empty fields',
  () => {
    const onSubmitPasswordSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    const button = component.find('#login').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toEqual('Error: One or more fields are empty');
  });

  it('should clear error message when input field gain focus', () => {
    treeMount.find('#username').simulate('focus', onFocus());
    expect(treeMount.state('errorMessage')).toEqual('');
  });

  it('should not show any error when form is submitted with filled fields',
  () => {
    const onSubmitPasswordSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    component.find('#username').simulate('change', { target:
    { value: 'zms', name: 'username' } });
    component.find('#password').simulate('change', { target:
    { value: 'zms', name: 'password' } });
    component.find('#phone').simulate('change', { target:
    { value: '09010101010', name: 'phone' } });
    component.find('#email').simulate('change', { target:
    { value: 'emailx@email.com', name: 'email' } });
    const button = component.find('#register').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.state('errorMessage')).not
    .toEqual('Error: One or more fields are empty');
  });
});
