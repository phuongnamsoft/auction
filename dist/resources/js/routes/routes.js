import Home from '../containers/Home';
import AuctionDetail from '../containers/AuctionDetail';
import Login from '../containers/Login';
import Logout from '../containers/Logout';

const routes = [
    {
        path: '/',
        exact: true,
        auth: true,
        layout: true,
        component: Home
    },
    {
        path: '/auctions',
        exact: true,
        auth: false,
        layout: true,
        component: Home
    },
    {
        path: '/auction/:id',
        exact: true,
        auth: false,
        layout: true,
        component: AuctionDetail
    },
    {
        path: '/auth/login',
        exact: true,
        auth: false,
        layout: false,
        component: Login
    },
    {
        path: '/auth/logout',
        exact: true,
        auth: false,
        layout: false,
        component: Logout
    },
]

export default routes;
