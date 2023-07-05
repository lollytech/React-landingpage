import React from 'react'
import Logo from '../Assests/images-removebg-preview 2.png'

function Nav() {
  return (
    <div className='w-full  flex flex-row justify-around items-center'>
        <h1 className=' text-2xl font-extrabold text-gray-100'><img src={Logo} alt="" /></h1>
        <ul className=' flex flex-row gap-5 text-{1rem} font-semibold text-gray-50  py-7 '>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonial</li>
            <li>Pricing</li>
        </ul>
    
    <button className=' bg-orange-500 rounded-md font-medium w-32 h-8 text-zinc-50 font-extrabold'>Get Started</button>

    </div>
  )
}

export default Nav