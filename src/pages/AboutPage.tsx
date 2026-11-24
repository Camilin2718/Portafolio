import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExperienceSection } from '../components/ExperienceSection';
import { AwardsSection } from '../components/AwardsSection';
import { ContactSection } from '../components/ContactSection';
import { Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    const blob = new Blob(
      [
        `CURRICULUM VITAE - ${personal.name.toUpperCase()}\n` +
        `Rol: ${personal.role}\n` +
        `Ubicación: ${personal.location}\n` +
        `Correo: ${personal.email}\n\n` +
        `Biografía: ${personal.tagline}\n\n` +
        `Experiencia:\n` +
        portfolioData.experiences.map(e => `- ${e.period}: ${e.role} en ${e.company} (${e.description})`).join('\n')
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${personal.name.replace(/\s+/g, '_')}_CV.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="pt-12 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-ash-500 dark:text-ash-400 block mb-3">
            Sobre mí
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-ash-950 dark:text-white leading-[1.05]"
          >
            Diseñando con claridad, estrategia y atención implacable a cada detalle.
          </motion.h1>
        </div>

        {/* Narrative & Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-ash-700 dark:text-ash-300 text-base sm:text-lg leading-relaxed">
            <p className="text-xl font-medium text-ash-900 dark:text-ash-100">
              {personal.bioParagraph1}
            </p>
            <p>
              {personal.bioParagraph2}
            </p>
            <p>
              {personal.bioParagraph3}
            </p>

            {/* Quick Actions */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md active:scale-95 group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Descargar CV</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-ash-200 dark:bg-ash-900 border border-ash-300/60 dark:border-ash-800 shadow-xl group">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-full object-cover object-center filter grayscale contrast-105 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute top-4 right-4 backdrop-blur-md bg-black/40 px-3 py-1 rounded-full text-xs text-white border border-white/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-accent-green" />
                <span>Full-Stack Junior</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <ExperienceSection />
      <AwardsSection />
      <ContactSection />
    </main>
  );
};
