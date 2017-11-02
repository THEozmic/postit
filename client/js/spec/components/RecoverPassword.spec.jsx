/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { RecoverPassword } from '../../components/containers/RecoverPassword';

describe('<RecoverPassword />', () => {
  it('should be defined', () => {
    expect(RecoverPassword).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      messages: [],
      groupId: 1,
      apiRequestPassword: jest.fn(() => Promise.resolve())
    };
    const tree = mount(
      <MemoryRouter>
        <RecoverPassword {...props} />
      </MemoryRouter>
    );
    tree.setState({ buttonText: 'Okay' });
    tree.find('#submitEmail').simulate('click');
  });
});
