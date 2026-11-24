import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhoAmI: React.FC = () => {
  const { personal, services } = portfolioData;

  const handleDownloadCV = () => {
    // Demo alert or simulated download
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
    <section className="py-16 sm:py-24 border-t border-ash-200/80 dark:border-ash-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-ash-500 dark:text-ash-400 block mb-2">
            Quién soy
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-ash-950 dark:text-white max-w-3xl leading-tight">
            Disfruto transformar ideas en sitios web, marcas y productos que se sientan intuitivos, memorables y construidos con propósito.
          </h2>
        </div>

        {/* Two Column Layout: Story & Stats + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-ash-700 dark:text-ash-300 text-base sm:text-lg leading-relaxed">
            <p>
              {personal.bioParagraph2}
            </p>
            <p>
              {personal.bioParagraph3}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-ash-200 dark:border-ash-850">
              {personal.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl sm:text-4xl font-extrabold text-ash-950 dark:text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-ash-500 dark:text-ash-400 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Download CV Action */}
            <div className="pt-4">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md active:scale-95 group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Descargar CV</span>
              </button>
            </div>
          </div>

          {/* Profile Card / Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-ash-200 dark:bg-ash-900 border border-ash-300/60 dark:border-ash-800 shadow-xl group">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-full object-cover object-center filter grayscale contrast-105 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-ash-300 whitespace-nowrap">Desarrollador Full-Stack Junior</span>
                <p className="text-xl font-bold tracking-tight whitespace-nowrap">{personal.name}</p>
                <p className="text-xs text-ash-300 mt-1 font-medium whitespace-nowrap">{personal.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Capabilities Cards */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-ash-900 dark:text-white" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-ash-950 dark:text-white">
              Lo que aporto a cada proyecto
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((srv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-ash-50 dark:bg-ash-900 border border-ash-200/80 dark:border-ash-850 hover:border-ash-400 dark:hover:border-ash-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-ash-950 dark:text-white tracking-tight">
                    {srv.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ash-600 dark:text-ash-400 mt-2 font-normal leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-ash-200/60 dark:border-ash-800">
                  {srv.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-ash-200/70 dark:bg-ash-850 text-ash-700 dark:text-ash-300 flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-accent-green" />
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
