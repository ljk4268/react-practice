import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';

import data from './data'
import {Routes, Route, Link, NavLink} from 'react-router-dom';


function App() {

  let [shoes] = useState(data)


  return (
    <div className="App">

{/* 라우터로 페이지 나누는법  */}
{/* 페이지를 n개 나누고 싶은지에 따라서  <Route />를 n개 사용해주면 됨.*/}
{/* 상세페이지를 만들고 싶으면 아래 코드처럼 작성하면 됨. */}

      {/* <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/detail" element={<div>상세페이지</div>} />
      </Routes> */}


      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {/* 메인페이지에 보여줄 html들 작성 */}
        <Route path="/" element={<div>
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

              </div>
            </div> 
        </div>} />
        <Route path="/detail" element={<div>상세페이지</div>} />
      </Routes>

    


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
