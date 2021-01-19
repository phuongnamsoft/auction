import React, {Component, useState} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {Button, Modal, Form} from "react-bootstrap";
import HTTP from "../../../utils/HTTP";
import { toast } from 'react-toastify';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            userMaxBid: 0
        };
    }

    componentDidMount() {
        HTTP.get('user')
            .then(res => {
                if (res.status == 200) {
                    if (res.data.status === 1) {
                        this.setState({
                            ...this.state,
                            userMaxBid: res.data.item.max_bid_amount,
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

    handleShowModal() {
        this.setState({
            ...this.state,
            showModal: true
        });
    }

    handleCloseModal() {
        this.setState({
            ...this.state,
            showModal: false
        });
    }

    handleMaxBidChange(event) {
        this.setState({
            ...this.state,
            userMaxBid: event.target.value
        });
    }

    handleSaveMaxBidModal(event) {
        HTTP.post('user', {max_bid_amount: this.state.userMaxBid})
            .then(res => {
                if (res.status == 200) {
                    if (res.data.status === 1) {
                        toast.success(res.data.message)
                    } else {
                        toast.error(res.data.message)
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

        return (
            <header className="lf-template-header py-lg-3 header-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10 col-md-12 order-lg-0 order-2 py-lg-0 py-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1 flex-lg-grow-0">
                                    <a href="/"
                                       className="lf-logo">
                                        <img src="/logo.svg"
                                             className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="flex-lg-grow-1">
                                    <nav className="d-lg-block d-none">
                                        <ul id="lf-main-nav" className="lf-main-nav d-flex justify-content-end">
                                            <li className="active"><a href="/" className="">Home</a></li>
                                            <li><a href="#" onClick={this.handleShowModal.bind(this)}>Setting</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 order-lg-0 order-0 px-lg-2">
                            <ul className="d-flex justify-content-center align-items-center lf-user-menu">
                                <li>
                                    <Link to="/auth/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.handleCloseModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title><h4>Setting user max bid</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Maximum bid amount</Form.Label>
                            <Form.Control type="number" placeholder="Input user max bid" value={this.state.userMaxBid} onChange={this.handleMaxBidChange.bind(this)} />
                            <Form.Text className="text-muted">
                                This maximum amount will be split between all items where we have activated auto-bidding.
                            </Form.Text>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="secondary" onClick={this.handleCloseModal.bind(this)}>
                            Close
                        </Button>
                        <Button size="sm" variant="primary" onClick={this.handleSaveMaxBidModal.bind(this)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </header>
        );
    }
}

export default withRouter(connect(null, null)(Header));
