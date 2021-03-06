/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from '../../components/presentational/Home';
import mockData from '../__mocks__/mockData';

jest.mock('react-router-dom');

describe('Given Home component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      onLogout: mockData.func,
      groups: mockData.emptyArray
    };
    const tree = mount(<Home {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.intro-text').exists()).toBe(true);
  });
});
