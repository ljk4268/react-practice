import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';


import data from './data'
import Detail from './routes/Detail'


function App() {

  let [shoes] = useState(data)
  // 페이지 이동을 도와주는 useNavigate()
  let navigate = useNavigate();


  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* 페이지 이동 도와주는 navigate */}
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<div>
          <div className="main-bg"></div>
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

        {/* 디테일페이지 */}
        <Route path="/detail" element={<Detail/>} />

        {/* Nested Route */}
        {/* /about/member 페이지도 만들고*/}
        {/* /about/location 페이지도 만들고*/}
        <Route path="/about" element={<About/>}>
          {/* /about/member 페이지도 만들고*/}
          {/* 보여주고 싶은 내용은 컴포넌트에 <Outlet></Outlet>넣어줘야함 */}
          <Route path="member" element={<div>멤버임</div>} />
          {/* /about/location 페이지도 만들고*/}
          <Route path="location" element={<About/>} />
        </Route>




        {/* 404페이지 */}
        {/* path="*" 지정한 라우트외에 모든 페이지에서 보여줄 페이지  */}
        <Route path="*" element={<div>없는페이지요</div>} />
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

function About(){
  return(
      <div>
        <h4>회사정보임</h4>
        <Outlet></Outlet>
      </div>
    )
}

export default App;
