import { computeHeadingLevel } from '@testing-library/react'
import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends Component {
constructor(props) {
  super(props)

  this.state = {
     name : 'omkar'
  }
}

componentDidMount(){
setInterval(()=>{
  this.setState({
    name: 'omkar'
  })
}, 2000)
}

  render() {
    console.log("hjbkdxnj")
    return (
        <div>
      <div>ParentComp</div>
      <RegComp name={this.state.name}></RegComp>
      <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp