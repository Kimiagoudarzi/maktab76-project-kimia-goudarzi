import { configureStore } from '@reduxjs/toolkit';
import ProductCosmetic from "../features/ProductCosmetic"; 
import productSkin from "../features/ProductSkin";
import productHair from "../features/ProductHair";
import ProductPerfume from '../features/ProductPerfume';
import  usersSlice  from 'redux/features/user/userSlice';
import ProductSlice from 'redux/features/cart/ProductSlice';
import CartReducer from "../features/cart/CartSlice";
import ProductsCard from 'redux/features/productsCard/ProductsCard';


const store = configureStore({
  reducer: {
    products : ProductCosmetic ,
    productSkin : productSkin,
    productHair : productHair,
    productPerfume : ProductPerfume,
    users : usersSlice,
    productSlice : ProductSlice,
    productsCards : ProductsCard,
    cart: CartReducer
  }
})
export default store;