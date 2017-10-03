import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Register, Login, Dashboard, Header, Group, Messages } from '../components/containers';
import { Home, Groups, Footer, Search,
  NewGroup, Recover, NewPassword, SideMenu,
  Form, MessageBox, Message, NotFoundPage } from '../components/presentational';

const mockStore = configureStore();

// Dashboard.contextTypes = { router: PropTypes}

describe('<Dashboard />', () => {
 it('should be defined', () => {
   expect(Dashboard).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
    <Provider store={mockStore({ runtime: {} })}><Dashboard /></Provider>
   );
   expect(tree).toMatchSnapshot();
 });

 const props = { onLogout: jest.fn };
 const wrapper = mount(
   <Provider store={mockStore({ runtime: {} })}><Dashboard {...props}/></Provider>
 );

  it('should have the side menu', () => {
    expect(wrapper.find('aside').length).toEqual(1);
  });

});

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><Footer /></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Form />', () => {
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

describe('<Group />', () => {
  it('should be defined', () => {
    expect(Group).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
     <Provider store={mockStore({ runtime: {} })}><Group /></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Groups />', () => {
  it('should be defined', () => {
    expect(Groups).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><Groups groups={[]}/></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Home />', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
     <Provider store={mockStore({ runtime: {} })}><Home /></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Login />', () => {
  it('should be defined', () => {
    expect(Login).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
     <Provider store={mockStore({ runtime: {} })}><Login /></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Message />', () => {
  it('should be defined', () => {
    expect(Message).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><Message message={{}}/></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<MessageBox />', () => {
  it('should be defined', () => {
    expect(MessageBox).toBeDefined();
  });
  it('should render correctly with empty send status', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><MessageBox sendStatus='' sendMessageDetails={jest.fn}/></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly without empty send status', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><MessageBox sendStatus='SEND' sendMessageDetails={jest.fn}/></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<NewGroup />', () => {
  it('should be defined', () => {
    expect(NewGroup).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><NewGroup /></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<NewPassword />', () => {
  it('should be defined', () => {
    expect(NewPassword).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><NewPassword match={{}}/></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<NotFoundPage />', () => {
  it('should be defined', () => {
    expect(NotFoundPage).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><NotFoundPage /></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Recover />', () => {
  it('should be defined', () => {
    expect(Recover).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><Recover /></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Register />', () => {
  it('should be defined', () => {
    expect(Register).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><Register /></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Search />', () => {
  it('should be defined', () => {
    expect(Search).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><Search match={{}}/></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<SideMenu />', () => {
  it('should be defined', () => {
    expect(SideMenu).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Provider store={mockStore({ runtime: {} })}><SideMenu active='' onLogout={jest.fn}/></Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});