import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Messages from '../../components/containers/Messages';


const mockStore = configureStore();


describe('<Messages />', () => {
 it('should be defined', () => {
   expect(Messages).toBeDefined();
 });
 it('should render correctly', () => {
   const then = jest.fn();
   const props = {
     messages: [{ id: 1, fromUser: "stuff", priority: "stuff", message: "stuff"}]
    };
    const tree = mount(
    <Provider store={mockStore({ runtime: {} })}>
      <Messages {...props }/>
    </Provider>);
    // const input = tree.find('.message-box');
    // input.simulate('change', input);
    // tree.find('textarea').simulate('change', {target: {value: 'David'}});
    // tree.find('.sendMessage').simulate('click');

 });
});

