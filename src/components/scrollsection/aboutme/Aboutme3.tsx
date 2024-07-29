import FlipCard1 from '@/components/flipcards/about flipcard/FlipCard1';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const AboutMe3 = () => {
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
          <div className="ml-9 sm:ml-11 md:ml-20 text-[10px] sm:text-[17px] md:text-[20px] font-mono">
            <Typewriter
              words={[
                "My Professional Journey!",
                "With a solid background in frontend development, I've worked on various projects, sharpening my skills in React, TypeScript, Next.js, Vue.js, and Node.js. I've designed responsive interfaces, created dynamic web apps, and collaborated with cross-functional teams. I’m always keen to learn new technologies and tackle challenging projects that push the boundaries of web development."
              ]}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000} 
            />
          </div>
        )}
      </div>
      <div className='ml-9 sm:ml-11 md:ml-28 md:mt-11 text-[11px] sm:text-[19px] md:text-2xl font-mono'>
        <div className='hidden sm:flex w-[100%]  ml-3 justify-between'>
          <FlipCard1 src="/flipreact.jpg" src2="fliptypescript.jpg" />
          <FlipCard1 src="/javascript.jpg" src2="fliptailwind.jpg" />
          <FlipCard1 src="/flipvue.png" src2="nextjs.png" />
        </div>
        <div className='sm:hidden w-[90%]   ml-8 justify-between'>
          <FlipCard1 src="/flipreact.jpg" src2="fliptypescript.jpg" />
        </div>
      </div>
    </>
  );
};

export default AboutMe3;
