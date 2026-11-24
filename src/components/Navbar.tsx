import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { useLiveTime, useTheme } from '../hooks/useUtils';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { personal } = portfolioData;
  const liveTime = useLiveTime(personal.timezone);
  const { isDark, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-ash-100/90 dark:bg-ash-950/90 border-b border-ash-200/70 dark:border-ash-800/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between gap-3">
        
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link 
            to="/" 
            className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base font-bold tracking-tight text-ash-950 dark:text-white hover:opacity-75 transition-opacity whitespace-nowrap shrink-0"
          >
            <img
              src={personal.avatarUrl}
              alt={personal.name}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover object-center border border-ash-300 dark:border-ash-700 shadow-xs shrink-0"
            />
            <span className="whitespace-nowrap font-extrabold">{personal.name}</span>
          </Link>

          {/* Indicator Badge (Active / Available) */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ash-200/60 dark:bg-ash-900 border border-ash-300/50 dark:border-ash-800 text-xs font-medium text-ash-700 dark:text-ash-300 whitespace-nowrap shrink-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </span>
            <span className="whitespace-nowrap">{personal.availability}</span>
          </div>
        </div>

        {/* Right: Location & Time + Theme Toggle + Hablemos CTA */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          {/* Location & Time */}
          <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-ash-600 dark:text-ash-400 whitespace-nowrap shrink-0">
            <span>{personal.location}</span>
            <span className="text-ash-400 dark:text-ash-600">•</span>
            <span className="font-mono text-ash-900 dark:text-ash-100 font-semibold">{liveTime || '...'}</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Alternar tema claro/oscuro"
            className="p-2 rounded-full border border-ash-300/60 dark:border-ash-800 bg-ash-50 dark:bg-ash-900 text-ash-700 dark:text-ash-300 hover:bg-ash-200/60 dark:hover:bg-ash-800 transition-colors shrink-0"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ash-700" />}
          </button>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 hover:bg-ash-800 dark:hover:bg-ash-200 transition-all active:scale-95 shadow-xs whitespace-nowrap shrink-0"
          >
            <span>Hablemos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </header>
  );
};
