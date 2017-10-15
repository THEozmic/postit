/* global sessionStorage */
import React from 'react';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import { HashRouter as Router, Route, Switch, Redirect }
from 'react-router-dom';
import { render } from 'react-dom';
import 'jquery/dist/jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/index.scss';
import configureStore from './stores/configureStore';
import { Search, Home, NewGroup, Recover, NewPassword, NotFoundPage }
from './components/presentational';
import { Group, Register, Login, Dashboard } from './components/containers';

const store = configureStore();

const isTokenExpired = () => {
  const token = jwt.decode(sessionStorage.getItem('token'));
  const date = new Date(0);
  date.setUTCDate(token.exp);
  return date < new Date();
};


const isLoggedIn = () =>
  sessionStorage.getItem('token') !== null && !isTokenExpired();

const app = document.querySelector('#app');
render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/register" component={Register} />

        <Route
          path="/login"
          render={props =>
          (isLoggedIn() ? (<Dashboard {...props} />) :
          (<Login {...props} />))}
        />

        <Route
          path="/dashboard"
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
          render={props =>
          (isLoggedIn() ? (<NewGroup {...props} />) :
          (<Redirect to={{ pathname: '/login' }} />))}
        />

        <Route
          path="/group/:id/search"
          render={props =>
          (isLoggedIn() ? (<Search {...props} />) :
          (<Redirect to={{ pathname: '/login' }} />))}
        />

        <Route path="/recover-password" component={Recover} />

        <Route path="/new-password/:hash" component={NewPassword} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>, app);
