/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Groups from '../../components/presentational/Groups';
import dummy from '../__mocks__/dummy';

describe('Given Groups component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      onLogout: dummy.func,
      groups: dummy.emptyArray
    };
    const tree = mount(
      <MemoryRouter>
        <Groups {...props} />
      </MemoryRouter>);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.groups').exists()).toBe(true);
  });
  it('should render "You don' +
  '\'t belong to any group" given group length === 0', () => {
    const props = {
      onLogout: dummy.func,
      groups: dummy.emptyArray
    };
    const tree = mount(
      <MemoryRouter>
        <Groups {...props} />
      </MemoryRouter>);
    expect(tree.find('.groups').text())
    .toBe('You don\'t belong to any group');
  });
  it('should render groups given group length !== 0', () => {
    const props = {
      onLogout: dummy.func,
      groups: dummy.groupsArray
    };
    const tree = mount(
      <MemoryRouter>
        <Groups {...props} />
      </MemoryRouter>);
    expect(tree.find('.groups').text())
    .not.toBe('You don\'t belong to any group');
  });
});
