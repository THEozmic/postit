import { shallow, mount } from 'enzyme';

// jest.dontMock('../components/containers/dashboard');

/* eslint-disable import/first */
/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Dashboard } from '../components/containers';

const mockStore = configureStore();

Object.defineProperty(window, 'sessionStorage', { value: jest.fn() });
sessionStorage.getItem = jest.fn();
sessionStorage.setItem = jest.fn();
const mockFn = jest.fn();


describe('Dashboard Component', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      const tree = shallow(
        <Dashboard onLogout={mockFn}/>
       );
       expect(tree).toMatchSnapshot();
    });
  });
});
