/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Header from '../../components/presentational/Header';
import propsMock from '../__mocks__/propsMock';

describe('<Header />', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
      groups: propsMock.emptyArray
    };
    const tree = mount(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>);
  });
  it('should render correctly group length not === 0', () => {
    const props = {
      onLogout: propsMock.func,
      username: propsMock.username
    };
    const tree = mount(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>);
  });
});
