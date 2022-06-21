/* eslint-disable */ 

import { useState } from 'react'; 
import './App.css';

function App() {

  // 리액트에서의 변수는 useState를 씀. 
  // useState를 import 해와서 let[작명,작명]에 넣어두면 됨. 
  // [a] = state에 보관한 자료. html안에 {a}이렇게 쓰면 a에 들어가있는 변수내용이 들어감.
  // [b] = state 내용 변경을 도와주는 함수.
  // useState안에 들어있는 내용이 변경되면 자동으로 랜더링 해주니 꼭 기억해줘! 
  let [title, setTitle] = useState(['남자 코트 추천','여자 코트 추천','여자 부츠 추천']);
  let [count, setCount] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

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
      {/* <div className="list">
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
        <h4 onClick={()=>{ setModal(!modal) }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* 아래코드와 위 코드는 동일 */}

      {
        title.map(function(a, i){
          return (
              <div className="list" key={i}>
                <h4 onClick={()=>{ setModal(!modal) }}>
                  {title[i]}
                  {/* 각 제목 옆에 좋아요 갯수를 보여준다. */}
                  {/* 좋아요 갯수를 state 배열로 3개 만들고  */}
                  {/* 새로운 변수에 deepcopy를 해준다.  */}
                  {/* 제목이 눌릴때마다 새로운 변수의 i번째 배열에 +1을 해주고 */}
                  {/* setCount로 count state에 copy변수를 할당해준다.  */}
                  <span onClick={()=>{ 
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

      {/* 아래처럼 쓰면 html이 더러워짐  
      리액트에서 컴포넌트 문법으로 깔끔하게 한단어로 축약해서 쓸 수 있게 도와즘!
      내 코트를 처음 보는 사람도 이해하기 쉬움!*/}
      
      {/* components 문법 만드는 법 
      1. function을 만들고 - html밖에 만들어야함 
      2. return()안에 html 담고
      3.<함수명></함수명> or <함수명/>쓰기!*/}


      {/* 제목을 누르면 Modal창이 보이게 하는 방법! */}

      {/* [ 동적인 UI 만드는 Step ] 

      1. html css로 미리 디자인 완성해둔다 
      2. UI현재 상태를 state로 저장한다. >> state로 만들면 됨. 
      3. state에 따라 UI가 어떻게 보일지 작성한다. >> 삼항연산자로 */}

      {/* state가 true이면 아래 컴포넌트문법으로 만든 html을 보여달라! */}
      
      {/* 자바스크립트 문법을 쓰고 싶으면 {중괄호}넣고 안에 쓰자!  */}
      {/* 근데 if문이나 for문법을 쓸 수 없다. html넣는 공간이라서 안됨! 
      대신 if문 대용으로 삼항연산자 쓰면 된다.  */}
      {/* 정리하면 html안에 조건문 쓰고 싶으면 삼항연산자를 쓰자 */}

      {
        // 삼항연산자 : 조건식 ? 참일 때 실행할 코드 :  거짓일 때 실행할 코드

        // 자식한테 state 전송하는 방법 
        modal == true ? <Modal title={title} color={'#e1f5fe'}
        changeTitle={changeTitle}
        /> : null

      }

  </div>
  );
}

// 컴포넌트문법 만드는 방법 첫번쨰!
// props 파라미터 등록후 '{props.작명}' 사용하면 됨
function Modal(props){
  return(
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* 버튼 누르면 첫 글제목이 '여자코트추천'으로 바뀌는 기능 */}
      <button onClick={()=>{props.changeTitle()}}>글수정</button>
    </div>
  )
}

export default App;
