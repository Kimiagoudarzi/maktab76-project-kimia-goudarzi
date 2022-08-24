import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    productSkin: [],
    loading: false,
    error: "error",
}
export const fetchProductSkin = createAsyncThunk("productSkin/fetchProductSkin", async() => {
    try {
      const response = await axios.get("http://localhost:3002/products?category=2")
      return response.data
    }catch(error){ 
      return Promise.reject(error);
    }
  });

export const productSkin = createSlice({
    name : "productSkin",
    initialState,
    extraReducers :(builder) => {
        builder.addCase(fetchProductSkin.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(fetchProductSkin.fulfilled, (state, action) => {
          state.loading = false;
          state.productSkin = action.payload;
        });
        builder.addCase(fetchProductSkin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
      }
})
export default productSkin.reducer;