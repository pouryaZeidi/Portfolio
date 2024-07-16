// components/BackButton.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BiLogoUpwork } from "react-icons/bi";

const BackButton = () => {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  const handleBackClick = () => {
    router.push('/');
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
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
      className={`fixed bottom-4 right-4 bg-blue-500 text-white text-4xl p-2 rounded z-10 transition-opacity duration-300 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <BiLogoUpwork />
    </button>
  );
};

export default BackButton;
