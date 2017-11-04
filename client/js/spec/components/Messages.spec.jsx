/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Messages from '../../components/containers/Messages';
import dummy from '../__mocks__/dummy';

const mockStore = configureStore();

describe('Given Messages component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      messages: [dummy.messageObject]
    };
    const tree = mount(
      <Provider store={mockStore({ runtime: {} })}>
        <Messages {...props} />
      </Provider>);
  });
});
