
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';


function Detail(props){

  let [alert, setAlert] = useState(true)
  let [tab, setTab] = useState(0)

  let {id} = useParams();
  let shoe = props.shoes.find(shoe => shoe.id == id)

  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) },2000)

    return()=>{
      clearTimeout(a)
    }
  },[])

  return(
    <div className="container">
      

      {
        alert == true ? <AlertModal/> : null
      }

      
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (shoe.id+1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      {/* Navvar */}
      {/* 탭 클릭하면 tab useState변경해서 각각 다른 내용 보여주기 */}
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0"
          onClick={()=>{ setTab(0) }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1"
          onClick={()=>{ setTab(1) }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2"
          onClick={()=>{ setTab(2) }}>버튼2</Nav.Link>
        </Nav.Item>
    </Nav>
    <TabContent tab={tab}/>
    

    </div> 
    )
}
// JSX에 if문 넣고 싶을 때 컴포넌트를 만들면 됨. 
// if문안에 꼭 return 써주기. 
function TabContent({tab}){
    if( tab == 0 ) {
      return <div>내용0</div>
    }
    if( tab == 1 ) {
      return <div>내용1</div>
    }
    if( tab == 2 ) {
      return <div>내용2</div>
    }
}


function AlertModal(){
  return(
    <div className="alert alert-warning">
        2초이내 구매시 할인
    </div>
  )
}

export default Detail;