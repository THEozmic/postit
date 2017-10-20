import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Register } from '../../components/containers/Register';


const mockStore = configureStore();


describe('<Register />', () => {
 it('should be defined', () => {
   expect(Register).toBeDefined();
 });
 it('should render correctly', () => {
   const then = jest.fn();
   const props = {
     messages: [],
     groupId: 1,
     apiRegisterUser: jest.fn(() => {
        return Promise.resolve();
    })
    };
    const tree = mount(
      <MemoryRouter>
      <Register {...props }/>
      </MemoryRouter>
    );
    tree.find('#username').simulate('focus');
    tree.find('#username').simulate('change', {target: {value: 'David'}});
    tree.find('#password').simulate('change', {target: {value: 'David'}});
    tree.find('#phone').simulate('change', {target: {value: 'David'}});
    tree.find('#email').simulate('change', {target: {value: 'David'}});
    console.log(tree, 'rrrrr');
    tree.find('#submitDetails').simulate('click');
 });
});

