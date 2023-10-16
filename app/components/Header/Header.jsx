import React from 'react'
import { SiCoinmarketcap } from 'react-icons/si'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import axios from 'axios'
import Link from 'next/link'
import Search from '../Search/Search'
import CartIcon from '../CartIcon/CartIcon'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon'

const Header = async() => {
  const res = await axios.get('https://fakestoreapi.com/products/categories')
  const products = await axios.get('https://fakestoreapi.com/products')
  const categories = res.data
  const productsSearch = products.data

	return (
		<div className=' my-flex justify-between'>
			<div className='my-flex cursor-pointer'>
				<SiCoinmarketcap className='my-icon' size={25} />
				<Link href={'/'} className='text-xl'>Vendo</Link>
			</div>
      <ul className='my-flex gap-8 font-bold md:flex hidden'>
        {categories.map(category => <li className='my-icon' key={category}><Link href={`/category/${category}`}>{category}</Link></li>)}
      </ul>
			<div className='my-flex cursor-pointer'>
        <Search products={productsSearch}/>
        <CartIcon/>
        <FavoriteIcon/>
				<Link href={'/login'}><MdOutlineAdminPanelSettings className='my-icon' size={25}  /></Link>
			</div>
		</div>
	)
}

export default Header
