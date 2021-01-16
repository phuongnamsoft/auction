import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import validator from 'validator';
import { fetchDataAsync } from '../../redux/modules/userAuth/login';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            emailValid: false,
            passwordValid: false,
            showMessage: true,
            tabIndex: 0
        };
        this.handleCheckEmail = this.handleCheckEmail.bind(this);
        this.handleCheckPassword = this.handleCheckPassword.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.HandleKeyPress = this.HandleKeyPress.bind(this);

    }

    checkLogged() {
        setTimeout(function () {
            const token = localStorage.getItem('access_token');
            if (token) {
                window.location.href = '/';
            }
        }, 500);
    }

    handleCheckEmail(e) {
        e.preventDefault();
        if (this.state.showMessage) {
            this.state.showMessage = false;
        }
        const email = e.target.value;
        if (!email.toString().trim().length) {
            this.setState({
                ...this.state,
                email,
                emailValid: false,
                emailError: 'Required fields'
            });
            e.target.style.borderColor = "#e30813"
        } else if (!validator.isEmail(email)) {
            this.setState({
                ...this.state,
                email,
                emailValid: false,
                emailError: 'Please enter the correct email address'
            });
            e.target.style.borderColor = "#e30813"
        } else {
            this.setState({
                ...this.state,
                email,
                emailValid: true,
                emailError: ''
            });
            e.target.style.borderColor = "#313131"
        }
    }

    handleCheckPassword(e) {
        e.preventDefault();
        if (this.state.showMessage) {
            this.state.showMessage = false;
        }
        const password = e.target.value;
        if (password.toString().length < 8) {
            this.setState({
                ...this.state,
                password,
                passwordValid: false,
                passwordError: '8 or more alphanumeric characters'
            });
            e.target.style.borderColor = "#e30813"
        } else {
            this.setState({
                ...this.state,
                password,
                passwordValid: true,
                passwordError: ''
            });
            e.target.style.borderColor = "#313131"
        }
    }

    async HandleKeyPress(e) {
        if (e.key === 'Enter') {
            switch (this.state.tabIndex) {
                case 0:
                    this.refs.txtPassword.focus();
                    this.state.tabIndex = 1;
                    if (this.refs.txtEmail.value.length == 0) {
                        this.setState({
                            ...this.state,
                            emailValid: false,
                            emailError: 'Required fields'
                        });
                    }
                    break;
                case 1:
                    this.refs.btnLogin.focus();
                    this.state.tabIndex = 2;
                    if (this.refs.txtPassword.value.length == 0) {
                        this.setState({
                            ...this.state,
                            passwordValid: false,
                            passwordError: '8 or more alphanumeric characters'
                        });
                    }
                    break;
                case 2:
                    this.refs.txtEmail.focus();
                    this.setState({
                        ...this.state,
                        tabIndex: 0
                    });
                    break;
                default:
                    break;
            }
            if (this.state.emailValid && this.state.passwordValid) {
                this.props.fetchLogin(this.state.email, this.state.password);
                this.checkLogged();
            }
        }
    }

    async handleClickLogin(e) {
        e.preventDefault();
        if (this.state.emailValid && this.state.passwordValid) {
            this.props.fetchLogin(this.state.email, this.state.password);
            this.checkLogged();
        }

    }

    render() {
        return (
            <div className="centralize-wrapper">
                <div className="centralize-inner">
                    <div className="centralize-content lf-no-header-wrapper">

                        <div className="lf-no-header-inner">
                            <div className="mx-lg-4">
                                <div className="text-center mb-3">
                                    <a href="/" className="lf-logo">
                                        <img src="/logo.svg"
                                             className="img-fluid" alt=""/>
                                    </a>
                                </div>
                                <h4 className="text-center mb-4">Login Panel</h4>
                                <form className="laraframe-form" action="/login" method="post"
                                      id="loginForm">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-user"></i></div>
                                        </div>
                                        <input type="text" className="form-control" name="email"
                                               value={this.state.email} autoFocus
                                               placeholder="Username" onBlur={this.handleCheckEmail}
                                               onChange={this.handleCheckEmail} onKeyPress={this.HandleKeyPress}/>
                                        <span className="invalid-feedback">{this.state.emailError}</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-lock"></i></div>
                                        </div>
                                        <input type="password" className="form-control" name="password"
                                               placeholder="Password" value={this.state.password} onBlur={this.handleCheckPassword} onChange={this.handleCheckPassword} onKeyPress={this.HandleKeyPress}/>
                                        <span className="invalid-feedback" data-name="password">{this.state.passwordError}</span>
                                    </div>

                                    <div className="form-group">
                                        <button type="button" className="btn btn-success btn-block form-submission-button" onClick={this.handleClickLogin}>Login</button>
                                    </div>
                                </form>
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
        login: state.login,
        isAuthenticated: state.checkAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (email, password) => {
            dispatch(fetchDataAsync(email, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
