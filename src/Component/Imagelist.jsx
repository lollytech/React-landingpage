import React from 'react'
import Fed from '../Assests/image 25.png'
import Google from '../Assests/google-1-removebg-preview 1.png'
import Ola from '../Assests/image 27.png'
import Microsoft from '../Assests/new-Microsoft-logo-removebg-preview 1.png'
import Amazon from '../Assests/539f3ffbecad044276726c01-removebg-preview 1.png'
import Fedx from '../Assests/90a2c3b80d4b7a7599788bfeb9b848ce-removebg-preview 1.png'
import Wallmart from '../Assests/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612 1.png'


function Imagelist() {
  return (
    
    <div className=''>
      <div className=' pt-12 w-full h-34 flex flex-row justify-center align-middle place-content-center gap-10 py-5 '>
        <span className=' bg-[white] h-25 w-56 shadow shadow-black outline-3 flex justify-center align-middle'>
        <img className=' py-3 ' src={Fed} alt="" /></span>
        <span className=' bg-[white] h-25 w-56 shadow shadow-black outline-3 flex justify-center align-middle'><img className=' py-3 '  src={Google} alt="" /></span>
        <span className=' bg-[white] h-25 w-56 shadow shadow-black outline-3 flex justify-center align-middle'><img className=' py-3 '  src={Ola} alt="" /></span>
        <span className=' bg-[white] h-25 w-56 shadow shadow-black outline-3 flex justify-center align-middle'><img className=' py-3 '  src={Microsoft} alt="" /></span>
      </div>
        <div  className=' pt-12 w-full h-34 flex flex-row justify-center align-middle place-content-center gap-10 py-5 '>
          <span className=' bg-[white] h-25 w-56 shadow shadow-black outline-3 flex justify-center align-middle'><img  className=' py-3 ' src={Amazon} alt="" /></span>
          <span className=' bg-[white] h-25 w-56 shadow shadow-black outline-3 flex justify-center align-middle'><img  className=' py-3 ' src={Fedx} alt="" /></span>
          <span className=' bg-[white] h-25 w-56 shadow shadow-black outline-3 flex justify-center align-middle'><img  className=' py-3 ' src={Wallmart} alt="" /></span>
        </div>
    </div>
    
  )
}

export default Imagelist