/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Register } from '../../components/containers/Register';

describe('<Register />', () => {
  it('should be defined', () => {
    expect(Register).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      messages: [],
      groupId: 1,
      apiRegisterUser: jest.fn(() => Promise.resolve())
    };
    const tree = mount(
      <MemoryRouter>
        <Register {...props} />
      </MemoryRouter>
    );
    tree.find('#username').simulate('focus');
    tree.find('#username').simulate('change', { target: { value: 'David' } });
    tree.find('#password').simulate('change', { target: { value: 'David' } });
    tree.find('#phone').simulate('change', { target: { value: 'David' } });
    tree.find('#email').simulate('change', { target: { value: 'David' } });
    tree.find('#submitDetails').simulate('click');
  });
});