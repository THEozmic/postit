/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Form } from '../../components/containers/Form';
import dummy from '../../../../__mocks__/dummy';

jest.mock('react-router-dom');


describe('Given Form component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      onLogout: dummy.func,
    };
    const tree = mount(<Form {...props}>children</Form>);
    expect(tree.exists()).toBe(true);
    expect(tree.find('form').exists()).toBe(true);
  });
});
