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
    <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top subtle badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-ash-200/80 dark:bg-ash-900 border border-ash-300/60 dark:border-ash-800 whitespace-nowrap">
            <img
              src={personal.avatarUrl}
              alt={personal.name}
              className="w-6 h-6 rounded-full object-cover object-center border border-white/40 shadow-xs shrink-0"
            />
            <span className="text-xs font-semibold text-ash-800 dark:text-ash-200 flex items-center gap-1.5 whitespace-nowrap">
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

        {/* Main Title & Hero Presentation (Organized in one single line) */}
        <div className="space-y-6 sm:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-black tracking-tight text-ash-950 dark:text-white leading-tight sm:whitespace-nowrap"
          >
            {personal.name} <span className="text-ash-400 dark:text-ash-600 font-light">—</span>
          </motion.h1>

          {/* Interactive discipline tags (All in one line) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {disciplines.map((item, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight border border-ash-300/50 dark:border-ash-800 ${item.color} transition-transform hover:scale-105 select-none whitespace-nowrap`}
              >
                {item.title}
              </span>
            ))}
          </motion.div>

          {/* Subtitle statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-lg sm:text-xl md:text-2xl font-normal text-ash-700 dark:text-ash-300 leading-relaxed tracking-tight"
          >
            {personal.tagline}
          </motion.p>

          {/* Call to actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <a
              href="#selected-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 font-medium text-sm hover:opacity-90 transition-all shadow-md active:scale-95 group"
            >
              <span>Ver proyectos</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ash-300 dark:border-ash-800 bg-ash-50/50 dark:bg-ash-900/50 text-ash-800 dark:text-ash-200 font-medium text-sm hover:bg-ash-200 dark:hover:bg-ash-850 transition-all active:scale-95 group"
            >
              <span>Sobre mí</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
