import FlipCard1 from '@/components/flipcards/about flipcard/FlipCard1';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const AboutMe = () => {
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    onChange: (inView) => {
      if (inView) setStartTyping(true);
    },
  });

  return (
    <>
    <div ref={ref} className='text-green-400 font-sans font-semibold text-xl p-8'>
      {startTyping && (
        <div className=" text-[17px] sm:text-[25px] md:text-3xl font-mono"> 
          <Typewriter
            words={[ 
              " 'Hi I’m Pourya !'",
              "'I’m 28 years old, born on February  14, 1997. In May 2024, I migrated from Iran to Turkey with my wife, Kimiya.'",
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
        <div className='flex items-center mt-14 justify-center'>
        <FlipCard1 src="/meandyou.jpg" src2="/migrate.png" />
        </div>
  </>
  );
};

export default AboutMe;
