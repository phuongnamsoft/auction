import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Layout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
                <ToastContainer />
            </div>
        );
    }
}

export default connect(null, null)(Layout);
