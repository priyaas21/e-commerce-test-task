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
      // state.cartList = [...state.cartList, action.payload];
      const currentCartData =
        JSON.parse(localStorage.getItem('cartList')) || [];
      const cartData = [...currentCartData, action.payload];
      localStorage.setItem('cartList', JSON.stringify(cartData));
    },
    removeCartItem: (state, action) => {
      const prodId = action.payload;
      // state.cartList = state.cartList.filter((c) => c.id !== prodId);
      const cartList = JSON.parse(localStorage.getItem('cartList'));
      const newList = cartList.filter((c) => c.id !== prodId);
      localStorage.setItem('cartList', JSON.stringify(newList));
    },
  },
});

export const { getProductDetails, setCartList, removeCartItem } =
  productSlice.actions;
export default productSlice.reducer;
