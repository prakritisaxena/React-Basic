/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import routes from './routes';

import {Router, browserHistory} from 'react-router';

let app = document.getElementById('main');

render(<Router history={browserHistory} routes={routes} />, app);
