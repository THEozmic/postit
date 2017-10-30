import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import SideMenu from '../../components/presentational/SideMenu';


const mockStore = configureStore();

// Dashboard.contextTypes = { router: PropTypes}

describe('<SideMenu />', () => {
 it('should be defined', () => {
   expect(SideMenu).toBeDefined();
 });
 it('should render correctly', () => {
   const then = jest.fn();
   const props = {
     onLogout: jest.fn(),
    };
    const tree = shallow(<SideMenu {...props }/>);
    tree.find('.logout').simulate('click');
 });

 it('should render with active and showSearchLink set', () => {
  const props = {
     onLogout: jest.fn(),
     active: "create-group",
     showSearchLink: true
    };
  const tree = shallow(<SideMenu {...props }/>);
 });

 it('should render with active set to search and showSearchLink set', () => {
  const props = {
     onLogout: jest.fn(),
     active: "search",
     showSearchLink: true
    };
  const tree = shallow(<MemoryRouter><SideMenu {...props }/></MemoryRouter>);
 });

 it('should render with active set to search and showSearchLink set', () => {
  const props = {
     onLogout: jest.fn(),
     showSearchLink: false,
     active: ''
    };
  const tree = mount(<MemoryRouter><SideMenu {...props }/></MemoryRouter>);
 });
});

