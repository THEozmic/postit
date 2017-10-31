/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from '../../components/presentational/Home';

describe('<Home />', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      onLogout: jest.fn(),
      groups: []
    };
    const tree = mount(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>);
  });
  it('should render correctly group length not === 0', () => {
    const then = jest.fn();
    const props = {
      onLogout: jest.fn(),
      username: 'stuff'
    };
    const tree = mount(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>);
  });
});
