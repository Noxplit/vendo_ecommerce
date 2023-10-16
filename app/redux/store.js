import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slice/productsSlice.js'
import favoriteSlice from './slice/favorite/favoriteSlice.js'

export const store = configureStore({
  reducer: {
    products:productsSlice,
    favorite:favoriteSlice
  },
})
