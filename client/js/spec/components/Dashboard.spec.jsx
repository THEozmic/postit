/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Dashboard } from '../../components/containers/Dashboard';
import propsMock from '../__mocks__/propsMock';

describe('<Dashboard />', () => {
  it('should be defined', () => {
    expect(Dashboard).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
      user: propsMock.dashboardUser,
      apiGetCurrentUser: propsMock.promiseFunc
    };
    const tree = shallow(<Dashboard {...props} />);
  });
});
