/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { NewGroup } from '../../components/containers/NewGroup';
import dummy from '../../../../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given NewGroup component is mounted', () => {
  const props = {
    messages: dummy.emptyArray,
    groupId: dummy.number,
    apiCreateGroup: dummy.promiseFunc
  };
  const onFocus = dummy.func;
  const tree = mount(<NewGroup {...props} />);
  it('should render self and components properly', () => {
    expect(tree.exists()).toBe(true);
    expect(tree.find('form').exists()).toBe(true);
  });

  it('should call onCreateGroup if create group button is clicked', () => {
    const onCreateGroupSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewGroup onCreateGroup={onCreateGroupSpy} {...props} />);
    const button = component.find('#createGroup').at(1);
    button.simulate('click', onCreateGroupSpy());
    component.instance().onCreateGroup({ preventDefault: () => {} });
    expect(onCreateGroupSpy.calledOnce).toEqual(true);
  });

  it('it should change error state if input field gains focus', () => {
    tree.instance().setState({ errorMessage: 'Random error message' });
    tree.find('#desc').simulate('focus', onFocus());
    expect(onFocus.calledOnce).toBe(true);
    expect(tree.instance().state.errorMessage).toBe('');
  });

  it('should not have any error when create group button' +
      ' is clicked with non-empty fields', () => {
    const onCreateGroupSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewGroup onCreateGroup={onCreateGroupSpy} {...props} />);
    component.find('#name').simulate('change', { target:
    { value: dummy.string, name: 'name' } });
    component.find('#desc').simulate('change', { target:
    { value: dummy.string, name: 'description' } });
    const button = component.find('#createGroup').at(1);
    button.simulate('click', onCreateGroupSpy());
    component.instance().onCreateGroup({ preventDefault: () => {} });
    expect(component.instance().state.errorMessage).toEqual('');
  });

  it('should show error if create group button is ' +
  'clicked and group name is too long', () => {
    const onCreateGroupSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewGroup onCreateGroup={onCreateGroupSpy} {...props} />);
    component.find('#name').simulate('change', { target:
    { value: dummy.longString, name: 'name' } });
    component.find('#desc').simulate('change', { target:
    { value: dummy.string, name: 'description' } });
    const button = component.find('#createGroup').at(1);
    button.simulate('click', onCreateGroupSpy());
    component.instance().onCreateGroup({ preventDefault: () => {} });
    expect(component.instance().state.errorMessage)
    .toEqual('Group name too long');
  });

  it('should show error if create group button is ' +
  'clicked and group description is too long', () => {
    const onCreateGroupSpy = sinon.spy(() => new Promise(() => {}));
    const component = shallow(
      <NewGroup onCreateGroup={onCreateGroupSpy} {...props} />);
    component.find('#name').simulate('change', { target:
    { value: dummy.string, name: 'name' } });
    component.find('#desc').simulate('change', { target:
    { value: dummy.longString, name: 'description' } });
    const button = component.find('#createGroup').at(1);
    button.simulate('click', onCreateGroupSpy());
    component.instance().onCreateGroup({ preventDefault: () => {} });
    expect(component.instance().state.errorMessage)
    .toEqual('Group description too long');
  });
});
