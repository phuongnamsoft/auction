// imports
import HTTP from '../../../utils/HTTP';
// const
const LOADING = 'auction/getComic/LOADING';
const LOAD_SUCCESS = 'auction/getComic/LOAD_SUCCESS';
const LOAD_FAILURE = 'auction/getComic/LOAD_FAILURE';

// actionCreators
function startFetchData() {
    return {
        type: LOADING
    }
}

function fetchDataSuccess(data, search, sort, page) {
    return {
        type: LOAD_SUCCESS,
        data,
        search,
        sort,
        page
    }
}

function fetchDataFailure(err) {
    return {
        type: LOAD_FAILURE,
        err
    }
}

export function fetchDataAsync(search = null, sort = null, page = 0) {
    let params = '';

    if (search) params += '&search=' + search
    if (sort) params += '&sort=' + sort
    if (page >= 0) params += '&page=' + page

    console.log(params);
    return dispatch => {
        dispatch(startFetchData());
            HTTP.get('auctions' + params)
            .then(res => dispatch(fetchDataSuccess(res.data, search, sort, page )))
            .catch(err => dispatch(fetchDataFailure(err)));

    }
}

// reducer
export default function reducer(state = { loading: false, loaded: false, data: null, err: null, readMore: false, search: '', sort: 'desc', page: 0}, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true, readMore: false, data: null};
        case LOAD_SUCCESS:
            return { ...state, loading: false, loaded: true, data: action.data, readMore: true, search: action.search, sort: action.sort, page: action.page };
        case LOAD_FAILURE:
            return { ...state, loading: false, loaded: true, err: action.err, readMore: false };
        default:
            return state;
    }
}
