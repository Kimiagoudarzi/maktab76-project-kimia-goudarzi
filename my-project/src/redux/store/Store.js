import { configureStore } from '@reduxjs/toolkit';
import  usersSlice  from 'redux/features/user/userSlice';
import ProductSlice from 'redux/features/cart/ProductSlice';
import CartSlice from "../features/cart/CartSlice";
import ProductsCard from 'redux/features/productsCard/ProductsCard';
import  ProductsHome from "redux/features/HomeProducts";


const store = configureStore({
  reducer: {
    productsHome:  ProductsHome,
    products : ProductsCard,
    users : usersSlice,
    productSlice : ProductSlice,
    cart: CartSlice,
  }
})
export default store;