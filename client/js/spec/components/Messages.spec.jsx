/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Messages } from '../../components/containers/Messages';
import dummy from '../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given Messages component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      messages: [dummy.messageObject]
    };
    const tree = shallow(<Messages {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.messages').exists()).toBe(true);
  });
});
