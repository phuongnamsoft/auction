import React, {Component} from 'react';
import {connect} from 'react-redux';
import AuctionItemBlock from '../common/AuctionItemBlock';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper">

                <div className="content">
                    <div className="cmb-content-wrapper" id="cmb-content-wrapper">

                        <section className="cmb_section mt-5 mb-5" data-cmb-wrapper="cmb_section" data-cmb-id="11"
                                 data-cmb-element-type="static-layout">
                            <div className="section-overlay">
                                <div className="cmb_container container" data-cmb-wrapper="cmb_container"
                                     data-cmb-element-type="static-layout" data-cmb-id="12">
                                    <div className="cmb_row row" data-cmb-wrapper="cmb_row"
                                         data-cmb-element-type="static-layout" data-cmb-id="13">
                                        <div className="cmb_column col-sm-12" data-cmb-wrapper="cmb_column"
                                             data-cmb-element-type="static-layout" data-cmb-id="14">

                                            <div className="cmb-margin-bottom cmb_featured_title cmb-element"
                                                 data-cmb-wrapper="cmb_featured_title" data-cmb-id="16"
                                                 data-cmb-element-type="static-layout">
                                                <div className="cmb-title-wrapper">
                                                    <h2 className="cmb-title"><span
                                                        className="cmb-single-line-editable-text cmb-title-highlight-color">Latest</span>
                                                        <span className="cmb-single-line-editable-text">Auctions</span>
                                                    </h2>
                                                    <div className="cmb-title-border"></div>
                                                    <div className="ml-auto">
                                                        <Link to="/auctions" className="cmb-title-link"><span className="cmb-single-line-editable-text">View All Auction</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-cmb-wrapper="cmb_auction" data-cmb-id="15"
                                         data-cmb-element-type="dynamic-layout" className="cmb_auction"
                                         data-cmb-dynamic-values="name:short_code_auction_list|column:3|item:6|type:latest">
                                        <div className="row">
                                            <AuctionItemBlock/>
                                            <AuctionItemBlock/>
                                            <AuctionItemBlock/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

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
    export default connect(mapStateToProps, null)(Home);
