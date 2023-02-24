import React, { Component } from 'react'

class ClickCounterTwo extends Component {

 

  render() {
    const  {count , incrementChange} = this.props
    return (
      <div><button onClick={incrementChange}> count {count} times</button></div>
    )
  }
}

export default ClickCounterTwo