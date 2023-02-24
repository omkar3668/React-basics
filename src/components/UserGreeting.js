import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogeedIn: true
      }
    }
  render() {
    

    // 1. element operatr
    //  let Message
    // if(this.state.isLogeedIn){
        
    //         Message = <div> welocome </div>
    // }else{
         
    //     Message = <div> Hello brother</div>
    // }

    // return(
    //     <div>
    //     {Message}
    //     </div>
    // )

    //2. if -else
    // if(this.state.isLogeedIn){
    //     return(
    //         <div>
    //             <h1> Hello </h1>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             <h2> HI </h2>
    //         </div>
    //     )
    // }


    // 3.ternary operator
    // return this.state.isLogeedIn ? (
    //   <div>UserGreeting</div>
    // ):(
    //     <div>
    //         HI
    //     </div>
    // )


    // 4.short cricuit operator
//  return this.state.isLogeedIn && <div> Welcome omkar</div>
     return(
        <div>
            HI
        </div>
     )
  }
}

export default UserGreeting