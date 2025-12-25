import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    quary: "",
  },
  reducers: {
    setSearchQuary: ( state,action)=>{
        state.quary = action.payload;
    }
  },
})


export const { setSearchQuary } = searchSlice.actions

export default searchSlice.reducer