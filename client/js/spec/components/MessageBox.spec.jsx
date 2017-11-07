/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { MessageBox } from '../../components/containers/MessageBox';
import mockData from '../__mocks__/mockData';

describe('Given MessageBox component is mounted', () => {
  const props = {
    sendMessageDetails: mockData.func,
    apiSendMessage: mockData.promiseFunc,
    match: mockData.match
  };
  const tree = mount(<MessageBox {...props} />);

  it('should render self and components', () => {
    expect(tree.exists()).toBe(true);
    expect(tree.find('#messageBox').exists()).toBe(true);
  });

  it('should change state of send button when it\'s clicked', () => {
    tree.find('#messageBox').simulate('change', { target:
      { value: mockData.string, name: 'content' } });
    tree.find('.sendMessage').simulate('click');
    expect(tree.instance().state.sendStatus).toBe('SENDING');
  });
});
