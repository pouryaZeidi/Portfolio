import React from 'react';

const ProjectSec1 = () => {
  return (
    <div className="flex flex-col bg-white md:h-[700px] items-center">
      <div className="  sm:flex  flex-wrap ml-5 sm:ml-0 bg-white justify-between w-full  p-4">
        <div className="w-[200px] h-[200px] m-2 flex-shrink-0  transition-transform duration-300 animate-fromBottom">
          <img src="/2.jpeg" alt="img1" className="w-full h-full object-cover hover:scale-110 " />
        </div>
        <div className="hidden sm:flex w-[200px] h-[200px] m-2 flex-shrink-0  transition-transform duration-300 animate-fromBottom">
          <img src="/1.jpeg" alt="img2" className="w-full h-full object-cover hover:scale-110" />
        </div>
        <div className="w-[200px] h-[200px] m-2 flex-shrink-0  transition-transform duration-300 animate-fromBottom">
          <img src="/4.jpeg" alt="img3" className="w-full h-full object-cover hover:scale-110" />
        </div>
        <div className="w-[200px] h-[200px] mr-5 m-2 flex-shrink-0  transition-transform duration-300 animate-fromBottom">
          <img src="/3.jpeg" alt="img4" className="w-full h-full object-cover hover:scale-110" />
        </div>
      </div>
      <div className="flex items-center z-50 space-x-4 mt-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-yellow-400 font-mono font-bold">
          If you want to see more
        </h1>
        <div className="animate-rightArrow text-yellow-400 text-6xl">→ → →</div>
      </div>
    </div>
  );
};

export default ProjectSec1;
