import React, { Component } from 'react';

class  Counter extends Component {
    
//state is a special property in React.js

state = {
    count: 10,
    imageUrl:"http://picsum.photos/200"
    
};


styles = {
fontsize : 100,
color: 'red'
}



    render() { 

       const element = <h1 style={{ color: 'blue' }}>inline styling</h1>;
       const element2 = <h1 style={this.styles}>Style obje</h1>;
       
       let stateValue= this.state.count === 0 ? "value 0" : "larger than 0" ;

        return (
        <span className="styles">

        {element}
        <br/>
        <br/>
        {element2}
        <br/>
        <br/>
        {stateValue}
        <br/>
        <br/>

        <img src={this.state.imageUrl} alt='Random Image'/>
        

        </span>

        )
        
        
    }

   

}
 
export default Counter;