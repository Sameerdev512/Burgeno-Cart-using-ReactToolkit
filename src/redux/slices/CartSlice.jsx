import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const ExistItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (ExistItem) {
        state.cart = state.cart.map((item) => {
          return item.id == action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },

    increseQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id == action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },

    decreaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id == action.payload ? { ...item, qty:item.qty >1?item.qty-1:item.qty} : item
      );
    },
  },
});

export const { addToCart, removeFromCart,increseQuantity,decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
