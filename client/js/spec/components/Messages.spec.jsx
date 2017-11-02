/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Messages from '../../components/containers/Messages';
import propsMock from '../__mocks__/propsMock';

const mockStore = configureStore();

describe('<Messages />', () => {
  it('should be defined', () => {
    expect(Messages).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      messages: [propsMock.messageObject]
    };
    const tree = mount(
      <Provider store={mockStore({ runtime: {} })}>
        <Messages {...props} />
      </Provider>);
  });
});
