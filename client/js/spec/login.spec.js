import { shallow, mount } from 'enzyme';

jest.dontMock('../components/presentational/form');

/* eslint-disable import/first */
/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Login } from '../components/containers';
import { Form } from '../components/presentational';

const mockStore = configureStore();

Object.defineProperty(window, 'sessionStorage', { value: jest.fn() });
sessionStorage.getItem = () => null;
sessionStorage.setItem = jest.fn();


describe('Home Component', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      mount(
        <Provider store={mockStore({ runtime: {} })}><Login/></Provider>
      );
    });
  });
  describe('Conditional Rendering', () => {
    it('renders with sessionStorage returning null', () => {
      const login = mount(
        <Provider store={mockStore({ runtime: {} })}><Login/></Provider>
      );
      expect(login.html()).not.toBe(null);
    });
  });
  describe('Conditional Rendering', () => {
    it('renders null sessionStorage returning a string', () => {
      sessionStorage.getItem = () => '';
      const login = mount(
        <Provider store={mockStore({ runtime: {} })}><Login/></Provider>
      );
      expect(login.html()).toBe(null);
    });
  });
  describe('Error Display', () => {
    it('displays error when form is submitted with empty fields', () => {
      sessionStorage.getItem = () => null;
      const login = mount(
        <Provider store={mockStore({ runtime: {} })}><Login/></Provider>
      );
      login.find('#login').simulate('click');
      expect(login.find('.red.card').text()).not.toBe(undefined);
    });
  });
});
