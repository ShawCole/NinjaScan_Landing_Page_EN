
import { useEffect, useState } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const deadline = new Date('2025-06-28').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[80px]">
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <p className="text-sm opacity-70">Days</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[80px]">
          <span className="text-3xl font-bold">{timeLeft.hours}</span>
          <p className="text-sm opacity-70">Hours</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[80px]">
          <span className="text-3xl font-bold">{timeLeft.minutes}</span>
          <p className="text-sm opacity-70">Minutes</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[80px]">
          <span className="text-3xl font-bold">{timeLeft.seconds}</span>
          <p className="text-sm opacity-70">Seconds</p>
        </div>
      </div>
    </div>
  );
};
