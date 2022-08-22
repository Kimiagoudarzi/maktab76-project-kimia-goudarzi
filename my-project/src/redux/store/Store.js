import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../features/ProductSlice"; 


const store = configureStore({
  reducer: {
    products : productSlice
  }
})
export default store;