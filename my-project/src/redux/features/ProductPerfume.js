import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    productPerfume: [],
    loading: false,
    error: "error",
}
export const fetchProductPerfume = createAsyncThunk("productPerfume/fetchProductPerfume", async() => {
    try {
      const response = await axios.get("http://localhost:3002/products?category=4")
      return response.data
    }catch(error){ 
      return Promise.reject(error);
    }
  });

export const productPerfume = createSlice({
    name : "productPerfume",
    initialState,
    extraReducers :(builder) => {
        builder.addCase(fetchProductPerfume.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(fetchProductPerfume.fulfilled, (state, action) => {

          state.loading = false;
          state.productPerfume = action.payload;
        });
        builder.addCase(fetchProductPerfume.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
      }
})
export default productPerfume.reducer;