/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Group } from '../../components/containers/Group';
import propsMock from '../__mocks__/propsMock';

describe('<Group />', () => {
  it('should be defined', () => {
    expect(Group).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
      messages: propsMock.emptyArray,
      match: propsMock.match,
      apiFetchGroup: propsMock.promiseFunc,
      selectedGroup: propsMock.emptyObject,
      onLoginUser: propsMock.promiseFunc
    };
    const tree = shallow(<Group {...props} />);
  });
});

