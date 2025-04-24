
import { ReactNode } from 'react';

interface ConsequenceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ConsequenceCard = ({ icon, title, description }: ConsequenceCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-white/10">
      <div className="text-red-500 mb-4 text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};
