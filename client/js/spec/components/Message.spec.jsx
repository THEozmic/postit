/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Message from '../../components/presentational/Message';
import propsMock from '../__mocks__/propsMock';

const mockStore = configureStore();

describe('<Message />', () => {
  it('should be defined', () => {
    expect(Message).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
      message: propsMock.messageObject
    };
    const tree = mount(<Message {...props} />);
  });
});
