import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';


import data from './data'
import Detail from './routes/Detail'


function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();


  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
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
                  <ShoesList shoe={shoe} i={i} navigate={navigate}></ShoesList>
                  )
                })
              } 

              </div>
            </div> 
        </div>} />

        {/* 디테일페이지 */}
        {/* 페이지 여러개 만들고 싶을 때 :URL파라미터 쓰면됨 */}
        {/* 페이지는 여러개인데 보이는 내용이 똑같음! */}
        {/* 리액트 라우터적으로 보이는 내용을 다 다르게 만들고 싶다면!  */}
        {/* /detail/0으로 접속하면 0번째 상품을 */}
        {/* /detail/1으로 접속하면 1번째 상품을 */}
        {/* /detail/2으로 접속하면 2번째 상품을 보여주게 만드는방법*/}
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
      
      
      </Routes>


        
    </div>
  );
}

function ShoesList(props){
  return(
    // navigate함수 써서 각 목록 누를때마다 해당 detail페이지로 넘어가게 만들어줌. 
  <div className="col-md-4" onClick={()=>{ props.navigate(`/detail/${props.i}`) }}>
    <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%"/>
    <h4>{props.shoe.title}</h4>
    <p>{props.shoe.price}</p>
  </div>
    )
}


export default App;
