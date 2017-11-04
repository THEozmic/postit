/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { MessageBox } from '../../components/containers/MessageBox';
import dummy from '../__mocks__/dummy';

const mockStore = configureStore();

describe('Given MessageBox component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      sendMessageDetails: dummy.func,
      apiSendMessage: dummy.promiseFunc,
      match: dummy.match
    };
    const tree = mount(<MessageBox {...props} />);
    tree.find('#messageBox').simulate('change', { target:
      { value: dummy.string } });
    tree.find('.sendMessage').simulate('click');
  });
});
