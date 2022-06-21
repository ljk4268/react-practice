/* eslint-disable */ 

import { useState } from 'react'; 
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천','여자 코트 추천','여자 부츠 추천']);
  let [count, setCount] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [order, setOrder] = useState(0)

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

{/* 글제목 누르면 modal창의 제목도 동일하게 나오게 기능 만들기 */}
{/* 동적인 UI만드는 거니까 
1. html css로 미리 디자인해놓고 

2. 현재 UI의 상태를 state로 만들어두고

3. state 종류에 따라서 UI가 어떻게 보일지 작성  */}

{/* html css는 미리 디자인이 되어있고  

현재 UI상태를 state로 만들어둔다. 

let [order, setOrder] = useState(0) 이렇게.

그리고 state에 따라서 UI가 어떻게 보일지 작성한다. */}


      {
        title.map(function(a, i){
          return (
              <div className="list" key={i}>
                {/* 반복문을 돌때마다 order state가 변할 수 있게 setOrder()함수를 사용해서 order state 값을 변경해준다. */}
                <h4 onClick={()=>{ setModal(true); setOrder(i)}}>
                  {title[i]}
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
      {/* props로 order state를 받고 */}
      {/* 위에서 setOrder()함수로 order state 값이 변경되면 
      변경되는 값이 modal제목에 들어갈 수 있게 연결해준다.  */}
      <h4>{props.title[props.order]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.changeTitle()}}>글수정</button>
    </div>
  )
}

export default App;
