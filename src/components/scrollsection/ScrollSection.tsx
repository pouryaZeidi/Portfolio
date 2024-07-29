import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Aboutme from './aboutme/Aboutme';
import AboutMe2 from './aboutme/Aboutme2';
import AboutMe3 from './aboutme/Aboutme3';

const ScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        x: 0,
      },
      {
        x: '-208vw', // Adjust this value to fit the width of the visible sections
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=1000`, // Adjust the end point dynamically based on screen width
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex  sm:flex-row w-[300vw]">
          <div className="p-2 sm:p-4 md:p-10 w-[100vw]  h-[700px]">
            <Aboutme />
          </div>
          <div className=" p-2 sm:p-4 md:p-10 w-[100vw] h-[700px]">
            <AboutMe2 />
          </div>
          <div className=" p-2 sm:p-4 md:p-10 w-[100vw] h-[710px]">
            <AboutMe3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
