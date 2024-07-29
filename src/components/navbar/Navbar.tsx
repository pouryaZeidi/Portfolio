import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import Clock from '../Clock';
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsMenuDown } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <div className='flex h-[85px] w-full  px-4 items-center py-1 justify-between  font-mono'>
        <div className='w-[130px] z-10 ml-3 mt-16 hover:scale-110 hidden sm:block'> 
          <span className=' '><img src='/pouryalogo.svg' alt='Logo' /></span>
        </div>
        <NavbarItems to='aboutme'>
          <div className='flex items-center'>
            <IoInformationCircleOutline   />
            <span>About me</span>
          </div>
        </NavbarItems>
        <div className='flex flex-col text-white hover:scale-110 sm:text-nowrap md:text-wrap md:w-[30%] sm:text-[13px] md:text-[13px] text-[13px]'>
          <span className='font-bold text-[18px]'>Status:</span>
          <span className=' hidden sm:flex items-center '>"<span className='dot'>•</span> Available for remote frontend development opportunities"</span>
          <span className='flex sm:hidden mr-5 items-center truncate '>
          <span className='dot'>•</span>
          <span className='ml-2 text-ellipsis overflow-hidden text-wrap'>Available for remote frontend work</span>
          </span>
        </div>
        <Clock/>
      </div>
    </>
  );
};

export default Navbar;
