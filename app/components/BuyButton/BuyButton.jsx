'use client'
import { addToCart } from '@/app/redux/slice/productsSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const BuyButton = ({ product }) => {
	const dispatch = useDispatch()
	const handleBuy = (productItem, quantity) => {
		dispatch(addToCart({ ...productItem, quantity }))
	}

	return (
		<button
			onClick={() => handleBuy(product, 10)}
			className='py-2 px-4 bg-white rounded-md text-black focus:bg-black focus:text-white'>
			Buy
		</button>
	)
}

export default BuyButton
