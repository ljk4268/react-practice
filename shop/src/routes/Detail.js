
import { useParams } from "react-router-dom";

function Detail(props){

  // 유저가 /detail/:id자리에 입력한 값
  // 그니까 ':id' 이 자리에 입력한 값을 가지고 와주는 함수가 useParams()함수이다. 
  // useParams()의 값을 변수로 담으면 JSX에서 사용할 수 있음

  let {id} = useParams();
  // find함수를 통해서 shoes 배열에 들어있는 각 객체들 내용 중 객체.id값이 useParams()로 찾은 id 값과 같은 요소를 가져온다. 
  let shoe = props.shoes.find(shoe => shoe.id == id)

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (shoe.id+1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          {/*  props.shoes[0].title에 현재 Url에 입력한 숫자가 보이게 하면 내용이 다 다르게 보임*/}
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
    )
}

export default Detail;