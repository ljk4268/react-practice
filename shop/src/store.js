// store.js는 state들을 보관하는 파일
// 리덕스 쓰는이유
// 1. 컴포넌트간 state 공유가 편해짐


import { configureStore, createSlice } from '@reduxjs/toolkit'


// createSlice는 useState 역할임
// // 여기는 state를 만드는 공간
let user = createSlice({
  name : 'user',
  initialState: 'kim'
})

let stock = createSlice({
  name : 'stock',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})



export default configureStore({
  // 여기는 state를 등록하는 공간
  reducer: {
    user : user.reducer,
    stock : stock.reducer
  
  }
})