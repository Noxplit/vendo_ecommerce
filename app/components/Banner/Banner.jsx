'use client'

import { addToCart } from '@/app/redux/slice/productsSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

const Banner = ({ image }) => {
  const dispatch = useDispatch()
  const handleBuy = (productItem, quantity) => {
    dispatch(addToCart({...productItem,quantity}))
  }
	return (
		<div className='grid sm:grid-cols-2 grid-cols-1 gap-8 justify-between  '>
      <Image
				src={image.image}
				alt={image.title}
				width={1000}
				height={1000}
				style={{
					width: '100%',
					height: '500px',
					objectFit: 'cover',
					borderRadius: '5px',
					objectPosition: 'top',
				}}
			/>
			<div className='my-flex flex-col items-start'>
				<h1 className='text-2xl font-bold mb-10'>{image.title}</h1>
				<p className='text-gray-300'>{image.description}</p>
				<div className='my-flex'>
					<p className='my-category'>{image.category}</p>
					<p className='text-red-300 font-bold text-xl'>{Math.floor(image.price * 0.8)}$</p>
				</div>
				<div className='my-flex justify-start my-4'>
					<button onClick={() => handleBuy(image,10)} className='py-2 px-4 bg-white rounded-md text-black focus:bg-black focus:text-white'>Buy</button>
					<Link href={`/product/${image.id}`} className='py-2 px-4 bg-white rounded-md text-black'>
						Description
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Banner
