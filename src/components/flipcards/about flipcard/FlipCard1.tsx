import { flipprops } from '@/Types/type';
import React from 'react';

const FlipCard1= ({ src, src2 }:flipprops) => {
  return (
    <div className="relative h-52 w-52 sm:h-60 sm:w-60 md:h-64 md:w-64 lg:w-96 lg:h-96 perspective">
      <div className="flip-card absolute w-full h-full transition-transform duration-1000 transform-style-preserve-3d shadow-xl rounded-3xl">
        <div className="flip-card-inner w-full h-full rounded-3xl transform-style-preserve-3d">
          <div className="flip-card-front absolute w-full h-full rounded-3xl bg-gray-200 flex items-center justify-center overflow-hidden shadow-lg">
            <img src={src} alt="Flip Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="flip-card-back absolute w-full h-full rounded-3xl bg-gray-300 flex items-center justify-center overflow-hidden shadow-lg rotate-y-180">
            <img src={src2} alt="flip2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard1;
