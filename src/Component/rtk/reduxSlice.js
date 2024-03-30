import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// this is action and reducer of get data by fetch function ==>redux-toolKit
export const fetchProducts = createAsyncThunk(
  "ProductsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

export const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
