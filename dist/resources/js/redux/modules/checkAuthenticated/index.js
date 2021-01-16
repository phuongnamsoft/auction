// const
export const LOGIN = 'auction/checkAuthenticated/SUCCESS';
export const NOT_LOGIN = 'auction/checkAuthenticated/FAILURE';
// actionCreators
//Return authenticated
function getAuth() {
    const isLogin = localStorage.getItem('access_token');
    if (isLogin)
        return { type: LOGIN }
    else
        return { type: NOT_LOGIN }
}
//Check authenticated
export function checkAuth() {
    return dispatch => {
        dispatch(getAuth());
    }
}
// reducer
export default function reducer(state = false, action) {
    switch (action.type) {
        case LOGIN:
            return true;
        case NOT_LOGIN:
            return false;
        default:
            return state;
    }
}
