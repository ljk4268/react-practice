
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
// 애니메이션 주는 법 
function TabContent({tab}){

  let [fade, setFade] = useState('')


  // tab이 변경될 때마다 실행되게 useEffect 코드 사용 
  // tab이 변경될 때 setFade('end')이 실행되고 
  // return으로 다시 원상복귀를 시킴. 
  // 근데 두 코드가 한 번에 실행되면 리액트는 setFade('end')만 실행시키낟고함. 
  // 그래서 setTimeout로 시간차를 두고 setFade('end')을 실행시키고 
  // 타이머함수를 지워주는 clearTimeout(a)을 써줌. 
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
    // 변경될 내용을 div태그엥 담아 className을 주고 
    // tab state가 변할 때 마다 css를 변경해주기 위해 useEffect를 사용함. >>위 코드에서 설명
    // css 'end'가 붙였다 떼어졌다 해야하니까 className에 변수로 넣어주고 
    // className을 변수로 넣어줄 땐 {중괄호}로 넣어주면 됨. 
    // useState로 css 'end'를 관리해줌. >> let [fade, setFade] = useState('')
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