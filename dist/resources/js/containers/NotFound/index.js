import React, { Component } from 'react';

class Notfound extends Component {
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
                                <h2 className="text-center text-danger font-size-50">404</h2>
                                <h4 className="text-center text-danger font-size-18">Not Found!</h4>
                                <p className="text-center text-dark py-3">The page you are looking for might be changed,
                                    removed or not exists. Go back and try other links</p>
                                <a href="/"
                                   className="btn btn-success text-white btn-block">Go Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Notfound;
