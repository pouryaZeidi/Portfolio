import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const ExperienceIransaghf = () => {
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,  
    onChange: (inView) => {
      if (inView) setStartTyping(true);
    },
  });

  const textLines = [
    "Iran Saghfe Novin",
".Position: Frontend Developer",
".Duration: [Jan 2021 - May 2022]",
".Responsibilities:",
"..Developed dynamic web applications using React.",
"..Utilized Next.js for server-side rendering and optimized performance.",
"..Implemented Tailwind CSS for responsive and efficient design.",
".Skills Used: React, Next.js, Tailwind CSS",
".Type of Collaboration: Full-time"
  ];

  return (
    <>
      <div ref={ref} className='text-green-400 font-sans font-semibold text-[14px] md:text-[20px] p-2 md:p-8'>
        {startTyping && (
          <div className="text-[14px] sm:text-[22px] md:text-2xl font-mono">
            {textLines.map((line, index) => (
              <div key={index}>
                <Typewriter
                  words={[line]}
                  loop={1}
                  cursor={index === textLines.length - 1} 
                  cursorStyle='|'
                  typeSpeed={10}
                  deleteSpeed={0}
                  delaySpeed={(index + 1) * 1500} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <motion.div
        className='w-full h-40 flex justify-center items-center'
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{
          scale: inView ? [0.8, 1.2, 1] : 0.8, 
          rotate: inView ? [0, 360] : 0
        }}
        transition={{ 
          duration: 5, 
          ease: 'easeInOut', 
          repeat: Infinity, 
          repeatType: 'loop',
          delay: 3, 
        }}
      >
        <img className='w-30 h-28 rounded-2xl' src="/saghf.jpg" alt="Sazmand Company" />
      </motion.div>
    </>
  );
};

export default ExperienceIransaghf;
