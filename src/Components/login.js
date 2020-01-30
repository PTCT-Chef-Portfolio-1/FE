import React, {Component} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";


class login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };
    onSubmit = e => {
        e.preventDefault();
        const loginData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        Axios()
            .post()
            .then(res => {
                
            })
            .catch (err => console.log(err));

    };
    render() {
        const { errors } = this.state;
        return (
            <div>
                <h3>Login</h3>
                <form noValidate onSubmit={this.onSubmit}>
                    <label htmlFor="name"> 
                        <input
                            placeholder= "Name"
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.loginData}
                            id="name"
                            type="name"
                        />
                    </label>

                    <label htmlFor="email"> 
                        <input
                            placeholder= "Email"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.loginData}
                            id="email"
                            type="email"
                        />
                    </label>

                    <label htmlFor="password"> 
                        <input
                            placeholder= "Password"
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.loginData}
                            id="password"
                            type="password"
                        />
                    </label>

                    <button type="submit">Login</button>

                </form>

                <Link to="/register">Sign up if you don't have an account!</Link>
            </div>
        )
    }

}

export default login; 
    



