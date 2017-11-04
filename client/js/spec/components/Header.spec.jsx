/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Header from '../../components/presentational/Header';
import dummy from '../__mocks__/dummy';

describe('Given Header component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      onLogout: dummy.func,
      groups: dummy.emptyArray
    };
    const tree = mount(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>);
    expect(tree.exists()).toBe(true);
    expect(tree.find('header').exists()).toBe(true);
  });
});
