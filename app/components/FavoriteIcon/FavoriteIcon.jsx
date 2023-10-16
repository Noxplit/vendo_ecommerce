'use client'
import Link from 'next/link'
import React from 'react'
import {MdFavoriteBorder} from 'react-icons/md'
import { useSelector } from 'react-redux'

const FavoriteIcon = () => {

  const { favorite } = useSelector(state => state.favorite)
  return (
    <Link className='my-flex relative' href={'/favorite'}><MdFavoriteBorder className='my-icon' size={25} /><p className=' rounded-full  absolute top-4 right-[-10px] px-2'>{favorite.length}</p></Link>
    
  )
}

export default FavoriteIcon