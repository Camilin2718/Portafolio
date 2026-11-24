import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const SkillsMarquee: React.FC = () => {
  const { skills } = portfolioData;

  // Duplicate items for continuous seamless loop
  const list = [...skills, ...skills, ...skills];

  return (
    <div className="py-8 bg-ash-200/50 dark:bg-ash-900/40 border-y border-ash-200 dark:border-ash-850 overflow-hidden select-none mask-marquee">
      <div className="flex w-max animate-marquee">
        {list.map((skill, index) => (
          <div key={index} className="flex items-center space-x-6 px-4">
            <span className="text-sm sm:text-base font-bold tracking-tight text-ash-800 dark:text-ash-200 uppercase">
              {skill}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-ash-400 dark:text-ash-600"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
