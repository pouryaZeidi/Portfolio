import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date());
    };

    // Update time every second
    const timerId = setInterval(updateClock, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Format time and date
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  return (
    <div className=" hidden md:flex md:absolute left-2 top-4 visible  flex-col items-start text-sm font-mono rounded-2xl ml-3 text-white ">
      <div className="mb-1">
        <div className="font-bold text-[18px]">Location:</div>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <div className="font-semibold text-[13px]">Local time</div>
          <div className="ml-1 ">{formatTime(time)}</div>
          <div className="ml-2 hidden lg:text-[13px] md:flex">GMT {Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
        </div>
        <div className="mt-1 hidden md:flex">{formatDate(time)}</div>
      </div>
    </div>
  );
};

export default Clock;
