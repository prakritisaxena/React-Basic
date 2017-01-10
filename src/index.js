/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import createStore from "./store";
import {Provider} from 'react-redux';

let app = document.getElementById('main');

let store = createStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , app);
