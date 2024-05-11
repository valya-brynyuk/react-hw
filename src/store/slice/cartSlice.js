import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        ...action.payload,
        quantity: 1
      });
    },
    updateQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.productId);
      state.items[index].quantity = action.payload.quantity;
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    removeFromCart: (state, action) => {
      state.items.splice(state.items.findIndex(item => item.id === action.payload), 1);
    },
  },
  selectors: {
    cartItemsCount: state => state.items.length,
    allCartItems: state => state.items,
    cartTotal: state => state.items.reduce((prev, curr) => {
      return (prev + curr.price * (curr.quantity || 1));
    }, 0)
  },
});

export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;

export const {allCartItems, cartItemsCount, cartTotal} = cartSlice.selectors;

export default cartSlice.reducer;