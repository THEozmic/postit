/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Group } from '../../components/containers/Group';
import dummy from '../__mocks__/dummy';

describe('Given Group component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      onLogout: dummy.func,
      messages: dummy.emptyArray,
      match: dummy.match,
      apiFetchGroup: dummy.promiseFunc,
      selectedGroup: dummy.emptyObject,
      onLoginUser: dummy.promiseFunc
    };
    const tree = shallow(<Group {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('.group-header').exists()).toBe(true);
  });
});

