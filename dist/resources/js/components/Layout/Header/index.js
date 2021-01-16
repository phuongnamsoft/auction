import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }

    render() {
        return (
            <header className="lf-template-header py-lg-3 header-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10 col-md-12 order-lg-0 order-2 py-lg-0 py-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1 flex-lg-grow-0">
                                    <a href="/"
                                       className="lf-logo">
                                        <img src="/logo.svg"
                                             className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="flex-lg-grow-1">
                                    <nav className="d-lg-block d-none">
                                        <ul id="lf-main-nav" className="lf-main-nav d-flex justify-content-end">
                                            <li className="active"><a href="/" className="">Home</a></li>
                                            <li><a href="/auctions" className="">Auctions</a></li>
                                        </ul>
                                    </nav>
                                    <div className="lf-responsive-menu-wrapper d-lg-none d-block"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 order-lg-0 order-0 px-lg-2">
                            <ul className="d-flex justify-content-center align-items-center lf-user-menu">
                                <li>
                                    <Link to="/auth/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
