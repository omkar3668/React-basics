import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Omkar'
      }
      console.log("Lifecycle A Constructor");
    }

    changeState =()=>{
        this.setState({
            name:'omi'
        })
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle A getDerivedStateFromProps ")
        return null
    }

    componentDidMount(){
        console.log("Lifecycle A componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("Lifecycle A shouldComponentUpdate")
        return true;
    }

   getSnapshotBeforeUpdate(pervProps, prevState){
    console.log("Lifecycle A getSnapshotBeforeUpdate")
    return null
   }

  componentDidUpdate(){
    console.log("Lifecycle A componentDidUpdate")
  }

  render() {
    console.log("lifecylcle A render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>change state</button>
        <LifecycleB />
      </div>
     
    )
  }
}

export default LifecycleA