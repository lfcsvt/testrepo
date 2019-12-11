import React, { Component } from 'react'
import './App.css';
import Card from './components/Card'




class App extends Component {
  state={
    result:""
  }
  render() {
    return (
      <div>
        <Card/>
      </div>
    )
  }
}
export default App