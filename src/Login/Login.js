import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import './Login.css'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
        }

        this.responseGoogle = this.responseGoogle.bind(this)
    }

    responseGoogle(response) {
        console.log(response);
        this.setState({
            isLogin: true
        })
    }
    render() {

        if (this.state.isLogin === true) {
            return (
                <Redirect to={'/Search'} />
            )
        }

        return (
            <div className="background">
                <div className="cover-card">
                    <h1>Welcome to HealthCare</h1>
                    <div className="login-button">
                        <GoogleLogin
                            className="login-google"
                            clientId="531140418462-uvges3uq62e5sucgofsdjmgnrr26kv9r.apps.googleusercontent.com"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
