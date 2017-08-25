import { shallow, mount } from 'enzyme';

/* eslint-disable import/first */
/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Group } from '../components/containers';

const mockStore = configureStore();

Object.defineProperty(window, 'sessionStorage', { value: jest.fn() });
sessionStorage.getItem = () => null;
sessionStorage.setItem = jest.fn();


describe('Home Component', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      mount(
        <Provider store={mockStore({ runtime: {} })}><Group/></Provider>
      );
    });
  });
  describe('Loads Messages', () => {
    it('loads messages if the loading message is empty', () => {
      const group = mount(
        <Provider store={mockStore({ runtime: {} })}><Group/></Provider>
      );
      // const state = {
      //   loading: ''
      // };
      group.setState({ messages: [] });
      group.update();
    });
  });
});
