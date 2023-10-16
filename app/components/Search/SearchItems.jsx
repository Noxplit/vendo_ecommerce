import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SearchItems = ({ products, setValue }) => {
	return (
		<div className='absolute top-10 left-0 rounded-lg bg-white  w-[180px] h-[500px] z-20'>
			<ul className='overflow-scroll w-[100%] h-[460px]'>
				{products.map(item => (
					<Link
						href={`/product/${item.id}`}
						onClick={() => setValue('')}
						key={item.id}
						className='z-100 p-4 my-flex flex-col text-black cursor-pointer '>
						<Image
							src={item.image}
							alt={'s'}
							style={{
								width: '50px',
								height: '50px',
								borderRadius: '5px',
								objectFit: 'cover',
								objectPosition: 'top',
							}}
							width={1000}
							height={1000}
						/>
						<p className='font-bold text-xl w-[160px] text-center'>{item.title}</p>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default SearchItems
