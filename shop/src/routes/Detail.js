
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 컴포넌트의 Lifecycle
// 페이지가 딱 처음에 보일 때 mount
// 업데이트가 될 때 update
// 첫페이지(=홈)으로 돌아가서 컴포넌트가 필요 없어지면(=제거가 되면) unmount 
// Lifecycle 중간중간 코드 실행을 할 수 있다. 

function Detail(props){

  // useEffect 실행조건을 넣을 수 있는 곳은 []
  // [] 가 없을 땐 mount, update 될 때 useEffect가 실행
  // [] 안에 조건을 넣어주면 그 조건에 해당되는 usestate가 변할 때 useEffext가 실행됨 
  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) },2000)
    // useEffect가 실행하기 전에 실행되는 return()=>{}
    // return()=>{}의 별명은 clean up function
    // 리액트의 특성상 재렌더링이 많은데, 재렌더링 할 때마다 타이머함수의 경우 계속 발생되니까 기존 타이머함수는 제거해달라는 코드를 작성하면 좋다. 
    return ()=>{
      clearTimeout(a)
    }
  },[])


  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let [num, setNum] = useState('')

  let {id} = useParams();
  let shoe = props.shoes.find(shoe => shoe.id == id)

  return(
    <div className="container">
      <input onChange={(e)=>{ setNum(e.target.value) }}/>

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