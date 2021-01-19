import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import HTTP from "../../../utils/HTTP";
import StringHelper from "../../../utils/StringHelper"

class AuctionDetailTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {

    }

    getAuctionDetail(id) {
        HTTP.get('auction/' + id + '/bid-histories')
            .then(res => {
                console.log(res);
                if (res.status == 200) {
                    if (res.data.status === 1) {
                        this.setState({
                            ...this.state,
                            items: res.data.items,
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

    render() {
        const item = this.props.item;
        return (
            <div className="col-12">
                <div className="single-blog mt-4">

                    <div className="custom-profile-nav">

                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="bid-histories"
                                   data-toggle="tab" href="#bid-histories" role="tab" aria-controls="bid-histories"
                                   aria-selected="true">Bidding Histories</a>
                            </div>
                        </nav>

                        <div className="tab-content" id="nav-tabContent">
                                <div className="mt-4" >
                                        <table className="table table-bordered table-responsive">
                                            <tbody>
                                                <tr>
                                                    <td>ID</td>
                                                    <td>Bidder name</td>
                                                    <td>Amount</td>
                                                    <td>Is winner</td>
                                                    <td>Time</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
    }
}
export default connect(mapStateToProps, null)(AuctionDetailTabs);
