import './App.css';
import {useState} from 'react';



function App() {
  // useState는 배열을 반환하고 
  // 0번쨰 데이터는 상태의 값이 들어가고 
  // 1번째 데이터는 상태의 값을 변경할 때 사용하는 함수가 들어감 
  const [mode, setMode] = useState('WELCOME');
  // 클릭한 타이틀마다 다른내용 보여주기 위해 id 변수하나 만들고 
  const [id, setId] = useState(null)
  
  const topics = [
    {id:1, title: 'html', body: ' html is...'},
    {id:2, title: 'css', body: ' css is...'},
    {id:3, title: 'javascript', body: ' javascript is...'}
  ]

  let content = null;
  if( mode === 'WELCOME' ) {
    content = <Article title="Welcome" body="Hello, World!"></Article>
  } else if ( mode === 'READ'){

    // content = <Article title={title} body={body}></Article>에 동적으로 내용 넣어주기 위해 변수 title, body 생성해주고
    
    let title, body = null

    // Nav 컴포넌트에서 전달받은 id
    // props.onChangeMode(Number(e.target.id))로 전역상수변수 topics의 내용 찾기 위해 for문을 돌려줘 
    // 전달받은 e.target.id랑 topics의 id랑 일치하면 
    // 변수title에 해당 topics title 넣어주고 body 넣어주는거야 
    for( let i = 0; i < topics.length; i++ ){
      if( topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body
      }
    }

    // 그 다음 동적으로 내용 보여주기 위해 변수들 중괄호로 가둬
    content = <Article title={title} body={body}></Article>

  }

  return (
    <div>
      <Header 
      title="WEB"
      onChangeMode={()=>{
        setMode('WELCOME')
      }}
      ></Header>

      <Nav 
      topics={topics}
      onChangeMode={(_id)=>{
        // mode의 값이 변경되면 컴포넌트 함수가 새로 실행되면서
        // 새로운 리턴값이 만들어지고 그 리턴값이 UI에 반영되게 하고픔! 
        // 이땐 state를 사용해야함.
        // useState라는 훅을 사용해야함. 
        // useState에 들어가 있는 상태의 값을 변경할 때 사용하는 함수 사용하기
        setMode('READ')
        // props.onChangeMode(Number(e.target.id))로 id 전달받으니까 전달받은 아이디 setId로 id 값 변경해줌 
        setId(_id)
      }}
      ></Nav>

      
      {/* 동적으로 변하니까 중괄호로 변수 content 넣어주고  */}

      {content}
      
    </div>
  );
}

function Header(props){
  return(
    <header>
        <h1><a href="/" 
        onClick={(e)=>{
          e.preventDefault();
          props.onChangeMode()
        }
      }>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = []

  for(let i =0; i < props.topics.length; i++){
    let t = props.topics[i]
    lis.push(
    <li key={t.id}>
      {/* 태그의 속성으로 숫자를 넘기면 문자가 됨  */}
      <a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
        e.preventDefault();
        // 아래 있는 e.target.id는 문자.
        // 숫자로 바꾸고 싶으면 Number함수 쓰기
        props.onChangeMode(Number(e.target.id));
      }}>{t.title}</a>
    </li>)
  }

  return(
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}



export default App;
