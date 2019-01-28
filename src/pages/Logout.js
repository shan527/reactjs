import  React,{ Component } from 'react';
//import SignInForm from './pages/SignInForm';
class Logout extends Component {

        

     
        
    logout() {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.clear();
        this.props.history.push("/sign-in"); 
    
       
      }

  


   render(){
       return(
        <button onClick ={this.handleClick}>Logout</button>
       ); 
   }
        
   }

 
export default  Logout;