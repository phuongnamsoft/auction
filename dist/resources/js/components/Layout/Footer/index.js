import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0
        };

    }



    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="py-4">
                        <div className="container">

                            <div className="footer-border">
                                <div className="p-b-50">
                                    <div className="row">

                                        <div className="col-md-6 col-sm-12 p-t-50">
                                            <h4 className="font-size-18 text-uppercase font-weight-normal mb-4">get in
                                                touch</h4>

                                            <div className="get-in-touch">
                                                <ul>
                                                    <li className="d-block">
                                                        <i className="fa fa-map-marker mr-3"></i>
                                                        Scopic Software 12 Carly Circle
                                                        Rutland MA 01543 US
                                                    </li>
                                                    <li className="d-block">
                                                        <i className="fa fa-phone"></i>
                                                        +1 (508) 886-3240
                                                    </li>
                                                    <li className="d-block">
                                                        <i className="fa fa-envelope"></i>
                                                        <a href="#">
                                                            sales@scopicsoftware.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-12 p-t-50">
                                            <h4 className="font-size-18 text-uppercase font-weight-normal mb-4">Discover
                                                Links</h4>

                                            <div className="get-in-touch">
                                                <ul>
                                                    <li className="d-block">
                                                        <i className="fa fa-link"></i>
                                                        <a href="/auction-rules">
                                                            Auction Rules
                                                        </a>
                                                    </li>

                                                    <li className="d-block">
                                                        <i className="fa fa-link"></i>
                                                        <a href="/deposit-policy">
                                                            Deposit Policy
                                                        </a>
                                                    </li>

                                                    <li className="d-block">
                                                        <i className="fa fa-link"></i>
                                                        <a href="/withdrawal-policy-page">
                                                            Withdrawal Policy
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-bottom">
                                <div className="row">

                                    <div className="col-md-12">
                                        <p>&copy; Copyright 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
