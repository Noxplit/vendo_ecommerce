import axios from 'axios';
import Link from 'next/link'
import React from 'react'

const page = async() => {
  const user = await axios.post('https://fakestoreapi.com/auth/login', {
    username: "mor_2314",
    password: "83r5^_"
  })
  console.log(user);
	return (
		<div className='my-flex flex-col h-[700px]'>
			<h1 className='text-4xl font-bold'>Admin Panel</h1>
			<form className='my-flex flex-col'>
				<input className='my-input' type='text' name='email' placeholder='email' />
				<input className='my-input' type='text' name='password' placeholder='password' />
				<button className='bg-white py-2 w-[100%] text-black rounded-md'>Login</button>
				<Link href={'/registration'}  className='text-gray-500 underline'>Registration</Link>
			</form>
		</div>
	)
}

export default page
