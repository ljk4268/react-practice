
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 컴포넌트의 Lifecycle
// 페이지가 딱 처음에 보일 때 mount
// 업데이트가 될 때 update
// 첫페이지(=홈)으로 돌아가서 컴포넌트가 필요 없어지면(=제거가 되면) unmount 
// Lifecycle 중간중간 코드 실행을 할 수 있다. 

function Detail(props){

  


  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let [num, setNum] = useState('')

  let {id} = useParams();
  let shoe = props.shoes.find(shoe => shoe.id == id)

  useEffect(()=>{
    if (isNaN(num) == true){
      alert('그러지마세요')
    }
  }, [num])

  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) },2000)

    return()=>{
      clearTimeout(a)
    }
  },[])

  return(
    <div className="container">
      <div>
        <input onChange={(e)=>{ setNum(e.target.value) }}/>
      </div>
      

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