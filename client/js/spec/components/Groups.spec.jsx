/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Groups from '../../components/presentational/Groups';
import propsMock from '../__mocks__/propsMock';

describe('<Groups />', () => {
  it('should be defined', () => {
    expect(Groups).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
      groups: propsMock.emptyArray
    };
    const tree = mount(
      <MemoryRouter>
        <Groups {...props} />
      </MemoryRouter>);
  });
  it('should render correctly group length not === 0', () => {
    const props = {
      onLogout: propsMock.func,
      groups: propsMock.groupsArray
    };
    const tree = mount(
      <MemoryRouter>
        <Groups {...props} />
      </MemoryRouter>);
  });
});
