import React from 'react'
import Tablet from '../Assests/Pixel True Mockup 1.png'

function Headcontent() {
    return (
        <div className=' w-screen h-[100%]  flex flex-row justify-around align-middle items-center'>
            <div className=' w-[20%] h-[70%] bg-transparent flex flex-col justify-around items-left'>
                <p className=' text-zinc-100 text-1xl font-semibold'>INSPIRATION TECHNOLOGY.</p>
                <h1 className=' font-bold text-3xl text-white' >Runs Faster</h1>
                <p className=' text-2xl text-white'>Costs less and </p>
                <p className=' text-2xl text-white '>never breaks</p>
                <div className=' w-full h-[1px] bg-white'></div>
                <h6 className=' text-white font-medium text-left pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Voluptatum, laudantium. Maxime iste culpa illo atque praesentium fugiat repellendus debitis <br /> illum aliquid aperiam magni sequi, dicta ducimus sit officia quas eius.</h6>
                <div className=' w-full flex flex-row gap-6'>
                    <button className=' bg-orange-500  text-[15px] font-medium w-32 h-8 text-zinc-50 font-extrabold'>Get Started</button>
                    <button className=' border outline-2  text-[15px] font-medium w-32 h-8 text-zinc-50 font-extrabold' >Free trial</button>
                </div>
                
            </div>
            <div>
                <img className=' w-[85%]' src={Tablet} alt="" />
            </div>
        </div>
    )
}

export default Headcontent