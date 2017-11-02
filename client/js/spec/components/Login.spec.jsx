/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Login } from '../../components/containers/Login';
import propsMock from '../__mocks__/propsMock';

const mockStore = configureStore();

describe('<Login />', () => {
  it('should be defined', () => {
    expect(Login).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
      messages: propsMock.emptyArray,
      match: propsMock.match,
      apiLoginUser: propsMock.promiseFunc,
      selectedGroup: propsMock.emptyObject,
      onLoginUser: propsMock.promiseFunc
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
    const props = {
      onLogout: propsMock.func,
      messages: propsMock.emptyArray,
      match: propsMock.match,
      apiLoginUser: propsMock.promiseFunc,
      selectedGroup: propsMock.emptyObject,
      onLoginUser: propsMock.promiseFunc
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
