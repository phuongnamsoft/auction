
// imports
import axios from 'axios';
import HTTP from '../../../../utils/HTTP';
import { LOGIN } from '../../checkAuthenticated';
// const
const LOADING = 'auction/login/LOADING';
const LOGIN_SUCCESS = 'auction/login/LOAD_SUCCESS';
const LOGIN_FAILURE = 'auction/login/LOAD_FAILURE';



// actionCreators
function startFetchData() {

    return {
        type: LOADING
    }
}

function fetchDataSuccess(data) {
    if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', data.id);
        HTTP.defaults.headers.common['Authorization-Token'] = data.access_token;
    }
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

function fetchDataFailure(err) {
    return {
        type: LOGIN_FAILURE,
        err
    }
}
// actionCreatorAsync
export function fetchDataAsync(email, password) {
    return dispatch => {
        dispatch(startFetchData());
        axios.post('user/login', { email, password })
            .then(res => { dispatch({ type: LOGIN }); dispatch(fetchDataSuccess(res.data)) })
            .catch(err => dispatch(fetchDataFailure(err)));

    }
}

// reducer
export default function reducer(state = { loading: false, loaded: false, data: null, err: null }, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true, data: null, err: null };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, loaded: true, data: action.data, err: null };
        case LOGIN_FAILURE:
            return { ...state, loading: false, loaded: true, err: action.err, data: null };
        default:
            return state;
    }
}
