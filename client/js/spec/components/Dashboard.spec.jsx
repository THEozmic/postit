/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Dashboard } from '../../components/containers/Dashboard';
import { dashboardProps } from '../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given Dashboard component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      onLogout: jest.fn,
      apiGetCurrentUser: () => Promise.resolve()
    };

    const tree = mount(<Dashboard {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('div').exists()).toBe(true);
  });
});
