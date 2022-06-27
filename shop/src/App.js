import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { createContext, useState } from 'react';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';

import data from './data'
import Detail from './routes/Detail'
import Cart from './routes/Cart'



function App() {

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])
  let [count, setCount] = useState(0)
  let [show, setShow] = useState(true)
  let navigate = useNavigate();


  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
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
                  <ShoesList shoe={shoe} i={i} navigate={navigate} key={i}></ShoesList>
                  )
                })
              } 

              </div>
            </div> 

            {
              count == 2 ? null : show && <button onClick={()=>{
                setShow(false)
                if ( count == 0) {
                  setTimeout(()=>{
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result)=>{
                      let copy = [...shoes]
                      copy.push(...result.data)
                      setShoes(copy)
                      setCount(count+1)
                      setShow(true)
                    })
                  },500)
                  
                  .catch(()=>{console.log('실패')})
                }
                if ( count == 1) {
                  axios.get('https://codingapple1.github.io/shop/data3.json')
                  .then((result)=>{
                    let copy = [...shoes]
                    copy.push(...result.data)
                    setShoes(copy)
                    setCount(count+1)
                    setShow(true)
                  })
                  .catch(()=>{console.log('실패')})
                }
                if ( count == 2) { alert('더이상 상품이 없습니다.')}
                
              }}>더보기</button> 
              
            }

            {
              show == false ? <More/> : null
            }
            
            
        </div>
      } />

        
        <Route path="/detail/:id" element={
          
            <Detail shoes={shoes}/>
          
          }/>

        <Route path="/cart" element={
        
          <Cart/>
        
        }/>
      
      
      </Routes>


        
    </div>
  );
}

function ShoesList(props){
  return(
  <div className="col-md-4" onClick={()=>{ props.navigate(`/detail/${props.i}`) }}>
    <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%"/>
    <h4>{props.shoe.title}</h4>
    <p>{props.shoe.price}</p>
  </div>
    )
}

function More(){
  return(
    <div>로딩중</div>  
  )
}


export default App;
