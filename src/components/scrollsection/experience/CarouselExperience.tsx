import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'webpic.jpg',
  'webpic2.jpg',
  'work1.jpg',
  'work.jpg',
  'freepic.jpg',
  'work3.jpeg',
];

const CarouselExperience = () => {
  return (
    <div className="flex  justify-center items-center ">
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        autoPlay 
        interval={1000}
        className="w-[60%] h-[40%]"
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={`/${image}`}
              alt={`carousel ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselExperience;
