import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productSlice: [],
  loading: false,
  error: "error",
};
export const fetchProductsCard = createAsyncThunk(
  "products/fetchProductsCard",
  async () => {
    try {
      const response = await axios.get("http://localhost:3002/products");
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const ProductsSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductsCard.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductsCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProductsCard.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
  },
});

export default ProductsSlice.reducer;
