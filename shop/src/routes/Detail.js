
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 컴포넌트의 Lifecycle
// 페이지가 딱 처음에 보일 때 mount
// 업데이트가 될 때 update
// 첫페이지(=홈)으로 돌아가서 컴포넌트가 필요 없어지면(=제거가 되면) unmount 
// Lifecycle 중간중간 코드 실행을 할 수 있다. 

function Detail(props){

  // useEffect안에 적힌 코드들은 컴포넌트가 mount될 때와 update될 때 실행된다.
  // useEffect를 언제 쓸까? 
  // useEffect는 실행시점이 살짝 다르다. 
  // useEffect는 html이 렌더링 다 된 후에 동작한다. 
  // 그래서 useEffect안에 적는 코드들은 
  // 어려운 연산 혹은 서버에서 데이터가져오는 작업 , 타이머 장착하는 코드를 적는다.
  useEffect(() => {
    setTimeout(() => { setAlert(false) },2000)
  })

  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)

  let {id} = useParams();
  let shoe = props.shoes.find(shoe => shoe.id == id)

  return(
    <div className="container">

      {/* 동적 UI를 위해 AlertModal 컴포넌트를 만들고 */}
      {/* UI현재 상태를 state로 저장해둠.  */}
      {/* 2초뒤에 사라질 수 있게 useEffect안에 setTimeout함수를 사용 */}

      {
        alert == true ? <AlertModal/> : null
      }

      
      {count}
      <button onClick={()=>{ setCount(count+1) }}>버튼</button>
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