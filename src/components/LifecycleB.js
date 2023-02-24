import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Omkar'
      }
      console.log("Lifecycle B Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle B getDerivedStateFromProps ")
        return null
    }

    componentDidMount(){
        console.log("Lifecycle B componentDidMount")
    }


    shouldComponentUpdate(){
        console.log("Lifecycle B shouldComponentUpdate")
        return true;
    }

   getSnapshotBeforeUpdate(pervProps, prevState){
    console.log("Lifecycle B getSnapshotBeforeUpdate")
    return null
   }

  componentDidUpdate(){
    console.log("Lifecycle B componentDidUpdate")
  }


  render() {
    console.log("lifecylcle B render");
    return (
      <div>LifecycleB</div>

      
    )
  }
}

export default LifecycleB