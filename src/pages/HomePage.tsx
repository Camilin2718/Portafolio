import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { SelectedWorks } from '../components/SelectedWorks';
import { SkillsMarquee } from '../components/SkillsMarquee';
import { WhoAmI } from '../components/WhoAmI';
import { ContactSection } from '../components/ContactSection';
import { ProjectModal } from '../components/ProjectModal';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const handleNavigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = portfolioData.projects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % portfolioData.projects.length;
      setSelectedProject(portfolioData.projects[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length;
      setSelectedProject(portfolioData.projects[prevIndex]);
    }
  };

  return (
    <main>
      <Hero />
      <SelectedWorks
        projects={portfolioData.projects}
        onOpenDetails={handleOpenDetails}
        showAllLink={true}
      />
      <SkillsMarquee />
      <WhoAmI />
      <ContactSection />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseDetails}
        onNavigate={handleNavigateProject}
      />
    </main>
  );
};
