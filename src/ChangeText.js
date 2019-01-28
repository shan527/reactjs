import React, { Component } from 'react';

class ChangeText extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            chagetext:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.handleChange);
    }

    handleChange(event) {
        this.setState({ chagetext: event.target.name });
        console.log(this.state.chagetext);

    }

    handleClick(event) {
        
        console.log(this.state.value);
    }

    render() {
        return (
            <div>
                <input type="text" name={this.state.chagetext} onChange={this.handleChange} />

                <button onClick={this.handleClick}>ADD</button>
                <div >
                  
                </div>
            </div>



        );
    }

}

export default ChangeText;








// class ChangeText extends React.Component 
// {

//     render()
//     {
//         console.log("this is homepage",this.props);
//         return(

//             <div>{this.props.value.chagetext}</div>
//         );
//     } 
// }