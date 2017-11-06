/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Footer from '../../components/presentational/Footer';
import dummy from '../__mocks__/dummy';

describe('Given Footer component is mounted', () => {
  it('should render self and components properly', () => {
    const props = {
      onLogout: dummy.func,
    };
    const tree = shallow(<Footer {...props} />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('footer').exists()).toBe(true);
  });
});

