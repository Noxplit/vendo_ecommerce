'use client'
import React, { useState } from 'react'
import SearchItems from './SearchItems'

const Search = ({products}) => {
  const [value,setValue] = useState('')
  const filtered = products.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
	return (
		<div className='relative' >

			<input type='text' value={value} onChange={e => setValue(e.target.value)} placeholder='Search items...' className='my-input text-black' />
      {value && <SearchItems setValue={setValue} products={filtered}/> }

		</div>
	)
}

export default Search
