import { createSlice } from '@reduxjs/toolkit';
import productsData from '../Utils/product.json';

const initialState = {
  products: [],
  cartList: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductDetails: (state) => {
      state.products = productsData;
    },
    setCartList: (state, action) => {
      state.cartList = [...state.cartList, action.payload];
    },
    removeCartItem: (state, action) => {
      const prodId = action.payload;
      state.cartList = state.cartList.filter((c) => c.id !== prodId);
    },
  },
});

export const { getProductDetails, setCartList, removeCartItem } =
  productSlice.actions;
export default productSlice.reducer;
