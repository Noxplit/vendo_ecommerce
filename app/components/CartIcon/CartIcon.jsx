'use client'
import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const { cart } = useSelector(state => state.products)
  return (
    <Link className='my-flex relative' href={'/cart'}><AiOutlineShoppingCart className='my-icon' size={25} /><p className=' rounded-full  absolute top-4 right-[-10px] px-2'>{cart.length}</p></Link>
    
  )
}

export default CartIcon