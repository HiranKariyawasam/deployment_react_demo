import React, { Component } from 'react';



class DemoFlex extends Component {
    state = {
    counter : 10,
    users :['user1','user2','user3','user4','user5']

      } 
    
    renderUsers()
    {
       if (this.state.users.length === 0 ) return <p>There are no users</p>;
    
       return <ul>{this.state.users.map(user => <li key={user}>{user}</li>)}</ul>

    }

    
    
    render() { 
        return (


        <span>
        <h1>Hello World</h1>
        <br/>
        <h1>{this.state.counter}</h1>
        <br/>
        <h2>{this.renderUsers()}</h2>
        </span>

        );
    }
}
 
export default  DemoFlex;