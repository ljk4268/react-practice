import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';


import data from './data'
import Detail from './routes/Detail'


function App() {

  let [shoes, setShoes] = useState(data)
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
            {/* axios로 서버요청하기 */}
            <button onClick={()=>{ 
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                // 서버에서 받아온 데이터로 새로운 shoesList만들기
                let copy = [...shoes]
                copy.push(...result.data)
                setShoes(copy)
              })
              // 서버요청이 실패했을 때는 catch!
              .catch(()=>{console.log('실패')})
            }}>버튼</button>
        </div>
      } />

        
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
