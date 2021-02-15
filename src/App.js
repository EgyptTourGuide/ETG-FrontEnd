import React from 'react'
import classes from './App.module.css'

export default class App extends React.Component {
  
  state = {
    name: ''
  }

  takeInput = (event)=>{
    this.setState({
      name: event.target.value
    })
  }

  submit = ()=>{
      
  }


  
  render(){
    return (
      <div className={classes.container}>
        <h1>{this.state.name}</h1>
        <input onChange={this.takeInput} value={this.state.name} />
        <button onClick={this.submit}>Change Name</button>
      </div>
    )}
}

