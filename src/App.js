import React, { Component } from 'react';
import { HashRouter as Router, Redirect, Route, Link } from 'react-router-dom';
import './App.css';
import './Sidebar.css';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import Dashboad from './pages/Dashboad';
import Logout from './pages/Logout';
import My404Component from './pages/error/My404Component';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
            
            <Route exact path="/" component={SignUpForm}> </Route>
            <Route exact path="/sign-in" component={SignInForm}></Route>
            <Route exact path="/dashboard" component={Dashboad}> </Route>
        </div>
      </Router>
    );
  }
}

export default App;

