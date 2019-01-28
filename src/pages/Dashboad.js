import React, { Component } from 'react';
import { HashRouter as Route, Link} from 'react-router-dom';
import Logout  from './Logout';
class Dashboad extends Component {
  
  constructor(){    

 super(); {
    

 }
 this.handleSignOut =this.handleSignOut.bind(this);
  }


  handleSignOut(){

    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.clear();
    this.props.history.push("/");
   }

  render() {
    return (
    


  <div className="main">
   <h2>Hello on Dashboard</h2>



   <button onClick={this.handleSignOut}>Sign Out</button>














{/*          
        <div>
             <Link to ="/logout" className="Link" >Sign Out</Link><br></br>
         </div>

         <div>

         <Route exact path="/logout" component={Logout}> </Route> 

         </div>  */}
</div>


    );
  }
}

export default Dashboad;
