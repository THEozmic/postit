/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Message from '../../components/presentational/Message';

const mockStore = configureStore();

describe('<Message />', () => {
  it('should be defined', () => {
    expect(Message).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      onLogout: jest.fn(),
      message: { id: 1, fromUser: 'stuff', priority: 'stuff', message: 'stuff' }
    };
    const tree = mount(<Message {...props} />);
  });
});
