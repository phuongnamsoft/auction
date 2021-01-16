import React, {Component} from 'react';
import {connect} from 'react-redux';

class AuctionItemBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-3  col-md-4">

                <div className=" grid-card">
                    <div className="card card-grid card-style-1">

                        <div className="card-image-area position-relative">
                            <span className="auction-badge">
                                <span
                                    className="py-1 px-2 fz-14 font-weight-normal border-radius-0 badge badge-warning">Highest Bid</span>
                            </span>
                            <a className="fz-12 color-999 card-time d-block"
                               href="/auctions?category=doloremque">doloremque</a>
                            <figure>

                                <a href="/auction/3f55089322ab960735208f1da58b21b6">
                                    <img className="card-img-top"
                                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMzAwIDI1MCI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNlZWUiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIi8+CiAgICAgICAgICAgIDx0ZXh0IGZpbGw9InJnYmEoMCwwLDAsMC41KSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGR5PSIxMC41IiBmb250LXdlaWdodD0iYm9sZCIgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgSW1hZ2UKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvc3ZnPg=="
                                         alt="preview" />
                                </a>

                            </figure>
                        </div>

                        <div className="card-body">

                            <div className="d-inline-block">
                                <a className="text-truncate text-capitalize grid-title mb-0"
                                   href="/auction/3f55089322ab960735208f1da58b21b6">
                                    Dolorem eos nisi perspiciatis incidunt.
                                </a>
                                <div className="sub-text mt-1 m-0">
                                    <i className="fa fa-user-circle-o mr-1"></i>
                                    <a className="color-999"
                                       href="/seller/cd533baf6def97d31477fc2200df5e55">Houston
                                        Koch</a>
                                </div>
                            </div>

                            <div className="short-card-wrapper mt-3">

                                <div className="count-down">
                                    <div className="timer">
                                        <div className="lf-counter short-card d-flex justify-content-between" data-time="1543334">
                                            <div className="d-none"></div>
                                            <div className="day timer-unit">
                                                <div className="d-flex timer-inner">
                                                    <span className="number">0</span>
                                                    <span className="number">0</span>
                                                </div>
                                                <div className="format">Days</div>
                                            </div>
                                            <div className="hour timer-unit">
                                                <div className="d-flex timer-inner">
                                                    <span className="number">0</span>
                                                    <span className="number">0</span>
                                                </div>
                                                <div className="format">Hours</div>
                                            </div>
                                            <div className="min timer-unit">
                                                <div className="d-flex timer-inner">
                                                    <span className="number">0</span>
                                                    <span className="number">0</span>
                                                </div>
                                                <div className="format">Minutes</div>
                                            </div>
                                            <div className="sec timer-unit">
                                                <div className="d-flex timer-inner">
                                                    <span className="number">0</span>
                                                    <span className="number">0</span>
                                                </div>
                                                <div className="format">Seconds</div>
                                            </div>
                                            <div className="d-none"><span
                                                className="badge badge-danger py-2 fz-16 px-3">Expired</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="item-details d-block">

                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item bg-f5f5f5 py-3">
                        <span className="main-text card-money d-block">
                           <span
                               className="fz-14 font-weight-normal"> USD</span> 97
                        </span>
                                    <span
                                        className="sub-text text-uppercase">Start At</span>
                                </li>
                                <li className="nav-item bg-efefef py-3">
                        <span className="main-text d-block">
                            Free
                        </span>
                                    <span
                                        className="sub-text text-uppercase">Shipping</span>
                                </li>
                                <li className="nav-item bg-f5f5f5 py-3">
                                <span
                                    className="main-text d-block">Yes</span>
                                    <span
                                        className="sub-text text-uppercase">Multi Bid</span>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, null)(AuctionItemBlock);
