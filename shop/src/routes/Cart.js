import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
// redux state 변경함수 import 해오고 
import { changeName } from './../store'

// Reducx를 사용하면 컴포넌트들이 props 없이 state 공유가 가능하다. 

function Cart(){

// 리덕스 store를 가져와줌
// 리덕스 store에 있는 모든 state가 남음
// state.작명 쓰면 내가 원하는 state만 가져다 쓸 수 있음 
  let cart = useSelector((state)=> state.cart )
  let user = useSelector((state)=> state.user )
  // redux state 변경함수 사용할 수 있게 도와주는 useDispatch함수 변수로 만들어서 
  let dispatch = useDispatch()

  return(
    <div>

    {user}의 장바구니

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
        {/* redux store에서 가져온 데이터(=배열) 데이터바인딩하기 */}
        {/* redux state 변경하기 */}

        {
          cart.map((shoes, i) => 
              <tr key={i}>
                <td>1</td>
                <td>{shoes.name}</td>
                <td>{shoes.count}</td>
                <td><button onClick={()=>{
                // 변수 dispatch에 state변경함수 감싸주기 
                  dispatch(changeName())
                }}>+</button></td>
              </tr>
            )
        }
          
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;