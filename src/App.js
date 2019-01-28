import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './Sidebar.css';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import Dashboad from './pages/Dashboad';
import Logout from './pages/Logout';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">

            <div className="PageSwitcher">
              {/* <a href="#" className="PageSwitcher__Item">Sigin</a>
            <a href="#" className=" PageSwitcher__Item PageSwitcher__Item--Active" >Sig Up</a> */}
            </div>

            <div className="sidenav">

              <Link to="/dashboard" className="Link">dashboard</Link>
              <Link to="/" className="Link">Sign Up</Link><br></br>
              <Link to="/sign-in" className="Link">Sign In</Link><br></br>
              
              {/* <Link to ="/logout" className="Link" >Sign Out</Link><br></br> */}

            </div>

            <Route exact path="/sign-in" component={SignInForm}>
            </Route>


            <Route exact path="/" component={SignUpForm}>
            </Route>

            <Route exact path="/dashboard" component={Dashboad}>
            </Route>

            {/* <Route exact path="/logout" component={Logout}> </Route>  */}
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

