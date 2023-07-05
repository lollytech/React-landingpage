import React from 'react'
import Nav from './Nav'
import Headcontent from './Headcontent'

function Header() {
  return (
    <div  className=' w-screen h-[70vh] bg-blue-600'>
        <Nav/>
        <Headcontent/>
    </div>
      
  )
}

export default Header