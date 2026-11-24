import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { ContactSection } from '../components/ContactSection';
import type { Project } from '../types';
import { motion } from 'framer-motion';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Gobierno Digital', 'Full-Stack Web', 'Inteligencia Artificial'];

  const filteredProjects =
    activeCategory === 'Todos'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const handleNavigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = portfolioData.projects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % portfolioData.projects.length;
      setSelectedProject(portfolioData.projects[nextIndex]);
    } else {
      const prevIndex =
        (currentIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length;
      setSelectedProject(portfolioData.projects[prevIndex]);
    }
  };

  return (
    <main className="pt-12 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-ash-500 dark:text-ash-400 block mb-3">
            Portafolio
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-ash-950 dark:text-white max-w-4xl leading-tight"
          >
            Una colección selecta de experiencias digitales diseñadas para inspirar, convertir y generar impacto duradero.
          </motion.h1>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all ${
                  activeCategory === cat
                    ? 'bg-ash-950 text-white dark:bg-white dark:text-ash-950 shadow-sm'
                    : 'bg-ash-200/70 dark:bg-ash-900 text-ash-700 dark:text-ash-400 hover:bg-ash-300 dark:hover:bg-ash-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
              index={index}
            />
          ))}
        </div>

      </div>

      <ContactSection />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleNavigateProject}
      />
    </main>
  );
};
