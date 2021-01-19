import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import HTTP from "../../utils/HTTP";
import * as moment from "moment";
import StringHelper from "../../utils/StringHelper"
import MyCountdown from "../common/MyCountdown";
import AuctionDetailTabs from "./AuctionDetailTabs";

class AuctionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            item: null,
            minBidAmount: 0,
            currentBidAmount: 0,
            auctionId: this.props.match.params.id
        };
    }

    componentDidMount() {
        this.getAuctionDetail(this.props.match.params.id);
    }

    getAuctionDetail(id) {
        HTTP.get('auction/' + id)
            .then(res => {
                if (res.status == 200) {
                    if (res.data.status === 1) {
                        this.setState({
                            ...this.state,
                            item: res.data.item,
                            minBidAmount: parseInt(res.data.item.min_bid_amount < res.data.item.currentBidAmount ? res.data.item.currentBidAmount : res.data.item.min_bid_amount),
                            currentBidAmount: parseInt(res.data.item.min_bid_amount < res.data.item.currentBidAmount ? res.data.item.currentBidAmount : res.data.item.min_bid_amount) + 1,
                        });
                    } else {
                        alert(res.data.message);
                        window.location.href = '/';
                    }
                } else {
                    alert('Failed to handle the data. If it continues many times, please contact the administrator.\n');
                    window.location.href = '/';
                }
            })
            .catch(function () {
                alert('Failed to connect to the server.');
            });
    }

    currentBidAmountChange(event) {
        this.setState({
            ...this.state,
            currentBidAmount: event.target.value
        });
    }

    bidNowBtn(event) {

    }

    autoBidBtn(event) {
        const auctionId = this.props.match.params.id;
        HTTP.post('auction/' + auctionId + '/auto-bid', {})
            .then(res => {
                if (res.status == 200) {
                    if (res.data.status === 1) {
                        alert('Successfully.\n');
                    } else {
                        alert(res.data.message);
                        window.location.href = '/';
                    }
                } else {
                    alert('Failed to handle the data. If it continues many times, please contact the administrator.\n');
                    window.location.href = '/';
                }
            })
            .catch(function () {
                alert('Failed to connect to the server.');
            });
    }

    render() {
        const {item} = this.state;
        if (!item) {
            return (<div>404 not found</div>);
        }

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

                                                        <div
                                                            className="item-name font-weight-bold">{item.name}</div>

                                                        <div className="property-overview mt-1">
                                                            <ul className="nav">
                                                                <li className="color-999">
                                                                    <i className="fa fa-flag"></i>
                                                                    By <a href="#">{item.user_name}</a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="property-overview mt-2">
                                                            <ul className="nav">
                                                                <li className="color-999">
                                                                    <i className="fa fa-clock-o"></i>
                                                                    {item.created_at}
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                    <div className="col-lg-4 col-md-12">

                                                        <div className="property-price align-self-center">
                                                            <h4 className="m-b-10 font-weight-bold text-capitalize">Bid
                                                                Start From</h4>
                                                            <div className="color-999">
                                                                <span>{item.currency_code}</span> {StringHelper.formatMoney(item.min_bid_amount)}
                                                            </div>
                                                            <span
                                                                className="badge text-white fz-12 font-weight-normal badge-pill badge-success"> Running </span>
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
                                            <div className="owl-carousel owl-theme">
                                                <div className="item">
                                                    <img className="img-fluid" src={item.image} alt="Image"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-5 order-lg-0">

                                    <div className="s-box mb-3">
                                        <div className="s-box-header">
                                            <span> Ends </span> In
                                        </div>

                                        <div className="count-down d-inline-block">
                                            <div className="timer d-inline-block">
                                                <MyCountdown endDate={item.end_date}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="s-box">

                                        <div className="s-box-header">
                                            <span>Bidding</span> Section
                                        </div>

                                        <div className="popular-cat">
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <span> Auction Type: </span>
                                                    <span className="badge badge-info">Highest Bid</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <span> Multiple Bid Allowed: </span>
                                                    <span className="badge badge-pill bg-success text-white">Yes</span>
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
                                                        <span
                                                            className="mr-1 font-weight-normal">{item.currency_code}</span>
                                                        <span
                                                            id="pusher-amount">{StringHelper.formatMoney(this.state.minBidAmount)}</span>
                                                    </span>

                                                </li>
                                            </ul>

                                            <div className="list-group mt-3">
                                                <div className="list-group-item py-4">
                                                    <div className="form-group">
                                                        <span className="d-flex justify-content-center">
                                                            <input min={this.state.minBidAmount + 1}
                                                                   value={this.state.currentBidAmount}
                                                                   onChange={this.currentBidAmountChange.bind(this)}
                                                                   type="number" className="input-number color-666"/>
                                                        </span>
                                                        <span className="invalid-feedback d-block"></span>
                                                    </div>
                                                    <button type="button"  className="btn lf-custom-btn w-100 float-right" onClick={this.bidNowBtn.bind(this)}>Bid Now</button>
                                                    <button type="button" className="btn btn-success w-100 float-right mt-2" onClick={this.autoBidBtn.bind(this)}>Auto Bid</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <AuctionDetailTabs item={item}/>

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
