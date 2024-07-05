import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='flex mt-4'>

        <img className='w-[10%] ml-10' src="/public/WhatsApp Image 2024-04-28 at 4.47.16 PM.jpeg" alt="" />

          <nav className='flex flex-wrap flex-row justify-end gap-6 w-screen pr-5 pt-7 box-border'>
            <button className=' bg-orangered text-white rounded-81xl w-[12%] h-[30px]'><Link to = '/'>Home</Link></button>

            <button className='bg-orangered text-white rounded-81xl w-[12%] h-[30px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border'><Link to = '/Aboutus'>About</Link></button>

            <button className=' bg-orangered text-white rounded-81xl w-[12%] h-[30px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border'><Link to='/Contactus'>Contact</Link></button>

            <button className='bg-orangered text-white rounded-81xl w-[12%] h-[30px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border '><Link to = '/Product'>Product</Link></button>

            <button className='bg-orangered text-white rounded-81xl w-[12%] h-[30px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border'><Link to = '/Estimation'>Estimation</Link></button>

            <button className='bg-orangered text-white rounded-81xl w-[12%] h-[30px] flex flex-row items-center justify-center py-2.5 px-[25px] box-border'><Link to ='/Services'>Services</Link></button>
          </nav>

      </header>
    </>
  )
}

export default Header