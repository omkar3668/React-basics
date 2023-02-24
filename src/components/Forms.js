import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        comments: '',
        topic:''
      }
    }

    handelUsernameChange = (event)=>{
        this.setState({
            username : event.target.value
        })
    }

    handelCommentsChange = (event)=>{
        this.setState({
            comments : event.target.value
        })
    }

    handelTopicChange = (event)=>{
       this.setState({
        topic : event.target.value
       })
    }


    handelSubmit = (event)=> {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic} ` )
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
            <div>
                <label>UserName</label>
                <input type= 'text' value={this.state.username} onChange={this.handelUsernameChange} />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handelCommentsChange} ></textarea>
            </div>
            <div>
                <label>TOPIC</label>
                <select value={this.state.topic} onChange={this.handelTopicChange}>
                 <option value= "react">React</option>
                 <option value= "angular">Angular</option>
                 <option value= "view">View</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Forms