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

  // 업데이트 페이지를 위해 변수 하나 만들어주고 
  // {/* content가 read 일 때만 업데이트 버튼 보이기 위해서 아래 코드처럼 작성함  */}
  let contextControl = null;

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
    contextControl = <li><a href={'/update'+ id}
      onClick={(e)=>{
        e.preventDefault();
        setMode('UPDATE');
      }}
    >Update</a></li>

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

    // 모드가 Update일 때 실행될 코드들 작성
  } else if ( mode == 'UPDATE'){

    // update 클릭했을 때 화면에 나타날 title과 body 값 얻어내기 위한 코드
    let title, body = null

    for( let i = 0; i < topics.length; i++ ){
      if( topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body
      }
    }

    // 모드가 update일 때 content에 들어갈 내용 
    // props로 title 과 body 넘겨줌
    content = <Update title={title} body={body} 
    // 전달받은 title, body로 수정 하기 
    onUpdate={(title, body)=>{
      // topics내용이 변경되어야 하는데 얘가 객체니까 깊은복사 해주고 
      const newTopic = [...topics]
      // 전달받은 내용들을 topics에 넣어주기 위해 데이터모양 동일하게 데이터 만들어주고 
      const updatedTopic = {id:id, title:title, body:body}
      // for문 돌려서 내가 수정한 데이터의 id랑 topics에 들어있는 데이터중의 id랑 동일한거 찾아서 해당 데이터만 수정되게 만들어줌 
      for ( let i = 0 ;  i< newTopic.length; i++ ){
        if( newTopic[i].id === id ){
          newTopic[i] = updatedTopic;
          break;
        }
      }
      // topics 수정하고 
      setTopics(newTopic);
      // content=READ모드로 변경 
      setMode('READ');
      
    }}></Update>
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

      <ul>

        <li><a href='/create' onClick={(e)=>{
          e.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>

        {/* content가 read 일 때만 업데이트 버튼 보이기 위해서 아래 코드처럼 작성함  */}
        {contextControl}
        

      </ul>
      


      
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

// Update 컴포넌트 
function Update(props){
  // 전달받은 props title, body를 수정 가능하게 useState로 만듬 
  const [title, setTitle] = useState(props.title); 
  const [body, setBody] = useState(props.body); 

  return(
    // html은 Crate 컴포넌트와 유사하니 복붙하고 
    <article>
      <h2>Update</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
        const title = e.target.title.value
        const body = e.target.body.value
        props.onUpdate(title, body)
      }}>
        <p>
          {/* input value에 전달받은 props.title 넣어주는데 useState로 수정가능하게 만들어줬으니까 title 넣고  */}
          {/* onChange이벤트로 title 내용이 수정될 때마다 title 값 변하게 해줌. */}
          <input type='text' name='title' placeholder='title' value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
        </p>
        <p>
          {/* title과 동일  */}
          <textarea name='body' placeholder='body' value={body} onChange={(e)=>{
            setBody(e.target.value)
          }}></textarea>
          </p>
        <p><input type='submit' value='Update'/></p>
      </form>
    </article>  
  )
}



export default App;
