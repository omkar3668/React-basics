import React, { Component } from 'react'

 class CounterTwo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
  
      incrementChange = ()=>{
          this.setState(prevState =>{
            return {count: prevState.count + 1}
          })
      }

  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementChange)}
      </div>
    )
  }
}

export default CounterTwo