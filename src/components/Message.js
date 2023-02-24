import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super() //call has to be made base class constructor
        this.state = {
            message : 'Welcome Omkar'
        }
    }

    changeMessage(){
        this.setState({
            message: ' Thanks for Coming'
        })
    }


    render(){
        return (
            <div>
        <h1>
           { this.state.message}
        </h1>
        <h3>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
        </h3>
        </div>
        )
    }

}

export default Message
