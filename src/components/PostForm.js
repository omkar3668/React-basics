import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:'',
         title: '',
         body: ''
      }
    }

    handelChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handelSubmit =(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

  render() {
    const { id , title, body} = this.state
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
            <div>
            <input type = "text" name="id" value={id} onChange={this.handelChange}/>
            </div>
            <div>
            <input type = "text" name="title" value={title} onChange={this.handelChange}/>
            </div>
            <div>
            <input type = "text" name="body" value={body} onChange={this.handelChange}/>
            </div>
            <div>
            <button type='submit'>Submit</button>
            </div>
        </form> 
      </div>
    )
  }
}

export default PostForm