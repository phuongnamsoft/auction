import React, {Component} from 'react';
import {connect} from 'react-redux';
import AuctionItemBlock from '../common/AuctionItemBlock';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper">

                <div className="content">
                    <div className="cmb-content-wrapper" id="cmb-content-wrapper">

                        <section className="cmb_section mt-5 mb-5">
                            <div className="section-overlay">
                                <div className="cmb_container container">
                                    <div className="cmb_row row light-header py-3 px-3">
                                        <form action="" method="get"
                                                      className="lf-filter-form">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group d-flex">
                                                                <div className="lf-select lf-flex-1"><select
                                                                    name="p-sort"
                                                                    className="form-control lf-filter-sort-by">
                                                                    <option value="">Sort by</option>
                                                                    <option value="0">Auction Type</option>
                                                                    <option value="1">Starting Price</option>
                                                                    <option value="2">Category</option>
                                                                    <option value="3">Currency</option>
                                                                </select></div>
                                                                <button type="submit"
                                                                        className="btn btn-danger ml-1">
                                                                    <i className="fa fa-arrow-right"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="d-flex">
                                                                <div className="lf-flex-5 ml-1">
                                                                    <input type="text"
                                                                           name="p-srch"
                                                                           placeholder="search"
                                                                           value=""
                                                                           className="form-control lf-filter-search mr-0"/>
                                                                </div>
                                                                <button type="submit"
                                                                        className="auctioneer-primary-color btn btn-danger ml-1">
                                                                    <i className="fa fa-search"></i></button>
                                                                <a href="javascript:"
                                                                   className="lf-filter-toggler ml-1 btn btn-warning"><i
                                                                    className="fa fa-filter"></i></a></div>
                                                        </div>
                                                    </div>
                                                </form>
                                    </div>
                                    <div className="cmb_auction">
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
