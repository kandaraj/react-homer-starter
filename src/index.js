/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./assets/images/favicon.ico'); // Tell webpack to load favicon.ico

// Include all the root level styles and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery';
import 'bootstrap';
import 'slimscroll';
import 'metismenu';
import './assets/scripts/homer';
import './assets/styles/homer/style.scss';
import './assets/styles/animate.css';
import  './assets/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css';
import  './assets/fonts/pe-icon-7-stroke/css/helper.css';

import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore({metaData:{appTitle:'App name'}});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
