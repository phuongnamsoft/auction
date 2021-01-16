import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataAsync } from '../../redux/modules/userAuth/logout';
class Logout extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const token = localStorage.getItem('access_token');
        if (token)
            this.props.fetchLogout(token);
    }
    render() {
        return (
            <div className="centralize-wrapper">
                <div className="centralize-inner">
                    <div className="centralize-content lf-no-header-wrapper">
                        <div className="text-center mb-md-4 mb-3">
                            <a href="/" className="lf-logo">
                                <img src="/logo.png"
                                     className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="lf-no-header-inner">
                            <div className="m-lg-4">
                                <p className="text-center text-dark py-3">You just logged out </p>
                                <a href="/auth/login" className="btn btn-success text-white btn-block">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        logout: state.logout
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogout: (token) => {
            dispatch(fetchDataAsync(token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
