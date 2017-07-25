import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import 'jquery/dist/jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/index.scss';
import store from './stores';
import App from './components/containers/app-index';

const Root = ({ store }) => (
  <Provider store={ store.configure(null) }>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

const app = document.querySelector('#app');
render(<Root store={ store } />, app);
