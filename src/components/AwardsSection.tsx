import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award as AwardIcon } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  const { awards } = portfolioData;

  return (
    <section className="py-16 sm:py-20 border-t border-ash-200/80 dark:border-ash-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-9 w-9 rounded-full bg-ash-200 dark:bg-ash-900 flex items-center justify-center text-ash-900 dark:text-white">
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ash-950 dark:text-white">
              Premios & Reconocimientos
            </h2>
            <p className="text-xs sm:text-sm text-ash-500 dark:text-ash-400">
              Distinciones de la industria, menciones y premios de diseño.
            </p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-ash-50 dark:bg-ash-900 border border-ash-200 dark:border-ash-850 hover:border-ash-400 dark:hover:border-ash-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-ash-200 dark:bg-ash-850 text-ash-800 dark:text-ash-200">
                    {award.year}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ash-500">
                    <AwardIcon className="w-3.5 h-3.5 text-amber-500" />
                    <span>{award.organization}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-ash-950 dark:text-white">
                  {award.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-ash-600 dark:text-ash-400 font-normal leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
