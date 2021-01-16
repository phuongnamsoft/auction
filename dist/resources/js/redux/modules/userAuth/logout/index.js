
// imports
import HTTP from '../../../../utils/HTTP';
import { NOT_LOGIN } from '../../checkAuthenticated';
// const
const LOADING = 'auction/logout/LOADING';
const LOGOUT_SUCCESS = 'auction/logout/LOAD_SUCCESS';
const LOGOUT_FAILURE = 'auction/logout/LOAD_FAILURE';



// actionCreators
function startFetchData() {
    return {
        type: LOADING
    }
}

function fetchDataSuccess(data) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    return {
        type: LOGOUT_SUCCESS,
        data
    }
}

function fetchDataFailure(err) {
    return {
        type: LOGOUT_FAILURE,
        err
    }
}
// actionCreatorAsync
export function fetchDataAsync(token) {
    return dispatch => {
        dispatch(startFetchData());
        HTTP.post('user/logout', { token })
            .then(res => { dispatch({ type: NOT_LOGIN }); dispatch(fetchDataSuccess(res.data)) })
            .catch(err => dispatch(fetchDataFailure(err)));
    }
}

// reducer
export default function reducer(state = { loading: false, loaded: false, data: null, err: null }, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case LOGOUT_SUCCESS:
            return { ...state, loading: false, loaded: true, data: action.data };
        case LOGOUT_FAILURE:
            return { ...state, loading: false, loaded: true, err: action.err };
        default:
            return state;
    }
}
