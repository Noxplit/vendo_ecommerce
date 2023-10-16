'use client'
import { sumBy } from '@/app/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
	const { cart } = useSelector(state => state.products)

	if (!cart.length) {
		return <h1 className='h-[500px] text-5xl my-flex uppercase'>Order is Empty</h1>
	}
	return (
		<div className='my-flex flex-col'>
			<h1 className='text-5xl font-bold mt-[50px]'>Thank you for your order!</h1>
			<ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-8'>
				{cart.map(product => (
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
								<p className='text-red-500 font-bold'>
									{Math.floor(product.price * 0.8) * product.quantity}$
								</p>
							</div>
						

						
						</div>
					</li>
				))}
			</ul>
			<div className='my-flex sm:justify-start justify-center gap-[100px]'>
				<h2 className='text-3xl font-bold uppercase  my-2'>
					Total Price:
					{sumBy(cart.map(({ price, quantity }) => Math.floor(price * 0.8) * quantity))}$
				</h2>
			</div>
		</div>
	)
}

export default page
