// import libs
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import components
import NotFound from '../containers/NotFound';

import routes from './routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            {routes.map((route, i) => {
                if (route.auth) {
                    return <PrivateRoute key={i} {...route} />;
                }
                return <PublicRoute key={i} {...route} />;
            })}
            <Route render={()=> {
                return <NotFound/>;
            }} />
        </Switch>
    </BrowserRouter>
)

export default Routes;