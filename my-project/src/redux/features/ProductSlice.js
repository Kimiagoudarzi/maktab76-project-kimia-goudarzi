import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    products: [],
    loading: false,
    error: "",
}
export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
    return axios
      .get("http://localhost:3002/products")
      .then((res) => res.data)
      .catch((error) => error.massage);
  });

const productSlice = createSlice({
    name : "products",
    initialState,
    extraReducers :(builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          console.log(action.payload);
          state.loading = false;
          state.products.push(action.payload)
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
      }
})
export default productSlice.reducer;