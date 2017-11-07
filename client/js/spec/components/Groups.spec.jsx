/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Groups from '../../components/presentational/Groups';
import mockData from '../__mocks__/mockData';

jest.mock('react-router-dom');

describe('Given Groups component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      onLogout: mockData.func,
      groups: mockData.emptyArray
    };
    const tree = mount(<Groups {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.groups').exists()).toBe(true);
  });
  it('should render "You don' +
  '\'t belong to any group" given group length === 0', () => {
    const props = {
      onLogout: mockData.func,
      groups: mockData.emptyArray
    };
    const tree = mount(<Groups {...props} />);
    expect(tree.find('.groups').text())
    .toBe('You don\'t belong to any group');
  });
  it('should render groups given group length !== 0', () => {
    const props = {
      onLogout: mockData.func,
      groups: mockData.groupsArray
    };
    const tree = mount(<Groups {...props} />);
    expect(tree.find('.groups').text())
    .not.toBe('You don\'t belong to any group');
  });
});
