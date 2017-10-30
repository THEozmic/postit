import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NotFoundPage from '../../components/presentational/NotFoundPage';


const mockStore = configureStore();

// Dashboard.contextTypes = { router: PropTypes}

describe('<NotFoundPage />', () => {
 it('should be defined', () => {
   expect(NotFoundPage).toBeDefined();
 });
 it('should render correctly', () => {
   const then = jest.fn();
   const props = {
     onLogout: jest.fn(),
     groups: []
    };
    const tree = mount(
      <MemoryRouter>
        <NotFoundPage {...props }/>
      </MemoryRouter>);
 });
 it('should render correctly group length not === 0', () => {
   const then = jest.fn();
   const props = {
     onLogout: jest.fn(),
     username: "stuff"
    };
    const tree = mount(
    <MemoryRouter>
      <NotFoundPage {...props }/>
    </MemoryRouter>);
 });
});

