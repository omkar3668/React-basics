import React, { Component } from 'react'

 class HoverCounterTwo extends Component {

  render() {

      const {count, incrementChange} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementChange} >Hover {count} times</h1>
      </div>
    )
  }
}

export default HoverCounterTwo