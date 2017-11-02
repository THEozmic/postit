/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import SideMenu from '../../components/presentational/SideMenu';
import propsMock from '../__mocks__/propsMock';

describe('<SideMenu />', () => {
  it('should be defined', () => {
    expect(SideMenu).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      onLogout: propsMock.func,
    };
    const tree = shallow(<SideMenu {...props} />);
    tree.find('.logout').simulate('click');
  });
  it('should render with active and showSearchLink set', () => {
    const props = {
      onLogout: propsMock.func,
      active: propsMock.createGroupString,
      showSearchLink: propsMock.boolTrue
    };
    const tree = shallow(<SideMenu {...props} />);
  });
  it('should render with active set to search and showSearchLink set', () => {
    const props = {
      onLogout: propsMock.func,
      active: propsMock.activeString,
      showSearchLink: propsMock.boolTrue
    };
    const tree = shallow(<MemoryRouter><SideMenu {...props} /></MemoryRouter>);
  });
  it('should render with active set to search and showSearchLink set', () => {
    const props = {
      onLogout: propsMock.func,
      showSearchLink: propsMock.boolFalse
    };
    const tree = mount(<MemoryRouter><SideMenu {...props} /></MemoryRouter>);
  });
});
