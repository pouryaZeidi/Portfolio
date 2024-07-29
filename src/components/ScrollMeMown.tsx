import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { RiScrollToBottomLine } from 'react-icons/ri';

const ScrollMeDown: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + 670,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-8 flex flex-col items-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 9999 }} 
    >
      <div
        onClick={handleClick}
        className="flex flex-col  items-center  cursor-pointer border bg-black bg-opacity-40 rounded-full p-2"
      >
        <span className="text-yellow-50 hover:text-yellow-200  text-[11px] flex items-center mb-3"> 
          <span className='text-[25px]'><RiScrollToBottomLine /></span>
          Scroll
        </span>
        <FaArrowDown className="text-white text-[18px] animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollMeDown;
