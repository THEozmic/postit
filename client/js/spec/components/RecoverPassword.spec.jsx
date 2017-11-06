/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { RecoverPassword } from '../../components/containers/RecoverPassword';
import dummy from '../../../../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given RecoverPassword component is mounted', () => {
  let treeShallow, treeMount;
  const props = {
    onLogout: dummy.func,
    messages: dummy.emptyArray,
    match: dummy.match,
    user: dummy.user,
    apiRequestPassword: dummy.promiseFuncReject,
    selectedGroup: dummy.emptyObject,
  };
  const onFocus = dummy.func;
  const onSubmitPassword = sinon.spy();
  beforeEach(() => {
    treeShallow = shallow(<RecoverPassword {...props} />);
    treeMount = mount(<RecoverPassword {...props} />);
  });

  it('should render properly', () => {
    expect(treeShallow.length).toBe(1);
  });

  it('should call onFocus when password field gains focus', () => {
    treeMount.find('#email').simulate('focus', onFocus());
    expect(onFocus.calledOnce).toBe(true);
  });

  it('should update state when the onChange method is called',
  () => {
    treeMount.find('#email').simulate('change', { target:
      { value: dummy.email, name: 'email' } });
    expect(treeMount.state('email')).toEqual(dummy.email);
  });

  it('should clear error message when input field gain focus', () => {
    treeShallow.find('#email').simulate('focus', onFocus());
    expect(treeShallow.state('errorMessage'))
    .toEqual('');
  });

  it('should display an error if email field is empty', () => {
    const onSendSpy = sinon.spy(() => new Promise(() => {}));
    props.apiResetPassword = dummy.promiseFunc;
    props.match = dummy.matchHash;
    const component = shallow(
      <RecoverPassword onSend={onSendSpy} {...props} />);
    component.find('#email').simulate('change', { target:
    { value: '', name: 'email' } });
    const button = component.find('#submitEmail').at(1);
    button.simulate('click', onSendSpy());
    component.instance().onSend({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toBe('Please provide an email');
  });

  it('should display an error if email is invalid', () => {
    const onSendSpy = sinon.spy(() => new Promise(() => {}));
    props.apiResetPassword = dummy.promiseFunc;
    props.match = dummy.matchHash;
    const component = shallow(
      <RecoverPassword onSend={onSendSpy} {...props} />);
    component.find('#email').simulate('change', { target:
    { value: dummy.string, name: 'email' } });
    const button = component.find('#submitEmail').at(1);
    button.simulate('click', onSendSpy());
    component.instance().onSend({ preventDefault: () => {} });
    expect(component.state('errorMessage'))
    .toBe('Invalid email');
  });

  it('should call request password of email is valid', () => {
    const onSendSpy = sinon.spy(() => new Promise(() => {}));
    props.apiRequestPassword = dummy.promiseFunc;
    props.match = dummy.matchHash;
    const component = shallow(
      <RecoverPassword onSend={onSendSpy} {...props} />);
    component.find('#email').simulate('change', { target:
    { value: dummy.email, name: 'email' } });
    const button = component.find('#submitEmail').at(1);
    button.simulate('click', onSendSpy());
    component.instance().onSend({ preventDefault: () => {} });
    expect(component.instance().props.apiRequestPassword.called).toEqual(true);
  });
});
