import { useEffect, useState } from 'react';
import { calculateTimeUntilDeadline } from '@/utils/dateUtils';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeUntilDeadline());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-8 justify-center items-center">
      <div className="text-center">
        <div className="bg-gray-100 dark:bg-white/10 shadow-lg backdrop-blur-sm rounded-lg p-6 min-w-[120px] border border-gray-200/50 dark:border-white/10">
          <span className="text-6xl font-bold text-gray-900 dark:text-white">{timeLeft.days}</span>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">Days</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-gray-100 dark:bg-white/10 shadow-lg backdrop-blur-sm rounded-lg p-6 min-w-[120px] border border-gray-200/50 dark:border-white/10">
          <span className="text-6xl font-bold text-gray-900 dark:text-white">{timeLeft.hours}</span>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">Hours</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-gray-100 dark:bg-white/10 shadow-lg backdrop-blur-sm rounded-lg p-6 min-w-[120px] border border-gray-200/50 dark:border-white/10">
          <span className="text-6xl font-bold text-gray-900 dark:text-white">{timeLeft.minutes}</span>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">Minutes</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-gray-100 dark:bg-white/10 shadow-lg backdrop-blur-sm rounded-lg p-6 min-w-[120px] border border-gray-200/50 dark:border-white/10">
          <span className="text-6xl font-bold text-gray-900 dark:text-white">{timeLeft.seconds}</span>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">Seconds</p>
        </div>
      </div>
    </div>
  );
};
