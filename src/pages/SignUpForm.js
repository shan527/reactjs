import React, { Component } from 'react';

class SignUpForm extends Component {


  constructor(props) {
    // this.validator = new SimpleReactValidator();
    super(props);

    this.state = {

      username: '',
      email: '',
      password: '',
      errors: {}



    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value });
  }

  //  handleSubmit(e){

  //     localStorage.setItem('username',this.state.username);
  //     localStorage.setItem('email',this.state.email);
  //     localStorage.setItem('password',this.state.password);
  //     this.props.history.push("/sign-in");
  //    e.preventDefault();

  //  }  


  validationForm() {

    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;
    let errors = {};
    let formIsValid = true;
    if (!username) {
      formIsValid = false;
      errors["username"] = "Please enter your name";
    }

      if(!password){
        formIsValid = false;
        errors["password"]="Please enter your Password";
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

      let username = this.state.username;
      let email = this.state.email;
      let password = this.state.password;
      this.setState({ username: username , email:email , password:password });
     
   
          localStorage.setItem('username',this.state.username);
          localStorage.setItem('email',this.state.email);
          localStorage.setItem('password',this.state.password);
          this.props.history.push("/sign-in"); 
    }

  }

  render() {
    return (
      <div id="main-registration-container main ">
        <div id="register">
          <h3>Registration page</h3>
          <form name="userRegistrationForm" onSubmit={this.handleSubmit} >
            <label>Name</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.username}</div>

            <label>Email ID:</label>
            <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.email}</div>

            <label>Password</label>
            <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>

            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div>





    );
  }
}

export default SignUpForm;
