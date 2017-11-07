/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import Message from '../../components/presentational/Message';
import mockData from '../__mocks__/mockData';

describe('Given Message component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      onLogout: mockData.func,
      message: mockData.messageObject
    };
    const tree = mount(<Message {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.message-container').exists()).toEqual(true);
  });
});
