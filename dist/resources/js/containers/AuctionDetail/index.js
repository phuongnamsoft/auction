import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AuctionDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="content-wrapper">

                <div className="content">

                    <div className="p-b-100 p-t-80">
                        <div className="container">
                            <div className="row">

                                <div className="col-12">

                                    <div className="card mb-4 rm-border">
                                        <div className="property-title card-body px-0">

                                            <div className="property-top">

                                                <div className="row">
                                                    <div className="col-lg-8 col-md-12">

                                                        <div className="item-name font-weight-bold">Voluptas quibusdam enim quia accusantium qui. Aut non quos alias.</div>

                                                        <div className="property-overview mt-1">
                                                            <ul className="nav">
                                                                <li className="color-999">
                                                                    <i className="fa fa-flag"></i>
                                                                    By <a
                                                                    href="https://auctioneer.codemen.org/seller/54a463cda9091eabe67954b0dd34b9b5">Dorcas Marks</a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="property-overview mt-2">
                                                            <ul className="nav">
                                                                <li className="color-999">
                                                                    <i className="fa fa-clock-o"></i>
                                                                    2 days from now
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                    <div className="col-lg-4 col-md-12">

                                                        <div className="property-price align-self-center">
                                                            <h4 className="m-b-10 font-weight-bold text-capitalize">Bid
                                                                Start From</h4>
                                                            <div className="color-999">
                                                                <span>USD</span> 85
                                                            </div>
                                                            <span
                                                                className="badge text-white fz-12 font-weight-normal badge-pill badge-success">
                                                Running
                                            </span>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-7 order-lg-0">
                                    <div className="m-md-top-50">

                                        <div className="owl-six position-relative">

                                            <div id="sync1" className="owl-carousel owl-theme">
                                                <div className="item">
                                                    <img className="img-fluid"
                                                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMzAwIDI1MCI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNlZWUiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIi8+CiAgICAgICAgICAgIDx0ZXh0IGZpbGw9InJnYmEoMCwwLDAsMC41KSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGR5PSIxMC41IiBmb250LXdlaWdodD0iYm9sZCIgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgSW1hZ2UKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvc3ZnPg=="
                                                         alt="Image" />
                                                </div>
                                                <div className="item">
                                                    <img className="img-fluid"
                                                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMzAwIDI1MCI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNlZWUiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIi8+CiAgICAgICAgICAgIDx0ZXh0IGZpbGw9InJnYmEoMCwwLDAsMC41KSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGR5PSIxMC41IiBmb250LXdlaWdodD0iYm9sZCIgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgSW1hZ2UKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvc3ZnPg=="
                                                         alt="Image" />
                                                </div>
                                                <div className="item">
                                                    <img className="img-fluid"
                                                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMzAwIDI1MCI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNlZWUiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIi8+CiAgICAgICAgICAgIDx0ZXh0IGZpbGw9InJnYmEoMCwwLDAsMC41KSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGR5PSIxMC41IiBmb250LXdlaWdodD0iYm9sZCIgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgSW1hZ2UKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvc3ZnPg=="
                                                         alt="Image" />
                                                </div>
                                            </div>

                                            <div id="sync2" className="owl-carousel owl-six-2 owl-theme">
                                                <div className="item">
                                                    <img className="img-fluid"
                                                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMzAwIDI1MCI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNlZWUiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIi8+CiAgICAgICAgICAgIDx0ZXh0IGZpbGw9InJnYmEoMCwwLDAsMC41KSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGR5PSIxMC41IiBmb250LXdlaWdodD0iYm9sZCIgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgSW1hZ2UKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvc3ZnPg=="
                                                         alt="Image" />
                                                </div>
                                                <div className="item">
                                                    <img className="img-fluid"
                                                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMzAwIDI1MCI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNlZWUiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIi8+CiAgICAgICAgICAgIDx0ZXh0IGZpbGw9InJnYmEoMCwwLDAsMC41KSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGR5PSIxMC41IiBmb250LXdlaWdodD0iYm9sZCIgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgSW1hZ2UKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvc3ZnPg=="
                                                         alt="Image" />
                                                </div>
                                                <div className="item">
                                                    <img className="img-fluid"
                                                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMzAwIDI1MCI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNlZWUiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIi8+CiAgICAgICAgICAgIDx0ZXh0IGZpbGw9InJnYmEoMCwwLDAsMC41KSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGR5PSIxMC41IiBmb250LXdlaWdodD0iYm9sZCIgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgSW1hZ2UKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvc3ZnPg=="
                                                         alt="Image" />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-5 order-lg-0">

                                    <div className="s-box mb-3">
                                        <div className="s-box-header">
                                            <span> Ends </span>
                                            In
                                        </div>

                                        <div className="count-down d-inline-block">
                                            <div className="timer d-inline-block">
                                                <div>
                                                    <div className="lf-counter" data-time="325594">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="s-box">

                                        <div className="s-box-header">
                                            <span> Bidding </span>
                                            Section
                                        </div>

                                        <div className="popular-cat">
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>
                                        Auction Type  :
                                    </span>
                                                    <span
                                                        className="badge badge-info">Highest Bid</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>
                                        Multiple Bid Allowed  :
                                    </span>
                                                    <span
                                                        className="badge badge-pill bg-success text-white">Yes</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>
                                        Bid Fees  :
                                    </span>
                                                    <span className="badge badge-info badge-pill">5</span>
                                                </li>
                                            </ul>


                                            <ul className="list-group mt-3">
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <span className="font-weight-bold color-666">
                                                        <span id="pusher-text">
                                                            Minimum Bid Amount
                                                        </span>
                                                    </span>

                                                    <span className="badge bg-info text-white badge-pill">
                                                        <span className="mr-1 font-weight-normal">
                                                            USD
                                                        </span>
                                                        <span
                                                            id="pusher-amount">
                                                            85
                                                        </span>
                                                    </span>

                                                </li>
                                            </ul>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-12">
                                    <div className="border p-3 mt-3 clearfix">
                                        <div className="pull-left px-2">
                                            <h3 className="my-2 mb-0 color-666">Share This Auction</h3>
                                        </div>
                                        <div className="pull-right px-2">
                                            <a className="btn lf-toggle-border border"
                                               href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fauctioneer.codemen.org%2Fauction%2F0d7e0f6f9d21278718f26e2ed9e50353&amp;t=Voluptas+quibusdam+enim+quia+accusantium+qui.+Aut+non+quos+alias."
                                               target="_blank">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a className="btn lf-toggle-border border"
                                               href="https://twitter.com/share?text=Voluptas+quibusdam+enim+quia+accusantium+qui.+Aut+non+quos+alias.&amp;url=https%3A%2F%2Fauctioneer.codemen.org%2Fauction%2F0d7e0f6f9d21278718f26e2ed9e50353"
                                               target="_blank">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a className="btn lf-toggle-border border"
                                               href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fauctioneer.codemen.org%2Fauction%2F0d7e0f6f9d21278718f26e2ed9e50353&amp;title=https://auctioneer.codemen.org/Voluptas quibusdam enim quia accusantium qui. Aut non quos alias.&amp;"
                                               target="_blank">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a className="btn lf-toggle-border border"
                                               href="mailto:?subject=Voluptas+quibusdam+enim+quia+accusantium+qui.+Aut+non+quos+alias.&amp;body=https%3A%2F%2Fauctioneer.codemen.org%2Fauction%2F0d7e0f6f9d21278718f26e2ed9e50353"
                                               target="_self" rel="noopener noreferrer">
                                                <i className="fa fa-envelope"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="single-blog mt-4">

                                        <div className="custom-profile-nav">

                                            <nav>

                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <a className="nav-item nav-link active" id="description"
                                                       data-toggle="tab"
                                                       href="#descrip" role="tab" aria-controls="descrip"
                                                       aria-selected="true">Product Description</a>
                                                    <a className="nav-item nav-link" id="features" data-toggle="tab"
                                                       href="#featu"
                                                       role="tab" aria-controls="featu" aria-selected="false">Term
                                                        Description</a>
                                                </div>

                                            </nav>

                                            <div className="tab-content" id="nav-tabContent">

                                                <div className="tab-pane fade show active" id="descrip" role="tabpanel"
                                                     aria-labelledby="description">

                                                    <div className="mt-4">
                                                        <p className="single-blog-details text-justify">
                                                            Consectetur debitis vel repudiandae aut soluta voluptas.
                                                            Animi
                                                            optio totam magni ipsa. Aut expedita consequatur assumenda
                                                            ex ea
                                                            molestias.
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className="tab-pane fade" id="featu" role="tabpanel"
                                                     aria-labelledby="features">

                                                    <div className="mt-4">
                                                        <p className="single-blog-details text-justify">
                                                            Sunt rerum eum occaecati tempore culpa autem quo. Enim
                                                            mollitia
                                                            reiciendis autem qui rerum vel. Neque ipsa sapiente velit
                                                            id.
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>


                                    </div>
                                </div>

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
        isToggleTabControl: state.isToggleTabControl
    }
    }
    export default connect(mapStateToProps, null)(AuctionDetail);
