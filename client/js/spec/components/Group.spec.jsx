/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Group } from '../../components/containers/Group';
import mockData from '../__mocks__/mockData';

describe('Given Group component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      onLogout: mockData.func,
      messages: mockData.emptyArray,
      match: mockData.match,
      apiFetchGroup: mockData.promiseFunc,
      selectedGroup: mockData.emptyObject,
      onLoginUser: mockData.promiseFunc
    };
    const tree = shallow(<Group {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.group-header').exists()).toBe(true);
  });
});

