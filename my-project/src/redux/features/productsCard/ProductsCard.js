// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   products: [],
//   loading: false,
//   error: "error",
// };
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (id) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3002/products?category=${id}`
//       );
//       return res.data;
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   }
// );

// export const ProductsCard = createSlice({
//   name: "products",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//     });
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     });
//   },
// });
// export default ProductsCard.reducer;
