import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import Clock from '../Clock';
import { HiOutlineHome } from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
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
      <div className='hidden lg:flex w-full fixed bg-slate-300 px-2 items-center py-2 justify-between font-mono'>
        <div className='w-[90px] bg-red-500'> <span>asdhcbadscnb </span></div>
        <NavbarItems href='#' children={<div className='flex items-center'><HiOutlineHome /><span>Home</span></div>} />
        <NavbarItems href='#aboutme' children={<div className='flex items-center'><IoInformationCircleOutline /><span>About me</span></div>} />
        <NavbarItems href='#projects' children={<div className='flex items-center'><GoProjectSymlink /><span>Projects</span></div>} />
        <NavbarItems href='#experience' children={<div className='flex items-center'><BsPersonWorkspace /><span>Experience</span></div>} />
        <NavbarItems href='#contact' children={<div className='flex items-center'><TiContacts /><span>Contact</span></div>} />
        <Clock />
      </div>
      
      <div className='lg:hidden sm:flex h-20 w-full fixed bg-slate-300 px-2 items-center py-2 justify-between font-mono'>
        <div className='sm:flex hidden'>
          <NavbarItems children={<span>Home</span>} href={'#'} />
          <NavbarItems children={<span>About me</span>} href={'#aboutme'} />
          <NavbarItems children={<span>Projects</span>} href={'#projects'} />
          <NavbarItems children={<span>Experience</span>} href={'#experience'} />
          <NavbarItems children={<span>Contact</span>} href={'#contact'} />
        </div>
      </div>
      
      <div className='sm:hidden flex h-20 w-full fixed bg-slate-600 items-center p-6 justify-between'>
        <span className='ml-3 text-4xl font-mono'>Logo</span>
        <span  className='text-3xl flex font-mono justify-between w-[108px] cursor-pointer transform transition-transform duration-300 hover:scale-110' onClick={handleMenuClick}>
          Menu<BsMenuDown />
        </span>
        {menuOpen && (
          <div 
            className='absolute top-20 right-0 bg-yellow-500 w-[200px] h-[300px] flex flex-col justify-between items-center'
            onMouseLeave={handleMouseLeave}
          >
            <NavbarItems href='#' children={<div className='flex items-center text-2xl opacity-70 hover:opacity-100 '><HiOutlineHome /><span>Home</span></div>} />
            <NavbarItems href='#aboutme' children={<div className='flex items-center text-2xl opacity-70 hover:opacity-100 '><IoInformationCircleOutline /><span>About me</span></div>} />
            <NavbarItems href='#projects' children={<div className='flex items-center text-2xl opacity-70 hover:opacity-100 '><GoProjectSymlink /><span>Projects</span></div>} />
            <NavbarItems href='#experience' children={<div className='flex items-center text-2xl opacity-70 hover:opacity-100 ' ><BsPersonWorkspace /><span>Experience</span></div>} />
            <NavbarItems href='#contact' children={<div className='flex items-center text-2xl opacity-70 hover:opacity-100 '><TiContacts /><span>Contact</span></div>} />
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar;
