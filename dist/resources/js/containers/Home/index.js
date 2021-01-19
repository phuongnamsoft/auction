import React, {Component} from 'react';
import {connect} from 'react-redux';
import AuctionItemBlock from '../common/AuctionItemBlock';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import HTTP from '../../utils/HTTP';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            items: [],
            keywords: null,
            priceSort: null,
            page: 1,
            pageCount: 1
        };
    }

    componentDidMount() {
        this.getContentItems();
    }

    handlePageChange(pageNumber) {
        console.log((pageNumber.selected + 1));
        this.setState({
            page: (pageNumber.selected + 1)
        }, () => {
            this.getContentItems();
        });
    }

    handleSortChange(event) {
        console.log(event.target.value);
        this.setState({
            priceSort: event.target.value
        }, () => {
            this.getContentItems();
        });
    }

    handleSearchChange(event) {
        console.log(event.target.value);
        this.setState({
            keywords: event.target.value
        }, () => {
            this.getContentItems();
        });
    }

    getContentItems() {
        let params = '';

        if (this.state.keywords) params += '&search=' + this.state.keywords
        if (this.state.priceSort) params += '&sort=' + this.state.priceSort
        if (this.state.page >= 0) params += '&page=' + this.state.page

        HTTP.get('auctions?' + params)
            .then(res => {
                console.log(res);
                if (res.status == 200) {
                    this.setState({
                        ...this.state,
                        items: res.data.data,
                        pageCount: res.data.last_page,
                    });
                } else {
                    alert('Failed to handle the data. If it continues many times, please contact the administrator.\n');
                }
            })
            .catch(function () {
                alert('Failed to connect to the server.');
            });
    }

    render() {
        const {error, isLoaded, items} = this.state;

        return (
            <div className="content-wrapper">
                <div className="content">
                    <div className="cmb-content-wrapper">
                        <section className="cmb_section mt-5 mb-5">
                            <div className="section-overlay">
                                <div className="cmb_container container">
                                    <div className="row">
                                        <div className="col-md-12 light-header py-3 px-3">
                                            <form action="" method="get"
                                                  className="lf-filter-form">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group d-flex">
                                                            <div className="lf-select lf-flex-1">
                                                                <select className="form-control"
                                                                        onChange={this.handleSortChange.bind(this)}
                                                                        value={this.state.priceSort}>
                                                                    <option value="">Sort by price</option>
                                                                    <option value="asc">Asc</option>
                                                                    <option value="desc">Desc</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex">
                                                            <div className="lf-flex-5 ml-1">
                                                                <input type="text" placeholder="search"
                                                                       className="form-control mr-0"
                                                                       onChange={this.handleSearchChange.bind(this)}
                                                                       value={this.state.keywords}/>
                                                            </div>
                                                            <button type="button" className="btn btn-danger ml-1">
                                                                <i className="fa fa-search"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="cmb_auction">
                                        <div className="row">
                                            {items && items.map((item, i) => <AuctionItemBlock key={i} item={item}/>)}
                                        </div>
                                        <div className="row mt-3">
                                            <div className="lf-pagination col-md-12">
                                                <ReactPaginate pageCount={this.state.pageCount}
                                                   pageRangeDisplayed={1}
                                                   marginPagesDisplayed={1}
                                                   containerClassName="pagination"
                                                   pageClassName="page-item"
                                                   activeClassName={'active'}
                                                   pageLinkClassName={'page-link'}
                                                   previousClassName="page-item"
                                                   previousLinkClassName="page-link"
                                                   nextClassName="page-item"
                                                   nextLinkClassName="page-link"
                                                   onChange={this.handlePageChange.bind(this)}
                                                   onPageChange={this.handlePageChange.bind(this)} />
                                            </div>
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
