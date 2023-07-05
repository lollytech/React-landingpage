import React from 'react'
import Image from '../Assests/Rectangle 13.jpg'
import Union from '../Assests/Union.svg'

function Transcation() {
  return (
    <div className=' flex flex-row justify-around align-middle pt-12'>
        <div className=' w-[20%] h-[20%]  bg-slate-600'>
            <img className='' src={Image} alt="" />
            <img className=' pb-32 ' src={Union} alt="" />
            <div className=' bg-slate-600 pb-52'>
                
            </div>
        </div>
        <div>
            <h2 className=' uppercase text-orange-500 font-bold text-2xl'>Lorem ipsum dolor sit ame</h2>
            <h1 className=' font-bold text-5xl py-4'>Simple Solutions for <br /> Complex Connections</h1>
            <p className=' py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec <br /> gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi <br /> odio a velit feugiat sapien.</p>
        </div>
    </div>
  )
}

export default Transcation