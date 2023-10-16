'use client'
import { addToFavorite, removeFromFavorite } from '@/app/redux/slice/favorite/favoriteSlice'
import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

const FavoriteButton = ({ product }) => {
	const dispatch = useDispatch()
	const { favorite } = useSelector(state => state.favorite)
	const handleFavorite = product => {
		const isAddToFavorite = favorite.some(fav => fav.id === product.id)
		if (isAddToFavorite) {
			dispatch(removeFromFavorite(product.id))
		} else {
			dispatch(addToFavorite(product))
		}
	}
	return (
		<button
			onClick={() => handleFavorite(product)}
			className='py-2 px-4 bg-white rounded-md text-black my-flex focus:bg-black focus:text-white'>
			<MdFavoriteBorder size={25} />
			Favorite
		</button>
	)
}

export default FavoriteButton
