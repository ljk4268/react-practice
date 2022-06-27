import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';

// Reducx를 사용하면 컴포넌트들이 props 없이 state 공유가 가능하다. 

function Cart(){

// 리덕스 store를 가져와줌
// 리덕스 store에 있는 모든 state가 남음
// state.작명 쓰면 내가 원하는 state만 가져다 쓸 수 있음 
  let stock = useSelector((state)=> state.stock )

  return(
    <div>
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
        {
          stock.map(function(shoes, i){
            return(
              <tr key={i}>
                <td>1</td>
                <td>{shoes.name}</td>
                <td>{shoes.count}</td>
                <td>수정중</td>
              </tr>
            )
          })
        }
          
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;