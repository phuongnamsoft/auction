import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './redux/store';
import HTTP from './utils/HTTP';
import { LOGIN } from './redux/modules/checkAuthenticated';

require('bootstrap');
require('../css/app.css');

const token = localStorage.getItem('access_token');

if (token) {
    HTTP.defaults.headers.common['Authorization-Token'] = token;
    store.dispatch({ type: LOGIN });
}

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
);
