// components/Clock.tsx
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState({ hours: '', minutes: '', period: '' });

  useEffect(() => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }

    const hoursString = hours.toString().padStart(2, '0');
    setTime({ hours: hoursString, minutes, period });
  }, []);

  return (
    <div className="flex flex-col items-center text-xl font-mono bg-orange-500 rounded-2xl p-2 mr-2">
      <div>{time.hours}</div>
      <div>{time.minutes}</div>
      <div>{time.period}</div>
    </div>
  );
};

export default Clock;
