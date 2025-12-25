import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
     const item = action.payload;
     const existingItem = state.items.find(i=>i.id === item.id);

     if(existingItem){
      existingItem.quantity += 1;
     }
     else{
      state.items.push({...item , quantity: 1})
     }
    },

    // Remove item completely
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Increment quantity
    increment: (state, action) => {
      const item = state.items.find(i=> i.id === action.payload);
      if(item){
        item.quantity += 1;
      }
      
    },
    // Decrement quantity
    decrement: (state, action) => {
      const item = state.items.find(i=> i.id === action.payload);
      if(item && item.quantity > 1){
        item.quantity -= 1;
      }
    },

    // Clear Cart
    clearCart: (state)=>{
      state.items = [];
    }
  },
});

export const {addItem,removeItem,increment,decrement,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
