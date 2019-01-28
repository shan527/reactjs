import React, { Component } from 'react';


class Homepage extends React.Component 
{

    render()
    {
        console.log("this is homepage",this.props);
        return(
            
            <div className="header">{this.props.data.title}</div>
        );
    }
}



   



// export default Homepage;




// import React, { Component } from 'react';

// class SignUpForm extends Component {


//   constructor(props) {
//     // this.validator = new SimpleReactValidator();
//     super(props);

//     this.state = {

//       username: '',
//       ErrorUsername: '',
//       email: '',
//       ErrorEmail: '',
//       password: '',
//       ErrorPassword: '',

//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {

//     this.setState({ [e.target.name]: e.target.value });
//   }

//   //  handleSubmit(e){

//   //     localStorage.setItem('username',this.state.username);
//   //     localStorage.setItem('email',this.state.email);
//   //     localStorage.setItem('password',this.state.password);
//   //     this.props.history.push("/sign-in");
//   //    e.preventDefault();

//   //  }   ///real view


//   validate = () => {

//       let isError = false;
//       const errors = {
//         ErrorUsername: '',
//       };
//       if (this.state.username.length < 5) {
//       isError = true;
//       errors.ErrorUsername = "Username needs to be alteast a 5 charecters long";
//     }

//     if (this.state.email.indexOf('@') ===-1) {
//       isError = true;
//       errors.ErrorEmail = "Required valid email";
//     }

//    if(isError){
//      this.setState({
//        ...this.state,
//        ...errors
//      });
//    }

//     return isError;
//   }
//   handleSubmit(e) {
//     e.preventDefault();
  
//     const err = this.validate();

//     if (!err) {
//       alert("validation successfull");
//     }
  
 

//   }


//   render() {
//     return (
//       <div id="main-registration-container">
//         <div id="register">
//           <h3>Registration page</h3>
//           <form name="userRegistrationForm" onSubmit={this.handleSubmit} >
//             <label>Name</label>
//             <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
//              <div className="errorMsg">{this.state.ErrorUsername}</div> 
          
//             <label>Email ID:</label>
//             <input type="text" name="email" value={this.state.email} errtext={this.state.ErrorEmail} onChange={this.handleChange} />
//              <div className="errorMsg">{this.state.ErrorEmail}</div> 

//              <label>Password</label>
//             <input type="password" name="password" errtext={this.state.ErrorPassword} value={this.state.password} onChange={this.handleChange} />
//              <div className="errorMsg">{this.state.ErrorPassword}</div> 
 
//             <input type="submit" className="button" value="Register" />
//           </form>
//         </div>
//       </div>





//     );
//   }
// }

// export default SignUpForm;
