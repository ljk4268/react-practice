import { useState } from 'react'; 
import './App.css';

function App() {

  let post = '강남 우동 맛집'
  // 리액트에서의 변수는 useState를 씀. 
  // useState를 import 해와서 let[작명,작명]에 넣어두면 됨. 
  // [a] = state에 보관한 자료. html안에 {a}이렇게 쓰면 a에 들어가있는 변수내용이 들어감.
  // [b] = state 내용 변경을 도와주는 함수.
  // useState안에 들어있는 내용이 변경되면 자동으로 랜더링 해주니 꼭 기억해줘! 
  let [a, b] = useState(['남자 코트 추천','여자 코트 추천','여자 부츠 추천']);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{a[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
