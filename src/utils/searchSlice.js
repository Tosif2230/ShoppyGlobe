import { createSlice } from '@reduxjs/toolkit'



export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    quary: "",
  },
  reducers: {
    setSearchQuary: ( state,action)=>{
        searchSlice.quary = action.payload;
    }
  },
})


export const { setSearchQuary } = searchSlice.actions

export default searchSlice.reducer