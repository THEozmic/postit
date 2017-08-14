import { shallow, mount } from 'enzyme';

jest.dontMock('../components/containers/dashboard');

/* global jest */

/* eslint-disable import/first */
/* eslint-disable global-require */
import TestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Dashboard } from '../components/containers';

const mockStore = configureStore();

Object.defineProperty(window, 'sessionStorage', { value: jest.fn() });
sessionStorage.getItem = jest.fn();
sessionStorage.setItem = jest.fn();


describe('Dashboard Component', () => {
  describe('Rendering', () => {
    it('renders successfully', () => {
      const dashboard = mount(
        <Provider store={mockStore({ runtime: {} })}><Dashboard/></Provider>
      );
      // expect(dashboard.text()).toEqual('<Dashboard />');
    });
  });
});
