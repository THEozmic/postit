import { shallow, mount } from 'enzyme';

// jest.dontMock('../components/containers/dashboard');

/* eslint-disable import/first */
/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Home } from '../components/presentational';

const mockStore = configureStore();

Object.defineProperty(window, 'sessionStorage', { value: jest.fn() });
sessionStorage.getItem = jest.fn();
sessionStorage.setItem = jest.fn();


describe('Home Component', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      mount(
        <Provider store={mockStore({ runtime: {} })}><Home/></Provider>
      );
    });
  });
});
