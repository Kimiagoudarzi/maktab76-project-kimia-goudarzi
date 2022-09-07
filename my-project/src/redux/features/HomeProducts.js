import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsHome: [],
  loading: false,
  error: "error",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:3002/products?_page=1&&_limit=5"
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const ProductsHome = createSlice({
  name: "productsHome",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productsHome = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default ProductsHome.reducer;
