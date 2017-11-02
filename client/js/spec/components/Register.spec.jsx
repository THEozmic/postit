/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Register } from '../../components/containers/Register';
import propsMock from '../__mocks__/propsMock';

describe('<Register />', () => {
  it('should be defined', () => {
    expect(Register).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      messages: propsMock.emptyArray,
      groupId: propsMock.number,
      apiRegisterUser: propsMock.promiseFunc
    };
    const tree = mount(
      <MemoryRouter>
        <Register {...props} />
      </MemoryRouter>
    );
    tree.find('#username').simulate('focus');
    tree.find('#username').simulate('change', { target:
      { value: propsMock.string } });
    tree.find('#password').simulate('change', { target:
      { value: propsMock.string } });
    tree.find('#phone').simulate('change', { target:
      { value: propsMock.string } });
    tree.find('#email').simulate('change', { target:
      { value: propsMock.string } });
    tree.find('#submitDetails').simulate('click');
  });
});
