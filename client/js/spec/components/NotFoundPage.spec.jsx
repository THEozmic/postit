/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NotFoundPage from '../../components/presentational/NotFoundPage';
import dummy from '../__mocks__/dummy';

describe('Given NotFoundPage component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      onLogout: dummy.func,
      groups: dummy.emptyArray
    };
    const tree = mount(
      <MemoryRouter>
        <NotFoundPage {...props} />
      </MemoryRouter>);
  });
  it('should render correctly group length not === 0', () => {
    const props = {
      onLogout: dummy.func,
      username: dummy.username
    };
    const tree = mount(
      <MemoryRouter>
        <NotFoundPage {...props} />
      </MemoryRouter>);
  });
});
