import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import 'jquery/dist/jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/index.scss';
import { Home, Register, Login } from './components/presentational';
import { Dashboard, Group } from './components/containers';

const Root = () => (
<Router>
  <div>
    <Route exact path='/' component={Home}/>
    <Route path='/register' component={Register}/>
    <Route path='/login' component={Login}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path ='/group' component={Group}/>
  </div>
</Router>
);

const app = document.querySelector('#app');
render(<Root/>, app);
