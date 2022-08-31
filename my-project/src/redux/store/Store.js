import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../features/ProductCosmetic"; 
import productSkin from "../features/ProductSkin";
import productHair from "../features/ProductHair";
import ProductPerfume from '../features/ProductPerfume';
import { usersSlice } from 'redux/features/user/userSlice';


const store = configureStore({
  reducer: {
    products : productSlice ,
    productSkin : productSkin,
    productHair : productHair,
    productPerfume : ProductPerfume,
    users : usersSlice
  }
})
export default store;