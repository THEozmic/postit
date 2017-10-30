import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Footer from '../../components/presentational/Footer';


const mockStore = configureStore();

// Dashboard.contextTypes = { router: PropTypes}

describe('<Footer />', () => {
 it('should be defined', () => {
   expect(Footer).toBeDefined();
 });
 it('should render correctly', () => {
   const then = jest.fn();
   const props = {
     onLogout: jest.fn(),
    };
    const tree = shallow(<Footer {...props }/>);
 });
});

