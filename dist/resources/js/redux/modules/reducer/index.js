// Created file by Vang Huynh
import { combineReducers } from 'redux';

import userLogin from '../userAuth/login';
import userLogout from '../userAuth/logout';
import checkAuth from '../checkAuthenticated';

const reducer = combineReducers({
    checkAuth,
});
export default reducer;
