import Banner from './components/Banner/Banner'
import { mathRandom } from './utils/constants'
import ProductItems from './components/ProductItems/ProductItems'
import axios from 'axios'

export default  async function Home() {
  const res = await axios.get('https://fakestoreapi.com/products')
  const products = res.data
	const image = products[mathRandom(20)]
	
	return (
		<main className='p-4'>
			<div className='my-flex justify-between items-start'>
				<Banner image={image} />
			</div>

			<ProductItems products={products} />
		</main>
	)
}
