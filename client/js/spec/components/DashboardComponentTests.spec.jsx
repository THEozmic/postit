/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Dashboard } from '../../components/containers/Dashboard';

describe('<Dashboard />', () => {
  it('should be defined', () => {
    expect(Dashboard).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: jest.fn(),
      user: { groups: [] },
      apiGetCurrentUser: jest.fn(() => Promise.resolve())
    };
    const tree = shallow(<Dashboard {...props} />);
  });
});
