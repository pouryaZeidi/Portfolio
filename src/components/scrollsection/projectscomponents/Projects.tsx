import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const Projects = () => {
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) setStartTyping(true);
    },
  });

  return (
    <>
      <div ref={ref} className="text-green-400 font-sans font-semibold text-xl p-8">
        {startTyping && (
          <div className="text-[17px] sm:text-[25px] md:text-3xl font-mono">
            <Typewriter
              words={[
                "'Now, You can see my Projects'",
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
      <div className="relative w-full h-[650px] p-8 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[300px] text-center lg:animate-textAnimation animate-blink">
            <span className="block text-white text-[50px] sm:text-[80px] md:text-[90px] lg:hidden opacity-50">"PROJECTS"</span>
            <span className="hidden text-white lg:block opacity-50">"PROJECTS"</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
