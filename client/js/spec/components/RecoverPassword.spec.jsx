/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { RecoverPassword } from '../../components/containers/RecoverPassword';
import dummy from '../__mocks__/dummy';

describe('Given RecoverPassword component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      messages: dummy.emptyArray,
      groupId: dummy.number,
      apiRequestPassword: dummy.promiseFunc
    };
    const tree = mount(
      <MemoryRouter>
        <RecoverPassword {...props} />
      </MemoryRouter>
    );
    tree.setState({ buttonText: dummy.btnText });
    tree.find('#submitEmail').simulate('click');
  });
});
