import React, { Component } from "react";

class Welcome extends Component {
    render(){
        const {name} = this.props
        return <h1>Class Component {name} </h1>
    }

}

export default Welcome

//component without using JSX