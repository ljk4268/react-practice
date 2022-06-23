import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';

import data from './data'


function App() {

  let [shoes] = useState(data)


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    {/* 메인페이지 이미지 */}
      <div className="main-bg"></div>

    {/* 메인페이지의 상품들 */}
      <div className="container">
        <div className="row">

        {
          shoes.map(function(shoe, i){
            return(
            <ShoesList shoe={shoe} i={i+1}></ShoesList>
            )
          })
        } 

          {/* <ShoesList shoes={shoes}></ShoesList>
          <ShoesList shoes={shoes}></ShoesList>
          <ShoesList shoes={shoes}></ShoesList> */}
        </div>
      </div> 


    </div>
  );
}

function ShoesList(props){
  return(
    <div className="col-md-4">
    <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%"/>
    <h4>{props.shoe.title}</h4>
    <p>{props.shoe.price}</p>
  </div>
    )
}

export default App;
