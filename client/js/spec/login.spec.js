import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Login from '../components/presentational/login';

describe('<Login/>', () => {
  it('should have an image to display the gravatar', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });
});
