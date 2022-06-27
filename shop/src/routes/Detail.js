
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addItem } from './../store.js'



function Detail(props){

  let [alert, setAlert] = useState(true)
  let [tab, setTab] = useState(0)

  let {id} = useParams();
  let shoe = props.shoes.find(shoe => shoe.id == id)
  let dispatch = useDispatch()

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
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem({id : `${shoe.id}`, name : `${shoe.title}`, count : 1}))
          }}>주문하기</button> 
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

function TabContent({tab}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{ 
      setFade('end')
    },100)
    return ()=>{
      clearTimeout(a)
      setFade('')
    }
  },[tab])

  return (
    <div className={`start ${fade}`}>
      {
        [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
      }
    </div>
  )

}


function AlertModal(){
  return(
    <div className="alert alert-warning">
        2초이내 구매시 할인
    </div>
  )
}

export default Detail;