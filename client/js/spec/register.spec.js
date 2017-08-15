import { shallow, mount } from 'enzyme';

jest.dontMock('../components/presentational/form');

/* eslint-disable import/first */
/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Register } from '../components/containers';
import { Form } from '../components/presentational';

const mockStore = configureStore();

Object.defineProperty(window, 'sessionStorage', { value: jest.fn() });
sessionStorage.getItem = () => null;
sessionStorage.setItem = jest.fn();


describe('Home Component', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      mount(
        <Provider store={mockStore({ runtime: {} })}><Register/></Provider>
      );
    });
  });
  describe('Error Display', () => {
    it('displays error when form is submitted with empty fields', () => {
      const register = mount(
        <Provider store={mockStore({ runtime: {} })}><Register/></Provider>
      );
      register.find('#register').simulate('click');
      expect(register.find('.red.card').text()).not.toBe(undefined);
    });
  });
});
