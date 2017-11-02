/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from '../../components/presentational/Home';
import propsMock from '../__mocks__/propsMock';

describe('<Home />', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
      groups: propsMock.emptyArray
    };
    const tree = mount(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>);
  });
  it('should render correctly group length not === 0', () => {
    const props = {
      onLogout: propsMock.func,
      username: propsMock.username
    };
    const tree = mount(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>);
  });
});
