import './App.css';
import {useState} from 'react';



function App() {
  const [mode, setMode] = useState('WelCome!')
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title: 'html', body: 'html is ...'},
    {id:2, title: 'css', body: 'css is ...'},
    {id:3, title: 'javascript', body: 'javascript is ...'}
  ])

  let content = null;
  if (mode === 'WelCome!') {
    content = <Airticle title="Welcom" body="Hello, WEB"></Airticle>
  } else if (mode === 'read'){
    let title, body = null
    for( let i=0; i< topics.length; i++ ){
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Airticle title={title} body={body}></Airticle>
  } else if (mode === 'create'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id: nextId, title: _title, body: _body}
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics)
      setMode('read')
      setId(nextId);
      setNextId(nextId+1)
    }}></Create>
  }
  return (
    <div>
      {/* 컴포넌트 = 사용자 정의 태그 */}
      <Header title="WEB" onChangeMode={function(){
        setMode('WelCome!')
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('read')
        setId(_id)
      }}></Nav>
      {content}
      <a href="/create" onClick={(e)=>{
        e.preventDefault();
        setMode('create')
      }}>Create</a>
    </div>
  );
}

function Create(props){
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body)
      }}>
        
        <p><input type='text' name='title' placeholder='title'/></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type='submit' value='Create'/></p>

        
      </form>
    </article>  
  )
}

function Header(props){
  return(
    <header>
      <h1><a href="/" onClick={function(e){
      // 이벤트 상황을 제어할 수 있는 여러가지 기능이 있는데 
      //e.preventDefault 함수를 사용하게 되면 a가 동작하는 기본동작을 방지함. 
      // 기본동작을 방지하면 클릭해도 리로드가 되지 않는다. 
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = []
  for( let i =0; i< props.topics.length; i++ ){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id = {t.id} href={'/read/'+t.id} onClick={(e)=>{
        e.preventDefault();
        props.onChangeMode(Number(e.target.id));
      }}>{t.title}</a>
      </li>)
  }
  return(
    <ol>
      {lis}
    </ol>
  )
}

function Airticle(props){
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>  
  )
}

export default App;
