import React, { Component } from 'react';

class  Counter extends Component {
    
//state is a special property in React.js

state = {
    count: 0,
    tags: ['tag1','tag2','tag3']
};

styles = {
fontSize:5,
fontWeight : 'bold'
};

renderTags(){

if(this.state.tags.length === 0) return <p>There are no Tags</p>;

return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>

}


    render() { 

       

        return (
        <div>

        {this.state.tags.length === 0 && 'Please create a new tag'}


        {this.renderTags()}

        </div>

        )
        
        
    }

   

}
 
export default Counter;