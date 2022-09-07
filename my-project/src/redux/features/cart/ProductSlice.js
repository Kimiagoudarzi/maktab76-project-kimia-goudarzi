import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productSlice: [],
  loading: false,
  error: "error",
};
export const fetchProductsCard = createAsyncThunk(
  "productSlice/fetchProductsCard",
  async () => {
    try {
      const res = await axios.get("http://localhost:3002/products");
      return res.data;
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
      state.loading = false;
      state.error = "something went wrong..";
    },
  },
});

export default ProductsSlice.reducer;
