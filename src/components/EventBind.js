import React, { Component } from 'react'

class EventBind extends Component {

    constructor() {
      super()
    
      this.state = {
         message : 'HI'
      }
    //   this.changeMessage = this.changeMessage.bind(this);
    }

    // changeMessage(){
    //     this.setState({
    //         message : 'How are You'
    //     })
    // }

    changeMessage=()=>{
        this.setState({
            message : 'How are You'
        })
    }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={()=>this.changeMessage()}>click me</button> */}
        <button onClick={this.changeMessage}>click me</button>
      </div>

    )
  }
}

export default EventBind