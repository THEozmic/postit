/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let whichCompose;

if (process.env.NODE_ENV === 'production') {
  whichCompose = compose(applyMiddleware(thunk));
} else {
  whichCompose = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const configureStore = (initialState =>
  createStore(
    rootReducer,
    initialState,
    whichCompose
));

export default configureStore;
