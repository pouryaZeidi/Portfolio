import React from 'react';
import Marquee from './Marquee';
import SoundEffect from './SoundEffect';
import ScrollMeDown from './ScrollMeMown';
import Clock from './Clock';

const HeroSection: React.FC = () => {
  return (
    <div className="rounded-md md:flex md:flex-col items-end relative bg-firstbg p-4  justify-center h-[100vh] text-center sm:bg-sm-herobg md:bg-hero-bg bg-cover bg-center bg-no-repeat">
      <div className='mr-3 h-[30%] w-[100%] md:h-[90%] md:w-[45%]'>
        <h1 className="font-mono   bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent   text-[25px] sm:text-[33px] md:text-[33px] lg:text-[54px] xl:text-[56px] place-items-start ">
          Pourya Zeydi
        </h1>
        <h1 className="font-mono text-[25px]  sm:text-[33px] md:text-[33px] lg:text-[54px] xl:text-[56px] bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent    mb-5">
          "Frontend Developer"
        </h1>
        <h2 className="block uppercase text-[16px] sm:text-[17px] md:text-[16px] lg:text-[20px] xl:text-[32px] text-secondry animate-slide-in">
            Crafting elegant and efficient web solutions
        </h2>
      </div>
      <Clock/>
      <SoundEffect />
      <ScrollMeDown/>
      <Marquee />
    </div>
  );
}

export default HeroSection;
