import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IoMenu, IoClose } from "react-icons/io5"; // Import the close icon
import icon from "../Components/Assets/icon.png";

// Function to handle smooth scrolling with offset
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; // Adjust this value according to the height of your navbar
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const menuClick = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  }

  return (
    <div className='fixed z-50 w-full top-0'>
      <nav className='bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]' style={{ fontFamily: "'Aeonik', sans-serif" }}>
        <div className='flex justify-between'>
          <div className='lg:ml-12 ml-4 lg:my-2 my-3 flex items-center'>
            <img src={icon} alt='icon' className='lg:w-12 lg:h-12 lg:mr-4 mr-2 w-8 h-8' />
            <h1 className='max-sm:text-[24px] sm:text-[32px] text-[#008768]'>Traveller</h1>
          </div>
          <div className='mt-1.5 md:mr-5 mr-2'>
            <button className="lg:hidden p-3" onClick={menuClick}>
              {menuOpen ? (
                <IoClose className='md:w-8 md:h-8 w-7 h-7 text-[#008768]' /> // Display close icon
              ) : (
                <IoMenu className='md:w-8 md:h-8 w-7 h-7 text-[#008768]' /> // Display menu icon
              )}
            </button>
          </div>
          <div className='mx-auto my-auto lg:block hidden'>
            <ul className='flex gap-12 font-semibold tracking-wide text-[#008768] ml-96'>
              <HashLink smooth to="/#Book" scroll={el => scrollWithOffset(el)}><li className='cursor-pointer hover:scale-110 duration-300'>Home</li></HashLink>
              <HashLink smooth to="/#OurDestination" scroll={el => scrollWithOffset(el)}><li className='cursor-pointer hover:scale-110 duration-300'>Destination</li></HashLink>
              <HashLink smooth to="/#Packages" scroll={el => scrollWithOffset(el)}><li className='cursor-pointer hover:scale-110 duration-300'>Packages</li></HashLink>
              <Link to="/Contact-us"><li className='cursor-pointer hover:scale-110 duration-300'>Contact Us</li></Link>
            </ul>
          </div>
        </div>
        <div className={`bg-white shadow-lg sm:px-8 text-[#008768] tracking-wide ${menuOpen ? 'block' : 'hidden'}`}>
          <ul id="mobileMenu" className="mt-5 flex-wrap font-bold h-screen">
            <HashLink to="/#Book" onClick={menuClick} scroll={el => scrollWithOffset(el)}><li className="flex hover:bg-[#008768] pl-5 py-1.5 w-full hover:text-white">Home</li></HashLink>
            <HashLink smooth to="/#OurDestination" onClick={menuClick} scroll={el => scrollWithOffset(el)}><li className="flex pl-5 mt-5 hover:bg-[#008768] py-1.5 mx-auto hover:text-white">Destination</li></HashLink>
            <HashLink to='/#Packages' onClick={menuClick} scroll={el => scrollWithOffset(el)}><li className="flex pl-5 mt-5 hover:bg-[#008768] py-1.5 mx-auto hover:text-white">Packages</li></HashLink>
            <Link to='/Contact-us' onClick={menuClick}><li className="flex pl-5 mt-5 hover:bg-[#008768] py-1.5 mx-auto hover:text-white">Contact Us</li></Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
