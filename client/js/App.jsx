/* global localStorage */
import React from 'react';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import { HashRouter as Router, Route, Switch, Redirect }
from 'react-router-dom';
import { render } from 'react-dom';
import 'jquery/dist/jquery';
import 'materialize-css';
import '../scss/index.scss';
import configureStore from './stores/configureStore';

import { Home, NotFoundPage } from './components/presentational';

import Group from './components/containers/Group';
import NewPassword from './components/containers/NewPassword';
import Dashboard from './components/containers/Dashboard';
import Register from './components/containers/Register';
import Login from './components/containers/Login';
import Search from './components/containers/Search';
import NewGroup from './components/containers/NewGroup';
import RecoverPassword from './components/containers/RecoverPassword';

import { apiGetCurrentUser } from './actions/';
import setToken from './helpers/setToken';

const store = configureStore();

if (localStorage.token) {
  setToken(localStorage.token);
  store.dispatch(apiGetCurrentUser());
}

const isTokenExpired = () => {
  const token = jwt.decode(localStorage.getItem('token'));
  const exp = token.exp;
  const isExpired = exp < Date.now() / 1000;
  if (isExpired) {
    localStorage.removeItem('token');
  }
  return isExpired;
};


const isLoggedIn = () =>
  localStorage.token !== undefined && !isTokenExpired();

const app = document.querySelector('#app');
render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          path="/register"
          exact
          render={props =>
          (isLoggedIn() ? (<Redirect to={{ pathname: '/dashboard' }} />) :
          (<Register {...props} />))}
        />

        <Route
          path="/recover-password"
          exact
          render={props =>
          (isLoggedIn() ? (<Redirect to={{ pathname: '/dashboard' }} />) :
          (<RecoverPassword {...props} />))}
        />

        <Route
          path="/new-password/:hash"
          exact
          render={props =>
          (isLoggedIn() ? (<Redirect to={{ pathname: '/dashboard' }} />) :
          (<NewPassword {...props} />))}
        />

        <Route
          path="/login"
          render={props =>
          (isLoggedIn() ? (<Redirect to={{ pathname: '/dashboard' }} />) :
          (<Login {...props} />))}
        />

        <Route
          path="/dashboard"
          exact
          render={props =>
          (isLoggedIn() ? (<Dashboard {...props} />) :
          (<Redirect to={{ pathname: '/login' }} />))}
        />

        <Route
          exact
          path="/group/:id"
          render={props =>
          (isLoggedIn() ? (<Group {...props} />) :
          (<Redirect to={{ pathname: '/login' }} />))}
        />

        <Route
          path="/new-group"
          exact
          render={props =>
          (isLoggedIn() ? (<NewGroup {...props} />) :
          (<Redirect to={{ pathname: '/login' }} />))}
        />

        <Route
          path="/group/:id/search"
          exact
          render={props =>
          (isLoggedIn() ? (<Search {...props} />) :
          (<Redirect to={{ pathname: '/login' }} />))}
        />

        <Route path="/*" component={NotFoundPage} />

      </Switch>
    </Router>
  </Provider>, app);
