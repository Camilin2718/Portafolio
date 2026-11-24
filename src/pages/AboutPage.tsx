import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExperienceSection } from '../components/ExperienceSection';
import { AwardsSection } from '../components/AwardsSection';
import { ContactSection } from '../components/ContactSection';
import { Download, Sparkles, GraduationCap, Globe, UserCheck, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  const { personal, technicalSkillsByCategory, education, languages, references } = portfolioData;

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
            Construyendo software con orden, puntualidad y rigurosa atención al detalle.
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
              <a
                href="/Juan_Camilo_Lopez_Suarez_CV.pdf"
                download="Juan_Camilo_Lopez_Suarez_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md active:scale-95 group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Descargar CV Completo (PDF)</span>
              </a>
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

        {/* Technical Skills by Category */}
        <section className="py-16 sm:py-20 border-t border-ash-200/80 dark:border-ash-850">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-9 w-9 rounded-full bg-ash-200 dark:bg-ash-900 flex items-center justify-center text-ash-900 dark:text-white">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ash-950 dark:text-white">
                Habilidades Técnicas
              </h2>
              <p className="text-xs sm:text-sm text-ash-500 dark:text-ash-400">
                Especialización práctica en tecnologías modernas de desarrollo y arquitectura.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkillsByCategory.map((categoryGroup, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-ash-50 dark:bg-ash-900 border border-ash-200/80 dark:border-ash-850 hover:border-ash-400 dark:hover:border-ash-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-ash-950 dark:text-white tracking-tight mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-green"></span>
                    <span>{categoryGroup.category}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-ash-200/70 dark:bg-ash-800 text-ash-800 dark:text-ash-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education, Languages & References */}
        <section className="py-16 sm:py-20 border-t border-ash-200/80 dark:border-ash-850">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Education */}
            <div className="p-6 rounded-2xl bg-ash-50 dark:bg-ash-900 border border-ash-200/80 dark:border-ash-850">
              <div className="flex items-center gap-2.5 mb-4 text-ash-950 dark:text-white">
                <GraduationCap className="w-5 h-5 text-accent-green" />
                <h3 className="text-lg font-bold tracking-tight">Educación</h3>
              </div>
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-base font-bold text-ash-950 dark:text-white">{edu.degree}</p>
                  <p className="text-sm text-ash-600 dark:text-ash-400">{edu.institution}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-ash-200 dark:bg-ash-800 text-ash-800 dark:text-ash-200">
                      {edu.period}
                    </span>
                    <span className="text-xs text-accent-green font-semibold">({edu.status})</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-ash-50 dark:bg-ash-900 border border-ash-200/80 dark:border-ash-850">
              <div className="flex items-center gap-2.5 mb-4 text-ash-950 dark:text-white">
                <Globe className="w-5 h-5 text-accent-green" />
                <h3 className="text-lg font-bold tracking-tight">Idiomas</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-ash-200/50 dark:border-ash-800/50 last:border-0">
                    <span className="text-sm font-semibold text-ash-900 dark:text-ash-100">{lang.language}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-ash-200/60 dark:bg-ash-800 text-ash-700 dark:text-ash-300">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="p-6 rounded-2xl bg-ash-50 dark:bg-ash-900 border border-ash-200/80 dark:border-ash-850">
              <div className="flex items-center gap-2.5 mb-4 text-ash-950 dark:text-white">
                <UserCheck className="w-5 h-5 text-accent-green" />
                <h3 className="text-lg font-bold tracking-tight">Referencias</h3>
              </div>
              {references.map((ref, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-base font-bold text-ash-950 dark:text-white">{ref.name}</p>
                  <p className="text-sm text-ash-600 dark:text-ash-400">{ref.role} — {ref.company}</p>
                  <p className="text-xs font-mono font-medium text-ash-700 dark:text-ash-300 pt-2">
                    Contacto: {ref.phone}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>

      <ExperienceSection />
      <AwardsSection />
      <ContactSection />
    </main>
  );
};
