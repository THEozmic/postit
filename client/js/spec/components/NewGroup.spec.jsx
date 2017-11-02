/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { NewGroup } from '../../components/containers/NewGroup';
import propsMock from '../__mocks__/propsMock';

describe('<NewGroup />', () => {
  it('should be defined', () => {
    expect(NewGroup).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      messages: propsMock.emptyArray,
      groupId: propsMock.number,
      apiCreateGroup: propsMock.promiseFunc
    };
    const tree = mount(
      <MemoryRouter>
        <NewGroup {...props} />
      </MemoryRouter>
    );
    tree.find('#createGroup').simulate('click');
  });
});
