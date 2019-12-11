import React, { Component } from 'react'
import{Navbar} from 'react-bootstrap'

class Navigation extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
    const searchValue = this.state
   return (
    <Navbar bg="primary" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand href="#home">
        <img
        alt=""
        src="/images/logo.jpg"
        width="40"
        height="40"
        className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
        <form>
          <input
            placeholder="Search our books..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            value = {searchValue.query}
          />
        </form>
    </Navbar>
   )
 }
}

export default Navigation