import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import MyCountdown from "../MyCountdown";
import StringHelper from "../../../utils/StringHelper"

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
                                <span className="py-1 px-2 fz-14 font-weight-normal border-radius-0 badge badge-warning">Highest Bid</span>
                            </span>
                            <a className="fz-12 color-999 card-time d-block"
                               href="#">{this.props.item.category_name}</a>
                            <figure>
                                <Link to={'/auction/' + this.props.item.id}>
                                    <img className="card-img-top"
                                         src={this.props.item.image}
                                         alt="preview"/>
                                </Link>
                            </figure>
                        </div>
                        <div className="card-body">
                            <div className="d-inline-block">
                                <Link className="text-truncate text-capitalize grid-title mb-0" to={'/auction/' + this.props.item.id}>
                                    {this.props.item.name}
                                </Link>
                                <div className="sub-text mt-1 m-0">
                                    <i className="fa fa-user-circle-o mr-1"></i>
                                    <Link className="color-999" to={'/auction/' + this.props.item.id}>{this.props.item.user_name}</Link>
                                </div>
                            </div>
                            <div className="short-card-wrapper mt-3">
                                <div className="count-down">
                                    <div className="timer">
                                        <MyCountdown endDate={this.props.item.end_date}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-details d-block">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item bg-f5f5f5 py-3">
                                    <span className="main-text card-money d-block">
                                        <span className="fz-14 font-weight-normal"> {this.props.item.currency_code}</span>  { StringHelper.formatMoney(this.props.item.min_bid_amount) }
                                    </span>
                                    <span className="sub-text text-uppercase">Start At</span>
                                </li>
                                <li className="nav-item bg-efefef py-3">
                                    <span className="main-text d-block">
                                        { StringHelper.formatMoney(this.props.item.shipping_fee) }
                                    </span>
                                    <span className="sub-text text-uppercase">Shipping</span>
                                </li>
                                <li className="nav-item bg-f5f5f5 py-3">
						            <span className="main-text d-block">Yes</span>
                                    <span className="sub-text text-uppercase">Multi Bid</span>
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
    return {}
}
export default connect(mapStateToProps, null)(AuctionItemBlock);
