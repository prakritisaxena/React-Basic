/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

let app = document.getElementById('main');


render(<Router history={browserHistory} routes={routes} />, app);
