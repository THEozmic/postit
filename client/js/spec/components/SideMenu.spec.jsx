/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import SideMenu from '../../components/presentational/SideMenu';
import dummy from '../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given SideMenu component is mounted', () => {
  let treeShallow, treeMount;
  const props = {
    onLogout: sinon.spy(),
    active: 'create-group'
  };
  beforeEach(() => {
    treeShallow = shallow(<SideMenu {...props} />);
    treeMount = mount(<SideMenu {...props} />);
  });

  it('should render properly', () => {
    expect(treeShallow.length).toBe(1);
  });

  it('should render components', () => {
    expect(treeMount.find('aside').exists()).toBe(true);
    expect(treeMount.find('li').exists()).toBe(true);
  });
});
