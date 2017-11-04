/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { NewGroup } from '../../components/containers/NewGroup';
import dummy from '../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given NewGroup component is mounted', () => {
  it('should render self and components', () => {
    const props = {
      messages: dummy.emptyArray,
      groupId: dummy.number,
      apiCreateGroup: dummy.promiseFunc
    };
    const tree = mount(<NewGroup {...props} />);
    tree.find('#createGroup').simulate('click');
    tree.find('#desc').simulate('focus');
    tree.find('#name').simulate('focus');
    tree.find('#name').simulate('change', { target:
    { value: dummy.string } });
    tree.find('#desc').simulate('change', { target:
    { value: dummy.string } });
  });
});
