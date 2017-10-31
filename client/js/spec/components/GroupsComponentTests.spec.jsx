/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Groups from '../../components/presentational/Groups';

describe('<Groups />', () => {
  it('should be defined', () => {
    expect(Groups).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      onLogout: jest.fn(),
      groups: []
    };
    const tree = mount(
      <MemoryRouter>
        <Groups {...props} />
      </MemoryRouter>);
  });
  it('should render correctly group length not === 0', () => {
    const then = jest.fn();
    const props = {
      onLogout: jest.fn(),
      groups: [{ id: 1, name: 'test', desc: 'stuff' }]
    };
    const tree = mount(
      <MemoryRouter>
        <Groups {...props} />
      </MemoryRouter>);
  });
});
