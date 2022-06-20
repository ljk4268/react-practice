/* eslint-disable */ 

import { useState } from 'react'; 
import './App.css';

function App() {

  let post = '강남 우동 맛집'
  // 리액트에서의 변수는 useState를 씀. 
  // useState를 import 해와서 let[작명,작명]에 넣어두면 됨. 
  // [a] = state에 보관한 자료. html안에 {a}이렇게 쓰면 a에 들어가있는 변수내용이 들어감.
  // [b] = state 내용 변경을 도와주는 함수.
  // useState안에 들어있는 내용이 변경되면 자동으로 랜더링 해주니 꼭 기억해줘! 
  let [title, setTitle] = useState(['남자 코트 추천','여자 코트 추천','여자 부츠 추천']);
  let [count, setCount] = useState(0);

  

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ ()=>{
      // array나 object다룰 때 원본은 보존하는게 좋다. 
      //[state변경함수의 특징]
      // 1. 기존 state랑 신규 state랑 같으면 변경시키지 않음. 
      // 배열이나 객체에 변수를 저장하면 변수의 내용이 저장되는게 아니라 변수 내용이 저장되어 있는 공간을 가르키는 화살표가 저장이 된다. 
      // 아래처럼 deep copy를 하지 않으면 다른 변수에 기존 변수를 저장해도 화살표가 기존 변수를 가르키고 있으니 state 변경함수는 작동하지 않음. 
      // deep copy를 통해서 새로운 공간에 기존 변수의 내용을 저장시켜 화살표 방향을 바꿔주어야 한다. 
      // state가 array나 object면 deep copy를 통해서 state 변경을 해줘야한다. 
        let copy = [...title];
        copy[0] = '여자 코트 추천'
        setTitle(copy)
      }}>클릭</button>


      <button onClick={ ()=>{
        let copy = [...title];
        copy.sort() // 가나다순 정렬해주는 sort()함수를 써줌. 
        setTitle(copy)
      }} >가나다순정렬</button>


      {/* onClick함수 사용하는 방법  
      - onClick={()=>{}}
      - 클릭했을 때 실행하고 싶은 함수의 이름만 써야한다. */}
      <div className="list">
        <h4>
          {title[0]} 
          <span onClick={()=>{ setCount(count+1) }}>👍🏻</span> 
          {count} 
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {/* 아래처럼 쓰면 html이 더러워짐  
      리액트에서 컴포넌트 문법으로 깔끔하게 한단어로 축약해서 쓸 수 있게 도와즘!
      내 코트를 처음 보는 사람도 이해하기 쉬움!*/}
      
      {/* components 문법 만드는 법 
      1. function을 만들고 - html밖에 만들어야함 
      2. return()안에 html 담고
      3.<함수명></함수명> or <함수명/>쓰기!*/}

      <Modal></Modal>

  </div>
  );
}

// 컴포넌트문법 만드는 방법 첫번쨰!
function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
