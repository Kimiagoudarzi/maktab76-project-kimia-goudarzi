import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    productHair: [],
    loading: false,
    error: "error",
}
export const fetchProductHair = createAsyncThunk("productHair/fetchProductHair", async() => {
    try {
      const response = await axios.get("http://localhost:3002/products?category=3")
      return response.data
    }catch(error){ 
      return Promise.reject(error);
    }
  });

export const productHair = createSlice({
    name : "productHair",
    initialState,
    extraReducers :(builder) => {
        builder.addCase(fetchProductHair.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(fetchProductHair.fulfilled, (state, action) => {
          state.loading = false;
          state.productHair = action.payload;
        });
        builder.addCase(fetchProductHair.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
      }
})
export default productHair.reducer;