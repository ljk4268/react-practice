import { createSlice } from '@reduxjs/toolkit'


// createSlice는 useState 역할임
// // 여기는 state를 만드는 공간
let user = createSlice({
  name : 'user',
  initialState: { name : 'kim', age : 20 },

  // 리덕스 state 변경하는 법 - array, object일 때!
  // 1. state 수정해주는함수 만들고
  // 2. 원할 때 그 함수 실행해달라고 store.js에 요청하기
  // state 수정하는 함수 만들기
  reducers : {
    // state 변경함수들을 action이라고 함 
    changeName(state){ //기존 state를 의미함. 
      // return문을 쓰지 않아도 직접 수정이 가능함. array, object인 경우에만!
      state.name = 'park'
    },
    // 내가 원하는 변수내용으로 내용을 변경하고 싶을 때 action payload! 
    changeAge(state, action){
      state.age += action.payload
    }
  }
})

// 만든 수정함수 export 해야함
export let { changeName, changeAge } = user.actions

export default user

