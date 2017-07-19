import React from 'react';
import { createStore, combineReducers } from 'redux';
// import { Router, Route, browserHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import 'jquery/dist/jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/index.scss';
import AppIndex from './components/app-index';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={AppIndex} />
    </Router>
  </Provider>
);

const store = createStore(todoApp);

const app = document.querySelector('#app');
render(<Root store={store} />, app);
