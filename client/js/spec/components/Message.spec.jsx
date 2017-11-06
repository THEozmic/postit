/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import Message from '../../components/presentational/Message';
import dummy from '../__mocks__/dummy';

describe('Given Message component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      onLogout: dummy.func,
      message: dummy.messageObject
    };
    const tree = mount(<Message {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.message-container').exists()).toEqual(true);
  });
});
