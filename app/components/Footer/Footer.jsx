import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { LiaTelegramPlane } from 'react-icons/lia'

const Footer = () => {
	return (
		<div className=' my-flex justify-between'>
			<div className='text-center'>
				<span className='text-xl'>Vendo</span>
        <p className='text-gray-500 text-sm'>Designed and programming by Noxplit</p>
			</div>
      {/* <ul>
{[1,2,3].map(obj => <li key={obj} className='my-icon'>Sneakers</li>)}
      </ul> */}
			<div className='my-flex'>
        <AiOutlineLinkedin className='my-icon' size={25}/>
        <AiOutlineInstagram className='my-icon' size={25}/>
        <LiaTelegramPlane className='my-icon' size={25}/>
      </div>
		</div>
	)
}

export default Footer
