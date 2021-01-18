import axios from 'axios';

const API_URL = `/api/`;
import store from '../../redux/store';
import { NOT_LOGIN } from '../../redux/modules/checkAuthenticated';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            localStorage.removeItem('access_token');
            store.dispatch({ type: NOT_LOGIN });
        }
        return Promise.reject(error);
    }
);

export default axios;
