import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';


import data from './data'
import Detail from './routes/Detail'


function App() {

  let [shoes, setShoes] = useState(data)
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
                  <ShoesList shoe={shoe} i={i} navigate={navigate} key={i}></ShoesList>
                  )
                })
              } 

              </div>
            </div> 
            {/* axios로 서버요청하기 */}
            {/* 응용1. 버튼을 2번 누르면 7,8,9번 상품을 가져와서 html로 보여주려면? */}
            {/* 응용2. 버튼을 3번 누르면 더 상품이 없다고 안내문을 띄우려면? */}
            {/* 응용3. 버튼을 누른 직후엔 "로딩중입니다" 이런 글자를 주변에 띄우고 싶으면? */}

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

function More(){
  return(
    <div>로딩중</div>  
  )
}


export default App;
