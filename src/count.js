import React, { Component } from 'react';

class Counter extends Component {
    state = {
      count: 42
    };
    render() {
      return <button>{this.state.count}</button>;
    }
  }