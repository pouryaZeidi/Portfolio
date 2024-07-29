import React, { useState, useEffect } from 'react';
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';

const SoundEffect: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [isVisible, setIsVisible] = useState(true); // Track visibility

    useEffect(() => {
        const newAudio = new Audio('/keyboardwebsite.wav');
        newAudio.loop = true;
        setAudio(newAudio);

        return () => {
            newAudio.pause();
            newAudio.currentTime = 0;
        };
    }, []);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const heroSectionHeight = 300; // Adjust this value based on your Hero section height

        // Check if scroll position is below Hero section
        if (scrollTop > heroSectionHeight) {
            setIsVisible(false); // Hide component
        } else {
            setIsVisible(true); // Show component
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handlePlayPause = () => {
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={` absolute bottom-8 text-secondry left-10 ${isVisible ? '' : 'hidden'}`}> {/* Toggle visibility */}
            <button onClick={handlePlayPause} className="text-3xl flex items-center font-mono hover:text-yellow-200">
                <span className='text-[19px] mr-2 animate-grow-shrink '>
                    Tap Here
                </span>
                {isPlaying ? <FaRegPauseCircle /> : <FaRegPlayCircle />}
            </button>
        </div>
    );
};

export default SoundEffect;
