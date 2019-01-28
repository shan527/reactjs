import React, { Component } from 'react';

class Counter extends React.Component 
{

    render()
    {
        console.log("this is counter",this.props);
        
        return(
         
            <div>{this.props.data.count}</div>
        );
      
    }  
}

export default Counter;
