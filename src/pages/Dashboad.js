import React, { Component } from 'react';


class Dashboad extends Component {

  constructor(props) {
    super(props);
    let username = localStorage.getItem('username');
    let mobileno = localStorage.getItem('mobileno');
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    var getauth = localStorage.getItem('auth');

    if (!getauth) {
      alert("Please login first");
      this.props.history.push("/sign-in");

    }

    this.state = {
      username: username,
      email: email,
      password: password,
      mobileno: mobileno
    }


    this.handleSignOut = this.handleSignOut.bind(this);
  }


  handleSignOut() {

    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.clear();
    this.props.history.push("/");
  }

  render() {
    return (


      <div className="main table-position">

        <h2 className="change-color">Welcome....{this.state.username}</h2>
        <table htmlcolspan='3'>

          <tr>
            <td>Username</td>
            <td>{this.state.username}</td>
          </tr>
          <tr>
            <td>EmailId</td>
            <td>{this.state.email}</td>

          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{this.state.mobileno}</td>

          </tr>
        </table>
        <br></br>

        <button className="button1 button3" onClick={this.handleSignOut}>Sign Out</button>


      </div>




    );
  }
}

export default Dashboad;
