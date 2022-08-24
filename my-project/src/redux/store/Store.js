import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../features/ProductCosmetic"; 
import productSkin from "../features/ProductSkin";
import productHair from "../features/ProductHair";
import ProductPerfume from '../features/ProductPerfume';


const store = configureStore({
  reducer: {
    products : productSlice ,
    productSkin : productSkin,
    productHair : productHair,
    productPerfume : ProductPerfume
  }
})
export default store;