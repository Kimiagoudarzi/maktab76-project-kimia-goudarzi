import { configureStore } from '@reduxjs/toolkit';
import  usersSlice  from 'redux/features/user/userSlice';
import ProductSlice from 'redux/features/cart/ProductSlice';
import CartReducer from "../features/cart/CartSlice";
import ProductsCard from 'redux/features/productsCard/ProductsCard';


const store = configureStore({
  reducer: {
    products : ProductsCard,
    users : usersSlice,
    productSlice : ProductSlice,
    cart: CartReducer
  }
})
export default store;