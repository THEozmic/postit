/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { MessageBox } from '../../components/containers/MessageBox';
import propsMock from '../__mocks__/propsMock';

const mockStore = configureStore();

describe('<MessageBox />', () => {
  it('should be defined', () => {
    expect(MessageBox).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      sendMessageDetails: propsMock.func,
      apiSendMessage: propsMock.promiseFunc,
      match: propsMock.match
    };
    const tree = mount(<MessageBox {...props} />);
    tree.find('#messageBox').simulate('change', { target:
      { value: propsMock.string } });
    tree.find('.sendMessage').simulate('click');
  });
});
