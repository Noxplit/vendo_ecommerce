import {createSlice } from '@reduxjs/toolkit'


export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		cart: [],
    favorite:[]
	},
	reducers: {
    addToCart:(state,{payload}) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1}
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

      state.cart = newCart;
    },
    removeFromCart:(state,action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },

   
  }
})

export const {addToCart,removeFromCart } = productsSlice.actions

export default productsSlice.reducer
