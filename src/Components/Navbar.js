import React from 'react'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { IoMenu } from "react-icons/io5";

import icon from "../Components/Assets/icon.png"

const Navbar = () => {
  const menuClick = () => {
    var menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }
  return (
    <div className='fixed z-50 w-full top-0'>
      <nav className='bg-white   shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' style={{ fontFamily: "'Aeonik', sans-serif" }}>
        <div className='flex justify-between'>
          <div className='lg:ml-12 ml-4 lg:my-2 my-3 flex items-center'>

            <img src={icon} alt='icon' className='lg:w-12 lg:h-12  lg:mr-4 mr-2  w-8 h-8'/>
            <h1 className='max-sm:text-[24px] sm:text-[32px] text-[#008768]'>Traveller</h1>
          </div>
          < div className='mt-1.5 md:mr-5 mr-2' >
            <button className="lg:hidden p-3 " onClick={menuClick}>
              <IoMenu className='md:w-8 md:h-8 w-7 h-7 text-[#008768]' />
            </button>
          </div >
          <div className='mx-auto my-auto lg:block  hidden '>
            <ul className='flex gap-12 font-semibold tracking-wide text-[#008768]  ml-96'>
              <HashLink smooth to="/#Book"><li className='cursor-pointer hover:scale-110 duration-300'>Home</li></HashLink>
              <HashLink smooth to="/#OurDestination"><li className='cursor-pointer hover:scale-110 duration-300'>Destination</li></HashLink>
              <HashLink smooth to="/#Packages" ><li className='cursor-pointer hover:scale-110 duration-300'>Packages</li></HashLink>

              <Link to="/Contact-us"><li className='cursor-pointer hover:scale-110 duration-300'>Contact Us</li></Link>
            </ul>
          </div>

        </div>
        <div className="bg-white shadow-lg sm:px-8   text-[#008768] tracking-wide">
          <ul id="mobileMenu" className=" hidden  mt-5 flex-wrap  font-bold   h-screen  ">
            <Link to="/"><li className="flex   hover:bg-[#008768] pl-5  py-1.5  w-full hover:text-white">
              Home</li></Link>
            <HashLink smooth to="/#OurDestination"><li className="flex pl-5 mt-5 hover:bg-[#008768]  py-1.5  mx-auto hover:text-white">
              Destination</li></HashLink>

            <Link to='/Packages'><li className="flex pl-5  mt-5 hover:bg-[#008768]  py-1.5  mx-auto hover:text-white">
              Packages</li></Link>

            <Link to='/Contact-us'> <li className="flex pl-5  mt-5 hover:bg-[#008768]  py-1.5 r mx-auto hover:text-white">
              Contact Us</li></Link>

          </ul>
        </div>
      </nav >
    </div >
  )
}

export default Navbar