import React, { Component } from 'react';
import { HashRouter as Route, Link } from 'react-router-dom';
import SignUpForm from './SignInForm';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
           
            password: '',
            errors: {},


        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value })
    }


    validationForm() {


        let email = this.state.email;
        let password = this.state.password;
        let errors = {};
        let formIsValid = true;


        if (!email) {

            formIsValid = false;
            errors["email"] = "Please enter your email";
        }

        if (!password) {
            formIsValid = false;
            errors["password"] = "Please enter your Password";
        }


        this.setState({

            errors: errors

        });
        return formIsValid;
    }



    handleSubmit() {


        if (this.validationForm()) {
            var loginname = localStorage.getItem('username');
            var loginemail = localStorage.getItem('email');
            var loginpass = localStorage.getItem('password');
            let email = this.state.email;
            let password = this.state.password;
            this.setState({ email: email, password: password });
            if (loginemail === this.state.email && loginpass === this.state.password) {
                localStorage.setItem('auth', 'successful-login');
                this.props.history.push("/dashboard");
            }
            else {

                alert('Enter your correct email and password');

            }
        }
    }

    render() {
        return (

            <div id="main-registration-container ">
                <div className="image-logo"></div>
                <div id="login">
                    <h2>Login</h2>
                    <form name="userRegistrationForm" onSubmit={this.handleSubmit} >
                        {/* <div className="errorMsg">{this.state.errors.isvalild}</div> */}

                        <label>Email ID:</label>

                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.email}</div>

                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.password}</div>


                        <input type="submit" className="button" value="Register" />
                        
                        <Route exact path="/" component={SignUpForm}></Route>
             <br/>
             Create Account <Link to="/" className="">Sign Up</Link><br></br>
                    </form>

                </div>
            </div>
        );
    }
}

export default SignInForm;
