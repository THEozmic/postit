/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Group } from '../../components/containers/Group';

describe('<Group />', () => {
  it('should be defined', () => {
    expect(Group).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      onLogout: jest.fn(),
      messages: [],
      match: { params: { id: 1 } },
      apiFetchGroup: jest.fn(() => Promise.resolve()),
      selectedGroup: {},
      onLoginUser: jest.fn(() => Promise.resolve())
    };
    const tree = shallow(<Group {...props} />);
  });
});

