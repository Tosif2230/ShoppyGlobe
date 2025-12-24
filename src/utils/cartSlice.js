import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem:(state,action) => {

    },
    removeItem:(state,action) => {

    },
    increment: (state, action) => {
   
    },
    decrement: (state, action) => {
      
    },
    incrementByAmount: (state, action) => {
      
    },
  },
})


export const { addItem, removeItem, increment, decrement, remove } = cartSlice.actions

export default cartSlice.reducer