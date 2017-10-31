/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { MessageBox } from '../../components/containers/MessageBox';

const mockStore = configureStore();

describe('<MessageBox />', () => {
  it('should be defined', () => {
    expect(MessageBox).toBeDefined();
  });
  it('should render correctly', () => {
    const then = jest.fn();
    const props = {
      sendMessageDetails: jest.fn(),
      apiSendMessage: jest.fn(() => Promise.resolve()),
      match: { params: { id: 1 } }
    };
    const tree = mount(<MessageBox {...props} />);
    tree.find('#messageBox').simulate('change', { target: { value: 'stuff' } });
    tree.find('.sendMessage').simulate('click');
  });
});
