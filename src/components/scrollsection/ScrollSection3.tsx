import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ProjectSec1 from './projectscomponents/projecscroll/ProjectSec1';
import ProjectSec2 from './projectscomponents/projecscroll/ProjectSec2';

const ScrollSection3: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: '-105vw', // Adjust to match the new total width of visible sections
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => '+=1000', 
          scrub: 0.4,
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
      <div ref={triggerRef} className='w-screen'>
        <div ref={sectionRef} className="flex h-[600px] w-[200vw] relative"> 
          <div className="text-white   h-[700px] w-[100vw]">
            <ProjectSec1/>
          </div>
          <div className=" h-[700px] w-[100vw]">
            <ProjectSec2/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection3;
