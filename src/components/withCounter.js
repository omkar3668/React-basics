import React from "react";

//HOC accepts original component as a parameters & return new components
const UpdatedComponent = (OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
              count : 0
            }
          }
      
          incrementCount = ()=>{
              this.setState( (prevState)=>{
                  return{ count: prevState.count + 1}
              })
          }
       render(){
        console.log(this.props.name)
        return (<OriginalComponent count ={this.state.count} incrementCount={this.incrementCount}
                  {...this.props}   />
        )
       }
    }
    return NewComponent
}

export default UpdatedComponent