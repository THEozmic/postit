import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Form } from '../../components/containers/Form';


const mockStore = configureStore();


describe('<Form />', () => {
 it('should be defined', () => {
   expect(Form).toBeDefined();
 });
 it('should render correctly', () => {
   const then = jest.fn();
   const props = {
     onLogout: jest.fn(),
    };
    const tree = shallow(<Form {...props }>children</Form>);
 });
});

