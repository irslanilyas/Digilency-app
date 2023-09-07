import React from 'react'
import logo from "/public/logo.png"
import Image from 'next/image'


const Header = () => {
  return (
    <div className='py-8 px-16'>
        <Image
         src={logo} alt='logo' />
         <div className='text-white'>
            <p>Works</p>
            <p>About</p>
            <p>Services</p>
            <p>Blogs</p>
         </div>
    </div>
  )
}

export default Header