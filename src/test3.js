import React, {Component} from 'react'; 
  
class ChangeColor extends Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { color : '#4cb96b' }; 
        console.log(this.state.color);
    } 
  
    getClick() 
    { 
        if (this.state.color === '#4cb96b') 
            this.setState({ color : '#aaa' }); 
        else
            this.setState({ color : '#4cb96b' }); 
    } 
  
    render() 
    { 
        return <h1 style = { this.state }  
                   onClick = {this.getClick.bind(this)}> 
               {this.props.title} </h1>  
  } 
}   
  

export default ChangeColor; 


  //// changeColor end




  
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './homepage';
import ChangeColor from './ChangeColor';



class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      value: '',
      value2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange(event) {

    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleChange2(event) {

    this.setState({ value2: event.target.value });
    console.log(this.state.value2);
  }
  handleSubmit(event) {

    console.log(event);
  }

  addAction = (event) => {

    let res = Number(this.state.value) + Number(this.state.value2)
    this.setState({ result: res });
    //  console.log(this.state.result);

  }


  render() {
    return (

      <form onSubmit={this.handleSubmit} >
        <One show={this.props.title} />
         
        <div className="dive1">

          <label>
            Value1:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br> <br></br>
          <label>
            value2:
          <input type="number" value={this.state.value2} onChange={this.handleChange2} />
          </label>
          <br></br> <br></br>

          <input type="button" value="Add" onClick={this.addAction} />

          <input type="number" value={this.state.result} readOnly />

           <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
           <h2>Welcome to</h2> 

           <ChangeColor title="GeeksforGeeks" />
          </div> 
        </form>
    );

  }
} /// add end 

class One extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Work-Page'
    }
   }
   render() {
    return (
      <Homepage data={this.state} />
    );
   }
}
//Homepage end







ReactDOM.render(<Add />, document.getElementById('root'))

export default One;



// ////end index









///complete index page




import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './homepage';
import ChangeColor from './ChangeColor';



class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      value: '',
      value2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange(event) {

    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleChange2(event) {

    this.setState({ value2: event.target.value });
    console.log(this.state.value2);
  }
  handleSubmit(event) {

    console.log(event);
  }

  addAction = (event) => {

    let res = Number(this.state.value) + Number(this.state.value2)
    this.setState({ result: res });
    //  console.log(this.state.result);

  }


  render() {
    return (

      <form onSubmit={this.handleSubmit} >
        <One show={this.props.title} />
         
        <div className="dive1">

          <label>
            Value1:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br> <br></br>
          <label>
            value2:
          <input type="number" value={this.state.value2} onChange={this.handleChange2} />
          </label>
          <br></br> <br></br>

          <input type="button" value="Add" onClick={this.addAction} />

          <input type="number" value={this.state.result} readOnly />

           <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
           <h2>Welcome to</h2> 

           <ChangeColor title="My Page" />
          </div> 
        </form>
    );

  }
} /// add end 

class One extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Work-Page'
    }
   }
   render() {
    return (
      <Homepage data={this.state} />
    );
   }
}
//Homepage end







ReactDOM.render(<Add />, document.getElementById('root'))

export default One;