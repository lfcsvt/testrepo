import React, { Component } from 'react'
import './Card.css'
import './Button.scss'
import {Modal, Button, Image, Navbar} from 'react-bootstrap'


class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            books: [],
            isLoading: false,
            modal: false,
            mdlPic:"",
            mdlTitle: "",
            visible: false,
            setShow:  false,
            query: ''
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        fetch('https://api.myjson.com/bins/zyv02')
        .then(res => res.json())
        .then(response => this.setState({books: response.books, isLoading: false}))
        .catch(error => (error))  
    }

    handleOnClick = (param1, param2) => {
        this.setState({mdlPic: param1, mdlTitle: param2});
        if(this.state.setShow){
            this.setState({setShow: false});
        } else {
            this.setState({setShow: true});
        }
      };

      handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
      }
    render=()=> {
    
        const {query, isLoading, mdlPic, mdlTitle, setShow} = this.state
        let books = this.state.books
        if(isLoading){
            return <h1 style={{textAlign: 'center'}}>Loading....</h1>
        }
        if(query.length > 0){
            books = books.filter(book =>(book.description.toLowerCase().includes(query.toLowerCase()) || book.title.toLowerCase().includes(query.toLowerCase())))
        }
        return <div><Navbar bg="primary" variant="dark" className="d-flex justify-content-between">
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
                    onChange={()=>this.handleInputChange()}
                    />
                </form>
            </Navbar>
                <div style={divFlex}>
                    {books.map(book => 
                
                 <div className="flip-card" key={book.detail}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={book.cover} alt="Avatar" style={{height: '400px', width: '300px'}}/>
                    </div>
                    <div className="flip-card-back">
                        <h1>{book.title}</h1> 
                        <p>{book.description}</p> 
                        <p>{book.language}</p>
                        <div className="button" onClick={() => this.handleOnClick(book.detail, book.title)}>
                            <p>MORE INFO</p>
                        </div>
                     </div>
                    </div>
                </div>
            )}
            </div>
                            <Modal show={setShow}>
                                <Modal.Header>
                                <Modal.Title>{mdlTitle}</Modal.Title>
                                </Modal.Header>
                                 <Modal.Body>
                                     <Image src={mdlPic} style={{height: "450px", width:"400px", marginLeft: '35px'}}></Image>
                                 </Modal.Body>
                                 <Modal.Footer>
                                    <Button variant="secondary"onClick={()=> this.handleOnClick()}>Close</Button>
                                </Modal.Footer>
                            </Modal>
        </div>
    }
}
const divFlex ={
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: "space-around"
  }
export default Card
