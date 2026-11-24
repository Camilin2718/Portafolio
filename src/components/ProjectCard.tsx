import React from 'react';
import type { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onOpenDetails(project)}
      className="group cursor-pointer flex flex-col"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-ash-200 dark:bg-ash-900 border border-ash-300/60 dark:border-ash-800/80 shadow-sm transition-all duration-500 group-hover:shadow-xl">
        <img
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-xs sm:text-sm font-medium line-clamp-2 drop-shadow-sm">
            {project.tagline}
          </p>
        </div>

        {/* Top floating pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/40 text-white border border-white/20">
            {project.year}
          </span>
        </div>
      </div>

      {/* Info row */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ash-950 dark:text-white group-hover:opacity-80 transition-opacity">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-ash-500 dark:text-ash-400 mt-0.5">
            {project.category}
          </p>
        </div>

        {/* Circular Action Button */}
        <div className="h-10 w-10 rounded-full border border-ash-300 dark:border-ash-800 flex items-center justify-center bg-ash-50 dark:bg-ash-900 text-ash-700 dark:text-ash-300 group-hover:bg-ash-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-ash-950 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
};
