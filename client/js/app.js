import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import 'jquery/dist/jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/index.scss';
import configureStore from './stores/configureStore';
import { Home, Register, Login, NewGroup, Recover } from './components/presentational';
import { Dashboard, Group, Search } from './components/containers';

const store = configureStore();

const app = document.querySelector('#app');
render(
<Provider store={store}>
  <Router>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route exact path ='/group/:id' component={Group}/>
      <Route path ='/new-group' component={NewGroup}/>
      <Route path ='/group/:id/search' component={Search}/>
      <Route path ='/recover-password' component={Recover}/>
    </div>
  </Router>
</Provider>
,
app);
