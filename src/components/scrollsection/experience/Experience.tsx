import FlipCard1 from '@/components/flipcards/about flipcard/FlipCard1';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';
import CarouselExperience from './CarouselExperience';

const Experience = () => {
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    onChange: (inView) => {
      if (inView) setStartTyping(true);
    },
  });

  return (
    <>
    <div ref={ref} className='text-green-400  font-sans font-semibold text-xl p-8'>
      {startTyping && (
        <div className="  text-[17px] sm:text-[25px] md:text-3xl font-mono"> 
          <Typewriter
            words={[ 
                "'Now, You can see my Experience'",
            ]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={18}
            deleteSpeed={30}
            delaySpeed={500}
            />
        </div>
      )}
    </div>
        <div  className="container bg-white p-8">
            <CarouselExperience />
        </div>  
  </>
  );
};

export default Experience;

