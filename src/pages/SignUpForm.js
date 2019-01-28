import React, { Component } from 'react';
import { HashRouter as Route, Link } from 'react-router-dom';
import SignInForm from './SignInForm';

class SignUpForm extends Component {


  constructor(props) {
    // this.validator = new SimpleReactValidator();
    super(props);

    this.state = {

      username: '',
      email: '',
      password: '',
      mobileno: '',
      errors: {}


    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value });
  }


  validationForm() {

    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;
    let mobileno = this.state.mobileno;
    let errors = {};
    let formIsValid = true;
    if (!username) {
      formIsValid = false;
      errors["username"] = "Please enter your name";
    }


    if (typeof username !== "undefined") {
      if (!username.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }



    if (!password) {
      formIsValid = false;
      errors["password"] = "Please enter your Password";
    }

    if (!mobileno) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof mobileno !== "undefined") {
      if (!mobileno.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }


    if (typeof email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }




    this.setState({

      errors: errors

    });
    return formIsValid;

  }

  handleSubmit(e) {

    e.preventDefault();
    if (this.validationForm()) {
      let mobileno = this.state.mobileno;
      let username = this.state.username;
      let email = this.state.email;
      let password = this.state.password;
      this.setState({ username: username, mobileno: mobileno, email: email, password: password });

      localStorage.setItem('mobileno', this.state.mobileno);
      localStorage.setItem('username', this.state.username);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password', this.state.password);
      this.props.history.push("/sign-in");
    }

  }

  render() {
    return (
      <div id="main-registration-container main ">
        <div id="register">
          <h2>Registration</h2>
          <form name="userRegistrationForm" onSubmit={this.handleSubmit} >
            <label>Name:</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.username}</div>

            <label>Phone Number:</label>
            <input type="text" name="mobileno" value={this.state.mobileno} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.mobileno}</div>

            <label>Email ID:</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.email}</div>

            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>

            <input type="submit" className="button" value="Register" />
          </form>

          <Route exact path="/sign-in" component={SignInForm}></Route>
          <br />
          Already login ? <Link to="/sign-in" className="">Sign In</Link><br></br>
        </div>

      </div>





    );
  }
}

export default SignUpForm;
