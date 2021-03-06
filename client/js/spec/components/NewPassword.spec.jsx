/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { NewPassword } from '../../components/containers/NewPassword';
import mockData from '../__mocks__/mockData';

jest.mock('react-router-dom');

describe('Given NewPassword component is mounted', () => {
  let treeShallow, treeMount;
  const props = {
    onLogout: mockData.func,
    messages: mockData.emptyArray,
    match: mockData.match,
    user: mockData.user,
    apiResetPassword: sinon.spy(() => Promise
    .reject({ error: { data: { message: mockData.string } } })),
    selectedGroup: mockData.emptyObject,
  };
  const onFocus = mockData.func;
  const onSubmitPassword = sinon.spy();
  let onSubmitPasswordSpy = sinon.stub().resolves({});

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
    onSubmitPasswordSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    const button = component.find('#submitPassword').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(onSubmitPasswordSpy.calledOnce).toEqual(true);
  });

  it('should have error message when submit is clicked with empty fields',
  () => {
    onSubmitPasswordSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    const button = component.find('#submitPassword').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toEqual('Password field is required');
  });

  it('should clear error message when input field gains focus', () => {
    treeShallow.find('#password').simulate('focus', onFocus());
    expect(treeShallow.state('errorMessage'))
    .toEqual('');
  });

  it('should display an error if confirm password field is empty', () => {
    props.match = mockData.matchHash;
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    component.find('#password').simulate('change', { target:
    { value: 'mike', name: 'password' } });
    component.find('#confirmPassword').simulate('change', { target:
    { value: '', name: 'confirmPassword' } });
    const button = component.find('#submitPassword').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toBe('Password Again field is required');
  });

  it('should not show any error when form is submitted with filled fields',
  () => {
    props.match = mockData.matchHash;
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    component.find('#password').simulate('change', { target:
    { value: 'mike', name: 'password' } });
    component.find('#confirmPassword').simulate('change', { target:
    { value: 'mike', name: 'confirmPassword' } });
    const button = component.find('#submitPassword').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toBe('');
  });

  it('should display error if passwords don\'t match', () => {
    props.match = mockData.matchHash;
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    component.find('#password').simulate('change', { target:
    { value: 'mike', name: 'password' } });
    component.find('#confirmPassword').simulate('change', { target:
    { value: 'no match', name: 'confirmPassword' } });
    const button = component.find('#submitPassword').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toEqual('Passwords don\'t match.');
  });

  it('should display error if hash is not in the url', () => {
    props.match.params.hash = undefined;
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    component.find('#password').simulate('change', { target:
    { value: 'mike', name: 'password' } });
    component.find('#confirmPassword').simulate('change', { target:
    { value: 'mike', name: 'confirmPassword' } });
    const button = component.find('#submitPassword').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toEqual('Hash not given.');
  });

  it('should not change message props if api call to ' +
  'reset password is not successful',
  () => {
    props.match.params.hash = '';
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    component.find('#password').simulate('change', { target:
    { value: mockData.string, name: 'password' } });
    component.find('#confirmPassword').simulate('change', { target:
    { value: mockData.string, name: 'confirmPassword' } });
    const button = component.find('#submitPassword').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.instance().props.user.message).not
    .toEqual('Password Reset Successful');
  });

  it('should not call reset password if buttonText is set to "Okay"',
  () => {
    props.apiResetPassword = sinon.spy(() => Promise
    .reject({ error: { data: { message: mockData.string } } }));
    props.user.buttonText = mockData.buttonText;
    props.match.params.hash = '';
    const component = shallow(
      <NewPassword onSubmitPassword={onSubmitPasswordSpy} {...props} />);
    component.find('#password').simulate('change', { target:
    { value: mockData.string, name: 'password' } });
    component.find('#confirmPassword').simulate('change', { target:
    { value: mockData.string, name: 'confirmPassword' } });
    const button = component.find('#submitPassword').at(1);
    button.simulate('click', onSubmitPasswordSpy());
    component.instance().onSubmitPassword({ preventDefault: () => {} });
    expect(component.instance().props.apiResetPassword.called).toEqual(false);
  });
});
