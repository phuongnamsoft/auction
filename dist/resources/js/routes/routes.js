import Home from '../containers/Home';
import AuctionDetail from '../containers/AuctionDetail';

const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: '/auctions',
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: '/auction/:id',
        exact: true,
        auth: false,
        component: AuctionDetail
    },
    {
        path: '/create-auction',
        exact: true,
        auth: true,
        component: Home
    }
]

export default routes;
