import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		favorite: [],
	},
	reducers: {
		addToFavorite: (state, { payload }) => {
			state.favorite.push(payload)
		},
		removeFromFavorite: (state, action) => {
			state.favorite = state.favorite.filter(item => item.id !== action.payload)
		},
	},
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
