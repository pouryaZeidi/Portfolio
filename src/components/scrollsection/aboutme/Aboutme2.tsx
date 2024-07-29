import FlipCard1 from '@/components/flipcards/about flipcard/FlipCard1';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const AboutMe2 = () => {
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    onChange: (inView) => {
      if (inView) setStartTyping(true);
    },
  });

  return (
    <>
    <div ref={ref} className='text-green-400 ml-9 sm:ml-11  md:ml-28 font-sans font-semibold text-xl p-8'>
      {startTyping && (
        <div className=" text-[11px] sm:text-[19px] md:text-2xl font-mono"> 
          <Typewriter
            words={[ 
              "' I was passionate about coffee in my teenage years and initially worked in a café while studying. Later, I worked as an intern and then as a frontend developer in various companies. I love my work and spend my leisure time watching movies, using social media, and reading motivational and historical books. I also make it a routine to exercise before starting my workday.'",
            ]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={22}
            deleteSpeed={30}
            delaySpeed={500}
            />
        </div>
      )}
    </div>
        <div className='hidden  ml-9 sm:ml-11 md:ml-28  sm:flex  sm:flexinline w-[90%] justify-between'>
         <FlipCard1 src="/flipimg2.jpg" src2="flipimgbook.jpg"/>
         <FlipCard1 src="/flipimgcoffee.jpg" src2="flipimggym.jpg"/>
        </div>
        <div className='ml-14 sm:ml-11 md:ml-28  flex  sm:hidden w-[90%] justify-between'>
         <FlipCard1 src="/flipimg2.jpg" src2="flipimgbook.jpg"/>
         </div>
  </>
  );
};

export default AboutMe2;
