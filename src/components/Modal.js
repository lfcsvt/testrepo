import React, { Component } from 'react'

class Modal extends Component {
  render() {
    return (
      <div style={divStl}>
        <div>
          <h1>{this.props.oneBook.title}</h1>
        </div>
        <div>
          <img src={this.props.oneBook.detail} alt="book detail" style={{height: "500px", width:"400px"}}/>
        </div>
        <div>
          <h3>{this.props.oneBook.description}</h3>
        </div>
      </div>
    )
  }
}
const divStl ={
  textAlign: 'center',
}
export default Modal