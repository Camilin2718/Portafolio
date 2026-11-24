import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section className="py-16 sm:py-20 border-t border-ash-200/80 dark:border-ash-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-9 w-9 rounded-full bg-ash-200 dark:bg-ash-900 flex items-center justify-center text-ash-900 dark:text-white">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ash-950 dark:text-white">
              Mi Experiencia
            </h2>
            <p className="text-xs sm:text-sm text-ash-500 dark:text-ash-400">
              Una trayectoria diseñando y escalando productos digitales.
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="divide-y divide-ash-200 dark:divide-ash-850">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start group transition-colors"
            >
              {/* Timeline & Type */}
              <div className="md:col-span-3 space-y-1">
                <span className="text-sm font-semibold text-ash-950 dark:text-white block font-mono">
                  {exp.period}
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-ash-200 dark:bg-ash-900 text-ash-700 dark:text-ash-300">
                  {exp.type}
                </span>
              </div>

              {/* Role & Company */}
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-ash-950 dark:text-white group-hover:text-ash-600 dark:group-hover:text-ash-300 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-ash-500 dark:text-ash-400 mt-0.5">
                  {exp.company}
                </p>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-sm text-ash-600 dark:text-ash-400 font-normal leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
