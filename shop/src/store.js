// store.js는 state들을 보관하는 파일
// 리덕스 쓰는이유
// 1. 컴포넌트간 state 공유가 편해짐


import { configureStore, createSlice } from '@reduxjs/toolkit'
// 파일 분할!
import user  from './store/userSlice'


let cart = createSlice({
  name : 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state,action){
      let idx = state.findIndex((a)=>{return a.id == action.payload})
      state[idx].count++
    },
    addItem(state,action){
      console.log(action.payload)
      state.push(action.payload)
    }
  }
})

export let { changeCount, addItem } = cart.actions



export default configureStore({
  // 여기는 state를 등록하는 공간
  reducer: {
    cart : cart.reducer,
    user : user.reducer
  }
})