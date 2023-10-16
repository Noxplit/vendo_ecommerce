'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorite } from '../redux/slice/favorite/favoriteSlice.js'

const Page = () => {
	const { favorite } = useSelector(state => state.favorite)
	const dispatch = useDispatch()
  console.log(favorite);

	const handleRemove = id => {
		dispatch(removeFromFavorite(id))
	}

  if(!favorite.length) {
    return <h1 className='h-[500px] text-5xl my-flex uppercase'>Favorite is Empty</h1>
  }

	return (
		<>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-8'>
				{favorite.map(product => (
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
									{Math.floor(product.price * 0.8)}$
								</p>
							</div>
							<div className='my-flex'>
								<button
									onClick={() => handleRemove(product.id)}
									className=' bg-red-500 text-white  py-2 px-8 rounded-md '>
									Delete
								</button>
							</div>
						</div>
					</li>
				))}
			</div>
		</>
	)
}

export default Page
