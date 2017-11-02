/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { NewPassword } from '../../components/containers/NewPassword';
import propsMock from '../__mocks__/propsMock';

describe('<NewPassword />', () => {
  it('should be defined', () => {
    expect(NewPassword).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      match: propsMock.match,
      groupId: propsMock.number,
      apiResetPassword: propsMock.promiseFunc,
      user: { btnText: propsMock.btnText }
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
