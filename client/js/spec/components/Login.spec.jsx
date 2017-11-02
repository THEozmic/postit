/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Login } from '../../components/containers/Login';

const mockStore = configureStore();

describe('<Login />', () => {
  it('should be defined', () => {
    expect(Login).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      onLogout: jest.fn(),
      messages: [],
      match: { params: { id: 1 } },
      apiLoginUser: jest.fn(() => Promise.resolve()),
      selectedGroup: {},
      onLoginUser: jest.fn(() => Promise.resolve())
    };
    const tree = mount(
      <Provider store={mockStore({ runtime: {} })}>
        <MemoryRouter><Login {...props} /></MemoryRouter>
      </Provider>);

    tree.find('#username').simulate('focus');
    let input = tree.find('#username');
    input.node.value = 'Change';
    input.simulate('change', input);
    input = tree.find('#password');
    input.node.value = 'Change';
    input.simulate('change', input);
    tree.find('#login').simulate('click');
  });

  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      onLogout: jest.fn(),
      messages: [],
      match: { params: { id: 1 } },
      apiLoginUser: jest.fn(() => Promise.resolve()),
      selectedGroup: {},
      onLoginUser: jest.fn(() => Promise.resolve())
    };
    const tree = mount(
      <Provider store={mockStore({ runtime: {} })}>
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>
      </Provider>);
    tree.find('#login').simulate('click');
  });
});
