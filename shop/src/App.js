import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import shoesImg from './bg.png'

function App() {
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

    {/* html에서 src폴더의 이미지 넣을 때*/}
    {/* 이미지 주소 import해오고 */}
    {/* 태그안에 style로 이미지 주소 넣어주는데 import해온 이미지 주소를 넣어줄 땐  변수를 넣어주는거니까 + 기호로 변수를 넣어줘야함*/}
      <div className="main-bg"
      // style={ { backgroundImage : 'url('+shoesImg+')'}}
      >


      </div>

    {/* bootstrap으로 상품 레이아웃 3개 만들기  */}

      <div className="container">
        <div className="row">
          <div className="col-md-4">
      {/* html에서 public폴더 이미지 사용할 땐 그냥 /이미지경로 */}
      {/* public폴더 속 이미지 사용시 권장하는 방법  */}
      {/* {process.env.PUBLIC_URL + '/img.png'} */}
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>

          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div> 


    </div>
  );
}

export default App;
