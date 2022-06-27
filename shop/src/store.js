// store.js는 state들을 보관하는 파일
// 리덕스 쓰는이유
// 1. 컴포넌트간 state 공유가 편해짐


import { configureStore, createSlice } from '@reduxjs/toolkit'


// createSlice는 useState 역할임
// // 여기는 state를 만드는 공간
let user = createSlice({
  name : 'user',
  initialState: 'kim',
  // 리덕스 state 변경하는 법
  // 1. state 수정해주는함수 만들고
  // 2. 원할 때 그 함수 실행해달라고 store.js에 요청하기
  // state 수정하는 함수 만들기
  reducers : {
    changeName(state){ //기존 state를 의미함. 
      return 'john ' + state
    }
  }
})

// 만든 수정함수 export 해야함
export let { changeName } = user.actions



let cart = createSlice({
  name : 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
  

})



export default configureStore({
  // 여기는 state를 등록하는 공간
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  
  }
})