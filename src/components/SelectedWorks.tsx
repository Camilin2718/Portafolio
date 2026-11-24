import React, { useState } from 'react';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorksProps {
  projects: Project[];
  onOpenDetails: (project: Project) => void;
  showAllLink?: boolean;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({
  projects,
  onOpenDetails,
  showAllLink = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Gobierno Digital', 'Full-Stack Web', 'Inteligencia Artificial'];

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="selected-works" className="py-16 sm:py-24 border-t border-ash-200/80 dark:border-ash-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-ash-950 dark:text-white">
              Proyectos Seleccionados
            </h2>
            <p className="mt-2 text-ash-600 dark:text-ash-400 text-sm sm:text-base font-normal max-w-lg">
              Sistemas de gobierno digital, plataformas web completas y soluciones de inteligencia artificial desarrolladas para el mundo real.
            </p>
          </div>

          {/* Category Filter Pills & See All */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all ${
                  activeCategory === cat
                    ? 'bg-ash-950 text-white dark:bg-white dark:text-ash-950 shadow-sm'
                    : 'bg-ash-200/70 dark:bg-ash-900 text-ash-700 dark:text-ash-400 hover:bg-ash-300 dark:hover:bg-ash-800'
                }`}
              >
                {cat}
              </button>
            ))}

            {showAllLink && (
              <Link
                to="/projects"
                className="hidden sm:inline-flex items-center gap-1 ml-3 text-xs font-bold text-ash-950 dark:text-white hover:opacity-75 transition-opacity"
              >
                <span>Ver todos</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={onOpenDetails}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
