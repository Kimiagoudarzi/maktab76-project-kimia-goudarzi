import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsCards: [],
  loading: false,
  error: "error",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:3002/products?category=${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
// export const fetchCategoriesProducts = createAsyncThunk(
//   "products/fetchCategoriesProducts",
//   (id) => {
//     return axios
//       .get(`http://localhost:3002/category${id}`)
//       .then((res) => res.data);
//   }
// );

export const HomeProducts = createSlice({
  name: "productsCards",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default HomeProducts.reducer;
