import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
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
        <div ref={sectionRef} className="flex  h-[600px] w-[400vw] relative">
          <div id='aboutme' className="flex justify-center items-center bg-slate-400 h-[850px] w-[105vw]">
            <h3 className="text-primaryTextColor uppercase text-headline-medium tracking-wide">Section 1</h3>
          </div>
          <div id='projects' className="flex justify-center items-center bg-yellow-400 h-[850px] w-[105vw]">
            <h3 className="text-primaryTextColor uppercase text-headline-medium text-4xl tracking-wide">Section 2</h3>
          </div>
          <div id='experience' className="flex justify-center bg-orange-950 items-center h-[850px] w-[105vw]">
            <h3 className="text-primaryTextColor uppercase text-headline-medium tracking-wide">Section 3</h3>
          </div>
          <div id='contact' className="flex justify-center items-center bg-green-700 h-[850px] w-[110vw]">
            <h3 className="text-primaryTextColor uppercase text-headline-medium tracking-wide">Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
