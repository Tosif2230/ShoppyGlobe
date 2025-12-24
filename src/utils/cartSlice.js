import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
     state.items.push(action.payload);
    },

    // Remove item completely
    removeItem: (state, action) => {
      state.items.pop()
    },

    // Increment quantity
    increment: (state, action) => {
      
    },
    // Decrement quantity
    decrement: (state, action) => {
    },

    // Increment by custom amount
    incrementByAmount: (state, action) => {
    },
  },
});

export const {addItem,removeItem,increment,decrement,incrementByAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
