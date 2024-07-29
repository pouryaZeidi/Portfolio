import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ExperienceAsp from './experience/scroll/ExperienceAsp';
import ExperienceSaz from './experience/scroll/ExperienceSaz';
import ExperienceIransaghf from './experience/scroll/ExperienceIransaghf';
import ExperienceSchool from './experience/scroll/ExperienceSchool';



const ScrollSection2: React.FC = () => {
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
        x: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=2000',
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
        <div ref={sectionRef} className="flex h-[500px] w-[400vw] relative">
          <div  className="p-9 text-white mr-5 mt-1 h-[450px] md:h-[500px] w-[100vw]">
          <ExperienceAsp/>
          </div>
          <div  className="p-9 mt-1 text-white mr-5 h-[450px] md:h-[500px] w-[100vw]">
            <ExperienceSaz/>
          </div>
          <div  className="p-9 mt-1 text-white h-[450px]  mr-5 md:h-[500px] w-[100vw]">
            <ExperienceIransaghf/>
          </div>
          <div  className="p-9 mt-1 text-white  h-[550px] w-[100vw]">
            <ExperienceSchool/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection2;
