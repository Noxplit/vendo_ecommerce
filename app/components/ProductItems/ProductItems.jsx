'use client'

import { addToFavorite, removeFromFavorite } from '@/app/redux/slice/favorite/favoriteSlice'
import { addToCart } from '@/app/redux/slice/productsSlice'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Filters from '../Filters/Filters'

const ProductItems = ({ products, title = 'Big Sale -20%', amount=20 }) => {
	const [price, setPrice] = useState(1000)
	const [countAmount, setCountAmount] = useState(amount)
  const [value,setValue] = useState({price, countAmount})
	const { favorite } = useSelector(state => state.favorite)
	const data = products.slice(0, value.countAmount)
	const filter = data.filter(product => product.price < value.price)
	const dispatch = useDispatch()

	const handleBuy = (productItem, quantity) => {
		dispatch(addToCart({ ...productItem, quantity }))
	}

	const handleFavorite = product => {
		const isAddToFavorite = favorite.some(fav => fav.id === product.id)

		if (isAddToFavorite) {
			dispatch(removeFromFavorite(product.id))
		} else {
			dispatch(addToFavorite(product))
		}
	}
	if (!filter.length) {
		return (
			<>
				<h1 className='text-7xl font-bold  my-8'>{title}</h1>
				<Filters setPrice={setPrice} setValue={setValue} price={price} countAmount={countAmount} setCountAmount={setCountAmount}/>
				<h1 className='h-[500px] text-5xl my-flex uppercase'>No Products</h1>
			</>
		)
	}

	return (
		<>
			<h1 className='text-7xl font-bold  my-8'>{title}</h1>
      <Filters setCountAmount={setCountAmount} setValue={setValue} price={price} countAmount={countAmount} setPrice={setPrice}/>
		
			<ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 my-5 '>
				{filter.map(product => (
					<li
						className='my-flex flex-col justify-between text-black bg-white p-2 rounded-md'
						key={product.id}>
						<Link href={`/product/${product.id}`}>
							<Image
								src={product.image}
								alt={product.title}
								width={1000}
								height={1000}
								style={{
									width: '200px',
									height: '200px',
									objectFit: 'cover',
									cursor: 'pointer',
									borderRadius: '5px',
								}}
							/>
						</Link>
						<h2>{product.title}</h2>
						<p className='my-category'>{product.category}</p>
						<div className='my-flex justify-between w-[100%]'>
							<div>
								<p className='text-gray-500 line-through'>{product.price}$</p>
								<p className='text-red-500 font-bold'>{Math.floor(product.price * 0.8)}$</p>
							</div>
							<div className='my-flex'>
								<MdFavoriteBorder
									size={25}
									className='cursor-pointer '
									onClick={() => handleFavorite(product)}
								/>
								<button
									onClick={() => handleBuy(product, 10)}
									className='border-2 border-black py-2 px-8 rounded-md focus:bg-black focus:text-white'>
									Buy
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}

export default ProductItems
