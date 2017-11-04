/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from '../../components/presentational/Home';
import dummy from '../__mocks__/dummy';

describe('Given Home component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      onLogout: dummy.func,
      groups: dummy.emptyArray
    };
    const tree = mount(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.intro-text').exists()).toBe(true);
  });
});
