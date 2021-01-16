import axios from 'axios';

const API_URL = `/api/`;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = 'Basic ZGVidXQ6S3M2aStpOVk=';

axios.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response.status === 401) {
            console.log('Auth');
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            localStorage.removeItem('division');
            localStorage.removeItem('author');
            store.dispatch({ type: NOT_LOGIN });
        }
        return Promise.reject(error);
    }
);

export default axios;
