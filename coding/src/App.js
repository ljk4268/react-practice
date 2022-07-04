import './App.css';



function App() {
  const topics = [
    {id:1, title: 'html', body: ' html is...'},
    {id:2, title: 'css', body: ' css is...'},
    {id:3, title: 'javascript', body: ' javascript is...'}
  ]

  return (
    <div>
      {/* 리액트의 속성은 props */}
      {/* 속성을 전달하는 방법은 아래처럼 컴포넌트를 가져다 쓰면서 작명과 변수 써주면됨 */}
      <Header title="REACT"></Header>

      {/* 위의 const topics 배열을 props로 전달하고 싶다면  중괄호로 감싸줘야한다. */}
      {/* 그냥 topics='topics'로 전달하면 문자 그자체가 전달됨 */}
      <Nav topics={topics}></Nav>

      <Article title="Welcome" body="Hello, World!"></Article>

    </div>
  );
}



// 컴포넌트(=사용자 정의) 만드는 방법 function형 함수 문법 
// props로 보내진 변수 받을 수 있음.
// title: REACT라는 객체를 받아올 수 있는데 객체 문법에 따라서 
// props.title하면 REACT를 보여줄 수 있음. 
function Header(props){
  return(
    <header>
        <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = []
  // 위의 const topics를 하나씩 가져다 쓰고 싶어서 
  // const topics이 배열이니까 
  // for문으로 돌려줌 
  for(let i =0; i < props.topics.length; i++){
    let t = props.topics[i]
    // 리액트가 const lis이라는 배열안에 내용을 하나씩 보여줄 수 있게 push로 내용 넣어줌 
    // 리액트가 자동으로 만들어준 태그의 경우 리액트가 이 태그들을 추척을 할 때 근거를 주는 key임. > 성능에 좋다구함. 
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return(
    <nav>
      <ol>
        {/* const lis = [] 가 있으니 컴포넌트 안에 중과로 써서 변수 이름 넣어주면 리액트가 알아서 화면에 배열을 하나씩 꺼내서 보여줌.  */}
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
