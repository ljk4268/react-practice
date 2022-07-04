import './App.css';



function App() {
  const topics = [
    {id:1, title: 'html', body: ' html is...'},
    {id:2, title: 'css', body: ' css is...'},
    {id:3, title: 'javascript', body: ' javascript is...'}
  ]

  return (
    <div>
      <Header 
      title="REACT"
      // props는 함수도 전달 가능함! 
      onChangeMode={()=>{
        alert('Header')
      }}
      ></Header>

      <Nav 
      topics={topics}
      onChangeMode={(id)=>{
        alert(id)
      }}
      ></Nav>

      <Article title="Welcome" body="Hello, World!"></Article>

    </div>
  );
}

function Header(props){
  return(
    <header>
        <h1><a href="/" 
        onClick={(e)=>{
          // 클릭해도 리로드가 되지 않게 막아줌 
          e.preventDefault();
          // alert함수가 발동되게 해줌 
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
      <a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
      // 리로드 방지해줌 
        e.preventDefault();
        // alert함수가 실행되게 해주며, 매개변수로 a태그의 id값을 전달해줌 
        props.onChangeMode(e.target.id);
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
