
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './Assigment/form.css';
class SignUpForm extends Component {
    render() {
      return (
         
      
        <div className="FormCenter">

        <form className="FormFields" >
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button> <a herf="/" className="FormField__Link">Create an account</a>
          </div>
        </form>

        </div>
  



      );
    }
  }
  
export default SignUpForm;




////////impotarnt/////


import React, { Component } from 'react';

class SignUpForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      emailid:''
    }
    this.username = React.createRef();
    this.emailid  =React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };


  handleChange(event) {
   
    const username = this.username.current.value;

    console.log(username);

    this.setState({ username: event.target.value });
    //console.log(this.state.value);

  }


  
  handleChange2(event) {

    const emailid = this.emailid.current.value;
    console.log(emailid);
    this.setState({emailid: event.target.value });
    
    //console.log(this.state.value);

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    const username = this.username.current.value;
    const emailid =this.emailid.current.value;
      alert("username:" + username + "EmailID:" + emailid);
   
    }


  render() {
    return (
      <div id="main-registration-container">
      <div id="register">
        <h3>Login page</h3>
        <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
          <label>Name</label>
          <input type="text" name="username" ref={this.username} value={this.state.username} onChange={this.handleChange} />
         

          <label>Email ID:</label>
          <input type="text" name="emailid" ref={this.emailid} value={this.state.emailid} onChange={this.handleChange2} />
         
{/* 
        <label>Mobile No:</label>
      <input type="text" name="mobileno" value ={this.state.fields.username} />
      <div className="errorMsg"></div>
      <label>Password</label>
      <input type="password" name="password"  /> */}

          
          <input type="submit" className="button" value="Register" />
        </form>
      </div>
    </div>

      );
  }
}


export default SignUpForm;


//important////