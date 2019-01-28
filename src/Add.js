
import React, { Component } from 'react';

import './index.css';
import Homepage from './homepage';
import ChangeColor from './ChangeColor';
import ChangeText from './ChangeText';
import Reference from './Reference';
import LoginForm from './LoginForm';


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
        <ChangeColor title="Work-Page" />
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
          <ChangeText value={this.state.value} />

        </div>
        <div>
          <Reference />
        </div>

        <div>
         <Link to path="/" Component={'LoginForm'}>Click me</Link>
         
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



export default Add;