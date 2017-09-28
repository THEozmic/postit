import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Form } from '../components/presentational';

const mockStore = configureStore();

describe('Button', () => {
 it('should be defined', () => {
   expect(Form).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
    <Provider store={mockStore({ runtime: {} })}><Form /></Provider>
   );
   expect(tree).toMatchSnapshot();
 });
});