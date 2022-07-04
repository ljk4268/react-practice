import './App.css';
import {useState} from 'react';



function App() {

  const [mode, setMode] = useState('WELCOME');

  const [id, setId] = useState(null)
  const [nextId, setNexId] = useState(4);
  
  const [topics, setTopics] = useState([
    {id:1, title: 'html', body: ' html is...'},
    {id:2, title: 'css', body: ' css is...'},
    {id:3, title: 'javascript', body: ' javascript is...'}
  ])

  // content //
  let content = null;

  if( mode === 'WELCOME' ) {
    content = <Article title="Welcome" body="Hello, World!"></Article>
  } else if ( mode === 'READ'){
    
    let title, body = null

    for( let i = 0; i < topics.length; i++ ){
      if( topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body
      }
    }

    content = <Article title={title} body={body}></Article>

  } else if ( mode === 'CREATE' ){
    content = <Create onCreate={(_title, _body)=>{
      // 전달받은 title, body를 topics에 넣기위해 객체로 만들어주는데
      // id 필요하니까 변수 nextId 만들어서 id로 넣어줌 
      const newTopic = {id:nextId, title:_title, body:_body}
      // 깊은복사로 topics에 새로운 객체 넣어주고 
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics)
      // read모드로 바꿔 바디내용 볼 수 있ㄱ ㅔ해주고 
      setMode('READ')
      // id도 바꿔주고 
      setId(nextId)
      // 다음에 추가될 내용을 위해 nextId+1 해줌 
      setNexId(nextId+1)
    }}></Create>
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
        setMode('READ')
        setId(_id)
      }}
      ></Nav>

      {content}

      <a href='/create' onClick={(e)=>{
        e.preventDefault();
        setMode('CREATE');
      }}>Create</a>
      
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
      <a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
        e.preventDefault();
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

function Create(props){
  return(
    <article>
      <h2>Create</h2>
      {/* form태그는 submit을 했을 때 페이지가 리로드됨  */}
      <form onSubmit={(e)=>{
        e.preventDefault();
        // name='title'인 태그 가져오는 방법(e.target.title)
        // name='title'인 태그의 값을 가져오는 방법 
        const title = e.target.title.value
        const body = e.target.body.value
        // props.onCreate(title, body)로 title, body 전달하고 
        props.onCreate(title, body)
      }}>
        <p><input type='text' name='title' placeholder='title'/></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type='submit' value='Create'/></p>
      </form>
    </article>
  )
}



export default App;
