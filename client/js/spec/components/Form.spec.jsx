/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Form } from '../../components/containers/Form';
import propsMock from '../__mocks__/propsMock';

describe('<Form />', () => {
  it('should be defined', () => {
    expect(Form).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
    };
    const tree = shallow(<Form {...props}>children</Form>);
  });
});
