import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartTotalAmount: localStorage.getItem("cartTotalAmount")
    ? JSON.parse(localStorage.getItem("cartTotalAmount"))
    : "",
  userForm: localStorage.getItem("userForm")
    ? JSON.parse(localStorage.getItem("userForm"))
    : {},
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  entity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // clear
    clearCart(state, action) {
      state.cartItems = [];
      state.userForm = {};
      state.cartTotalAmount = "";
      // localStorage.removeItem("cartItems");
      localStorage.clear();
      // localStorage.clear();
      // localStorage.setItem("userForm" );
      // localStorage.setItem("cartTotalAmount");
    },
    // remove
    removeFromCart(state, action) {
      let remainingArr = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = remainingArr;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // Add
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    
    userForm(state, action) {
      // console.log("action", action.payload);
      state.userForm = action.payload;
      localStorage.setItem("userForm", JSON.stringify(state.userForm));
    },

    // PostData
    finalSend(state, action) {
      if (localStorage.getItem("userForm") !== null) {
        axios
          .post("http://localhost:3002/orders", JSON.parse(localStorage.getItem("userForm")))
          .then((res) => {
            console.log("res", res);
          })
          .catch((err) => {
            console.log("error", err);
          });
      } else {
        console.log("we r in else mode");
      }
    },
    
    // Total
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItems) => {
          const { price, entity } = cartItems;
          const itemTotal = price * entity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += entity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      // console.log("total", total);
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      localStorage.setItem(
        "cartTotalAmount",
        JSON.stringify(state.cartTotalAmount)
      );
    },
  },
});

export const {
  getTotals,
  addToCart,
  clearCart,
  removeFromCart,
  userForm,
  finalSend,
} = CartSlice.actions;
export default CartSlice.reducer;
