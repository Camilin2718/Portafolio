import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate?: (direction: 'next' | 'prev') => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate) onNavigate('next');
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate('prev');
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8">
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-ash-100 dark:bg-ash-950 border border-ash-300 dark:border-ash-800 rounded-3xl shadow-2xl z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-ash-100/90 dark:bg-ash-950/90 backdrop-blur-md border-b border-ash-200 dark:border-ash-850">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-ash-200 dark:bg-ash-900 text-ash-800 dark:text-ash-200">
                {project.category}
              </span>
              <span className="text-xs text-ash-500 font-mono">
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {onNavigate && (
                <div className="flex items-center gap-1 mr-2">
                  <button
                    onClick={() => onNavigate('prev')}
                    aria-label="Previous project"
                    className="p-1.5 rounded-full hover:bg-ash-200 dark:hover:bg-ash-900 text-ash-600 dark:text-ash-400"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('next')}
                    aria-label="Next project"
                    className="p-1.5 rounded-full hover:bg-ash-200 dark:hover:bg-ash-900 text-ash-600 dark:text-ash-400"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-full bg-ash-200/80 dark:bg-ash-900 text-ash-700 dark:text-ash-300 hover:bg-ash-300 dark:hover:bg-ash-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ash-950 dark:text-white">
                {project.title}
              </h2>
              <p className="mt-2 text-base sm:text-lg text-ash-600 dark:text-ash-400">
                {project.tagline}
              </p>
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-ash-50 dark:bg-ash-900/60 border border-ash-200 dark:border-ash-850">
              <div>
                <span className="text-xs font-semibold text-ash-400 dark:text-ash-500 uppercase tracking-wider block">Empresa</span>
                <span className="text-sm font-semibold text-ash-900 dark:text-ash-100">{project.client}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-ash-400 dark:text-ash-500 uppercase tracking-wider block">Cronograma</span>
                <span className="text-sm font-semibold text-ash-900 dark:text-ash-100">{project.timeline}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-ash-400 dark:text-ash-500 uppercase tracking-wider block">Rol</span>
                <span className="text-sm font-semibold text-ash-900 dark:text-ash-100">{project.role}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-ash-400 dark:text-ash-500 uppercase tracking-wider block">Proyecto</span>
                <span className="text-sm font-semibold text-ash-900 dark:text-ash-100">{project.projectType}</span>
              </div>
            </div>

            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-ash-200 dark:bg-ash-900 border border-ash-200 dark:border-ash-800">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Overview & Challenge */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-ash-400 dark:text-ash-500 mb-2">Resumen del Proyecto</h4>
                <p className="text-sm sm:text-base text-ash-700 dark:text-ash-300 leading-relaxed font-normal">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-ash-400 dark:text-ash-500 mb-2">El Desafío</h4>
                <p className="text-sm sm:text-base text-ash-700 dark:text-ash-300 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              {project.solution && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-ash-400 dark:text-ash-500 mb-2">La Solución</h4>
                  <p className="text-sm sm:text-base text-ash-700 dark:text-ash-300 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-ash-400 dark:text-ash-500 mb-2">Resultados e Impacto</h4>
                <p className="text-sm sm:text-base text-ash-700 dark:text-ash-300 leading-relaxed font-normal">
                  {project.results}
                </p>
              </div>
            </div>

            {/* Metrics cards */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-ash-400 dark:text-ash-500 mb-3">Métricas Clave</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-ash-50 dark:bg-ash-900 border border-ash-200 dark:border-ash-850"
                    >
                      <p className="text-2xl sm:text-3xl font-extrabold text-ash-950 dark:text-white tracking-tight">
                        {metric.value}
                      </p>
                      <p className="text-xs text-ash-500 dark:text-ash-400 mt-1 font-medium">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Images */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-ash-400 dark:text-ash-500">Galería Visual</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((imgUrl, i) => (
                    <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] bg-ash-200 dark:bg-ash-900 border border-ash-200 dark:border-ash-800">
                      <img src={imgUrl} alt={`${project.title} captura ${i+1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables / Scope */}
            {project.deliverables && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-ash-400 dark:text-ash-500 mb-2">Entregables</h4>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-ash-200 dark:bg-ash-850 text-ash-800 dark:text-ash-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-green" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-ash-200 dark:border-ash-850 flex items-center justify-between">
              <button
                onClick={onClose}
                className="text-xs font-semibold text-ash-600 dark:text-ash-400 hover:text-ash-950 dark:hover:text-white"
              >
                Volver a proyectos
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 text-xs font-semibold hover:opacity-90 transition-all"
                >
                  <span>Ver Proyecto en Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
