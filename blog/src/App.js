/* eslint-disable */ 

import { useState } from 'react'; 
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천','여자 코트 추천','여자 부츠 추천']);
  let [count, setCount] = useState([0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [order, setOrder] = useState(0)
  let [inputValue, setInputValue] = useState('')

  function changeTitle(){
    let copy = [...title];
    copy[0] = '여자 코트 추천'
    setTitle(copy)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ ()=>{ 
        let copy = [...title];
        copy[0] = '여자 코트 추천'
        setTitle(copy)
      }}>클릭</button>


      {
        title.map(function(a, i){
          return (
              <div className="list" key={i}>
                
                <h4 onClick={()=>{ setModal(true); setOrder(i)}}>
                  {title[i]}
                  <span onClick={(e)=>{ 
                    e.stopPropagation();
                    let copy = [...count]
                    copy[i] ++
                    setCount(copy)
                  }}>👍🏻</span> 
                  {count[i]} 
                </h4>
                <p>2월 17일 발행</p>
              </div>
            )
        })
      }

      <input onChange={(e)=>{ 
      // 알아두면 좋은 리액트 동작방법
      // state 변경함수는 늦게 처리된다.
      // setInputValue(e.target.value) 얘가 state 변경함수고 늦게 처리되는데 이걸 비동기처리라고 한다. 
      // setInputValue(e.target.value)가 완료되기 전에 
      // console.log(inputValue)을 실행한다.
        setInputValue(e.target.value) 
        }} />
        {/* 버튼을 누르면 사용자가 입력한 글이 리스트로 하나 추가 되는 기능만들기 */}
        <button onClick={()=>{
          let copy = [...title]
          copy.push(inputValue)
          setTitle(copy)
        }}>추가</button>

      {
        modal == true ? <Modal title={title} color={'#e1f5fe'}
        changeTitle={changeTitle} order={order}
        /> : null
      }

  </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[props.order]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.changeTitle()}}>글수정</button>
    </div>
  )
}

export default App;
