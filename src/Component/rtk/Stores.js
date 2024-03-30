import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./reduxSlice";
import cartSlice from "./CartSlice";

// this is main store that combine to reducer in one  configureStore function
export const store = configureStore({
  reducer: {
    productCart: ProductsSlice,
    cart: cartSlice,
  },
});
