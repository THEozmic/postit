import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Dashboard } from '../../components/containers/Dashboard';


const mockStore = configureStore();

// Dashboard.contextTypes = { router: PropTypes}

describe('<Dashboard />', () => {
 it('should be defined', () => {
   expect(Dashboard).toBeDefined();
 });
 it('should render correctly', () => {
   const props = {
     onLogout: jest.fn(),
     user: { groups: [] },
     apiGetCurrentUser: jest.fn(() => {
      return Promise.resolve();
    })
    };
  //  const tree = mount(<MemoryRouter>
  //     <Provider store={mockStore({ runtime: {} })}>
  //       <Dashboard user={user}/>
  //     </Provider>
  //    </MemoryRouter>);
      const tree = shallow(<Dashboard {...props }/>);
  //  tree.setState({ loading: '' });
  //  tree.update();
  //  expect(tree.find('.groups').length).to
  //  expect(tree).toMatchSnapshot();
 });

//  const props = { onLogout: jest.fn };
//  const wrapper = mount(
//    <Provider store={mockStore({ runtime: {} })}><Dashboard {...props}/></Provider>
//  );

  // it('should have the side menu', () => {
  //   expect(wrapper.find('aside').length).toEqual(1);
  // });

});

