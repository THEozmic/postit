/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { RecoverPassword } from '../../components/containers/RecoverPassword';
import propsMock from '../__mocks__/propsMock';

describe('<RecoverPassword />', () => {
  it('should be defined', () => {
    expect(RecoverPassword).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      messages: propsMock.emptyArray,
      groupId: propsMock.number,
      apiRequestPassword: propsMock.promiseFunc
    };
    const tree = mount(
      <MemoryRouter>
        <RecoverPassword {...props} />
      </MemoryRouter>
    );
    tree.setState({ buttonText: propsMock.btnText });
    tree.find('#submitEmail').simulate('click');
  });
});
