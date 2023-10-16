import BuyButton from '@/app/components/BuyButton/BuyButton'
import FavoriteButton from '@/app/components/FavoriteButton/FavoriteButton'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const page = async ({ params: { id } }) => {
	const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
	const product = res.data
	return (
		<div className='grid sm:grid-cols-2 grid-cols-1 gap-4 my-[50px] '>
			<Image
				src={product.image}
				alt={product.title}
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
				<h1 className='text-2xl font-bold mb-10'>{product.title}</h1>
				<p className='text-gray-300'>{product.description}</p>
				<p className='text-red-300 text-4xl font-bold'>{Math.floor(product.price * 0.8)}$</p>
				<div className='my-flex justify-start my-4'>
					<BuyButton product={product} />
					<FavoriteButton product={product} />
				</div>
			</div>
		</div>
	)
}

export default page
