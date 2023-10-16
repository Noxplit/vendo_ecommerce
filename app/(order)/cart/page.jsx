'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/slice/productsSlice.js'
import { sumBy } from '../../utils/constants'
import 'dotenv/config'

const Page = () => {
	const { cart } = useSelector(state => state.products)
	const dispatch = useDispatch()

	const changeQuantityPlus = product => {
		const productQuantity = product.quantity + 1
		dispatch(addToCart({ ...product, quantity: productQuantity }))
	}
	const changeQuantityMinus = product => {
		if (product.quantity === 1) {
			return
		} else {
			dispatch(addToCart({ ...product, quantity: product.quantity - 1 }))
		}
	}

	const handleRemove = id => {
		dispatch(removeFromCart(id))
	}

	if (!cart.length) {
		return <h1 className='h-[500px] text-5xl my-flex uppercase'>Cart is Empty</h1>
	}

	return (
		<>
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
							<div className='my-flex'>
								<button
									onClick={() => changeQuantityPlus(product)}
									className='rounded-full border-2 border-black px-2 '>
									+
								</button>
								<button
									onClick={() => changeQuantityMinus(product)}
									className='rounded-full border-2 border-black px-2 '>
									-
								</button>
								<p className='text-black font-bold'>x{product.quantity}</p>

								<button
									onClick={() => handleRemove(product.id)}
									className=' bg-red-500 text-white  py-2 px-8 rounded-md '>
									Delete
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className='my-flex sm:justify-start justify-center gap-[100px]'>
				<h2 className='text-3xl font-bold uppercase  my-2'>
					Total Price:{' '}
					{sumBy(cart.map(({ price, quantity }) => Math.floor(price * 0.8) * quantity))}$
				</h2>
				<Link href={'/order'}
					
					className='p-2 bg-white text-black rounded-md font-bold uppercase'>
					Order
				</Link>
			</div>
		</>
	)
}

export default Page
