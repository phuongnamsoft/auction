import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';

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
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        isToggleMenu: state.isToggleMenu,
        isToggleSearch: state.isToggleSearch,
        isToggleMessageForm: state.isToggleMessageForm,
        isToggleReplyForm: state.isToggleReplyForm
    };
}

export default connect(mapStateToProps, null)(Layout);
