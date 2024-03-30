import { createSlice } from "@reduxjs/toolkit";
// this is action and reducer of add product and remove him and clear all product of cart  ==>redux-toolKit
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addproduct: (state, action) => {
      const findproduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findproduct) {
        findproduct.quantity += 1;
      } else {
        const productclone = { ...action.payload, quantity: 1 };
        state.push(productclone);
      }
    },
    removeproduct: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
    clearcart: (state, action) => {
      return [];
    },
    upQuantityProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      }
    },
    downQuantityProduct: (state, action) => {
      const findProducts = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProducts) {
        findProducts.quantity -= 1;
      }
      if (findProducts.quantity <= 0) {
        return alert("You are remove this item from cart");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addproduct,
  removeproduct,
  clearcart,
  upQuantityProduct,
  downQuantityProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
