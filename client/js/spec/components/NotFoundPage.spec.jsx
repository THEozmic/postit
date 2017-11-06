/* globals expect jest */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import NotFoundPage from '../../components/presentational/NotFoundPage';
import dummy from '../../../../__mocks__/dummy';

jest.mock('react-router-dom');

describe('Given NotFoundPage component is mounted', () => {
  const props = {
    onLogout: dummy.func,
    groups: dummy.emptyArray
  };
  const tree = mount(<NotFoundPage {...props} />);

  it('should render self', () => {
    expect(tree.length).toBe(1);
  });
});
