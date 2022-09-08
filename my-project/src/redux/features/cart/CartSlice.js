import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartTotalAmount: 0,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      // state.cartItems.map((cartItem) => {
      //   if (cartItem.id === action.payload.id) {
      //     const nextCartItems = state.cartItems.filter(
      //       (item) => item.id !== cartItem.id
      //     );
      //     state.cartItems = nextCartItems;
      //   }
      //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      //   return state;
      // });
      let remainingArr = state.cartItems.filter(
        (item) => item.id != action.payload.id
      );
      state.cartItems = remainingArr;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // console.log("remainingArr", remainingArr);
      // console.log("action payload delete is", action.payload);
    },
    addToCart(state, action) {
      // console.log("state is", state);
      // console.log("state.cartItems is", state.cartItems);
      // const existingIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      state.cartItems = [...state.cartItems, action.payload];
      // if (action.payload.entity >= 0) {
      //   state.cartItems[existingIndex] = {
      //     ...state.cartItems[existingIndex],
      //     cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
      //   };
      // } else {
      //   let tempProductItem = { ...action.payload, cartQuantity: 1 };
      //   state.cartItems.push(tempProductItem);
      // }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItems) => {
          const { price, cartQuantity } = cartItems;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          console.log(price);
          console.log(typeof(itemTotal));
          console.log(cartTotal);
          return cartTotal;
          
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { getTotals, addToCart, clearCart, removeFromCart } =
  CartSlice.actions;
export default CartSlice.reducer;
