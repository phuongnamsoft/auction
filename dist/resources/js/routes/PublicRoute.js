import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from '../components/Layout';

const PublicRoutes = ({component: Component, isAuthenticated, ...rest}) => {
    return <Route
        {...rest}
        render={
            props =>
                (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
        }
    />
}

PublicRoutes.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        isAuthenticated: store.checkAuth
    };
}

export default connect(mapStateToProps)(PublicRoutes);
