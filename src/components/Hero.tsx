import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const disciplines = [
    { title: 'React & TypeScript', color: 'bg-ash-200 dark:bg-ash-850 text-ash-800 dark:text-ash-200' },
    { title: 'Node.js & Express', color: 'bg-ash-200 dark:bg-ash-850 text-ash-800 dark:text-ash-200' },
    { title: 'PostgreSQL & MongoDB', color: 'bg-ash-200 dark:bg-ash-850 text-ash-800 dark:text-ash-200' },
  ];

  return (
    <section className="relative pt-10 sm:pt-14 pb-14 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top subtle badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="inline-flex items-center gap-2 p-1 pr-3 rounded-full bg-ash-200/80 dark:bg-ash-900 border border-ash-300/60 dark:border-ash-800 whitespace-nowrap shadow-2xs">
            <img
              src={personal.avatarUrl}
              alt={personal.name}
              className="w-5 h-5 rounded-full object-cover object-center border border-white/40 shadow-xs shrink-0"
            />
            <span className="text-[11px] sm:text-xs font-semibold text-ash-800 dark:text-ash-200 flex items-center gap-1.5 whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              <span>Desarrollador Junior Full-Stack</span>
            </span>
          </div>
          <span className="text-xs font-mono text-ash-500 dark:text-ash-400 whitespace-nowrap">
            {personal.location}
          </span>
        </motion.div>

        {/* Main Title & Hero Presentation (Balanced scale) */}
        <div className="space-y-5 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-ash-950 dark:text-white leading-[1.1] sm:whitespace-nowrap"
          >
            {personal.name} <span className="text-ash-400 dark:text-ash-600 font-light">—</span>
          </motion.h1>

          {/* Interactive discipline tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            {disciplines.map((item, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-tight border border-ash-300/50 dark:border-ash-800 ${item.color} transition-transform hover:scale-105 select-none whitespace-nowrap`}
              >
                {item.title}
              </span>
            ))}
          </motion.div>

          {/* Subtitle statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg font-normal text-ash-600 dark:text-ash-400 leading-relaxed tracking-tight"
          >
            {personal.tagline}
          </motion.p>

          {/* Call to actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#selected-works"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-sm active:scale-95 group"
            >
              <span>Ver proyectos</span>
              <ArrowDownRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ash-300 dark:border-ash-800 bg-ash-50/50 dark:bg-ash-900/50 text-ash-800 dark:text-ash-200 font-semibold text-xs sm:text-sm hover:bg-ash-200 dark:hover:bg-ash-850 transition-all active:scale-95 group"
            >
              <span>Sobre mí</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
