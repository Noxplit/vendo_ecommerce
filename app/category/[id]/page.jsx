import ProductItems from '@/app/components/ProductItems/ProductItems'
import axios from 'axios'
import React from 'react'

const page = async({params:{id}}) => {
const res = await axios.get(`https://fakestoreapi.com/products/category/${id}`)
const data = await res.data
  return (
    <div>
<ProductItems products={data} title='Category'/>
    </div>
  )
}

export default page