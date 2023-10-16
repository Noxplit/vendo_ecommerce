import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const page = async() => {

	return (
		<div className='my-flex flex-col h-[700px]'>
			<h1 className='text-4xl font-bold'>Admin Panel</h1>
			<form className='my-flex flex-col'>
				<input className='my-input' type='text' name='email' placeholder='email' />
				<input className='my-input' type='text' name='username' placeholder='username' />
				<input className='my-input' type='text' name='password' placeholder='password' />
				<button className='bg-white py-2 w-[100%] text-black rounded-md'>Registration</button>
				<Link href={'/login'}  className='text-gray-500 underline'>Back to login</Link>
			</form>
		</div>
	)
}

export default page
