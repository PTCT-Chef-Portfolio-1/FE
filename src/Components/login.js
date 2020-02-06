import React, {Component} from "react";
import Axios from "axios";
import AxioWithAuth, { AxiosWithAuth } from '../AxiosWithAuth'
import {Link} from "react-router-dom";


class login extends Component {
    constructor(props) {
        super(props);
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
            username: this.state.email,
            password: this.state.password
        };
        console.log(loginData)
        Axios
            .post('https://backend-chef.herokuapp.com/api/login/login', loginData)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.id);
                this.props.history.push(`/chefdashboard/${localStorage.getItem('userId')}`)
            })
            .catch (err => console.log(err));

    };
    render() {
        const { errors } = this.state;
        return (
            <div>
                <h3>Login</h3>
                <form noValidate onSubmit={this.onSubmit}>
                    {/* <label htmlFor="name"> 
                        <input
                            placeholder= "Name"
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.loginData}
                            id="name"
                            type="name"
                        />
                    </label> */}

                    <label htmlFor="Username"> 
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

                <Link to="/RegisterPage">Sign up if you don't have an account!</Link>
            </div>
        )
    }

}

export default login; 
    



