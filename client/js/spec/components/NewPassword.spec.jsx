/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { NewPassword } from '../../components/containers/NewPassword';

describe('<NewPassword />', () => {
  it('should be defined', () => {
    expect(NewPassword).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      match: { params: { id: 1 } },
      groupId: 1,
      apiResetPassword: jest.fn(() => Promise.resolve()),
      user: { btnText: 'Okay' }
    };
    const tree = mount(
      <MemoryRouter>
        <NewPassword {...props} />
      </MemoryRouter>
    );
    tree.find('#password').simulate('focus');
    tree.find('#submitPassword').simulate('click');
  });
});
