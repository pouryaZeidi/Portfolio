import React from 'react'
import { Inter } from "next/font/google";
import Navbar from '@/components/navbar/Navbar';
import { navbarprops } from '@/Types/type';
import SoundEffect from '@/components/SoundEffect';
import Marquee from '@/components/Marquee';
import BackButton from '@/components/BackButton';

const inter = Inter({ subsets: ["latin"] });

const Layout = ({children}:{children:any}) =>{
  return (
    <div className='bg-black'>
          <BackButton/>
        <div className='w-full  '>{children}</div>
        
    </div>
  )
}

export default Layout