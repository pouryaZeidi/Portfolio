import React, { useState, useEffect } from 'react';
import { BiLogoUpwork } from 'react-icons/bi';

const BackButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleBackClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 350) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleBackClick}
      className={`fixed top-5 right-4 bg-transparent text-blue-100 text-4xl p-2 rounded-full z-50 transition-opacity duration-300 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center space-x-2">
        <BiLogoUpwork />
        <div className="animate-up-arrow">↑</div>
      </div>
      <style jsx>{`
        .animate-up-arrow {
          display: inline-block;
          animation: upArrow 1s infinite;
        }

        @keyframes upArrow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </button>
  );
};

export default BackButton;
