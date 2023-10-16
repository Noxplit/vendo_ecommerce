import React from 'react'
import Select from 'react-select'

const Filters = ({ setPrice, setCountAmount, setValue, countAmount, price }) => {
	const options = [
		{
			value: 5,
			label: '5',
		},
		{
			value: 10,
			label: '10',
		},
		{
			value: 15,
			label: '15',
		},
	]

	const handleSearch = e => {
		e.preventDefault()
		console.log(price, countAmount)
		setValue({ price, countAmount })
	}
	return (
		<form className='my-flex sm:justify-start justify-center'>
			<input
				className='my-input py-2 text-black'
				placeholder='price'
				onChange={e => setPrice(e.target.value)}
			/>
			<Select
				options={options}
				placeholder='Amount'
				className=' text-black'
				onChange={e => setCountAmount(e.value)}
			/>
			<button
				onClick={e => handleSearch(e)}
				className='bg-white p-2 text-black rounded-md'
				type='submit'>
				Search
			</button>
		</form>
	)
}

export default Filters
