import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowUpRight, Copy, Check, MessageSquare, MapPin, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-ash-200/80 dark:border-ash-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Headline */}
        <div className="mb-14 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-ash-500 dark:text-ash-400 block mb-3">
            Contacto & Oportunidades
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-ash-950 dark:text-white leading-[1.05]">
            Hablemos <span className="text-ash-400 dark:text-ash-600 font-light">—</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-ash-600 dark:text-ash-400 max-w-2xl font-normal leading-relaxed">
            Actualmente estoy en búsqueda activa de mi primera o próxima gran oportunidad como <span className="font-semibold text-ash-950 dark:text-white">Desarrollador Full-Stack Junior</span>. Si buscas a alguien con bases sólidas, pasión por aprender rápido y ganas de aportar valor a tu equipo o proyecto, conversemos.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Channels Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Email Card with 1-click Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-ash-50 dark:bg-ash-900/70 border border-ash-200 dark:border-ash-800 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-2xl bg-ash-200 dark:bg-ash-800 flex items-center justify-center text-ash-900 dark:text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ash-500 block">
                    Canal Principal
                  </span>
                  <h3 className="text-lg font-bold text-ash-950 dark:text-white">
                    Correo Electrónico
                  </h3>
                </div>
              </div>

              {/* Contained Email Box with Zero Overflow */}
              <div className="my-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-ash-850 border border-ash-200 dark:border-ash-800 flex flex-col gap-4 shadow-2xs">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ash-400 dark:text-ash-500 block mb-1">
                    Dirección de correo
                  </span>
                  <p className="text-base sm:text-lg lg:text-xl font-mono font-bold text-ash-950 dark:text-white select-all break-all">
                    {personal.email}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-ash-100 dark:border-ash-800/80">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-ash-200 dark:bg-ash-800 text-ash-800 dark:text-ash-200 hover:bg-ash-300 dark:hover:bg-ash-700 transition-colors whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-accent-green" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar correo</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personal.email}?subject=Contacto%20desde%20Portafolio%20-%20Oportunidad%20Laboral`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-ash-950 text-white dark:bg-white dark:text-ash-950 hover:opacity-90 transition-opacity whitespace-nowrap shadow-xs"
                  >
                    <span>Enviar correo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ash-600 dark:text-ash-400 font-normal leading-relaxed">
                Escríbeme para ofertas laborales junior, proyectos o simplemente para conectar. Revisaré tu mensaje y te responderé con prontitud.
              </p>
            </motion.div>

            {/* Direct Instant Messaging / WhatsApp option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-ash-50 dark:bg-ash-900/70 border border-ash-200 dark:border-ash-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-accent-green/20 text-accent-green flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-ash-950 dark:text-white">
                    Conversación Directa
                  </h4>
                  <p className="text-xs sm:text-sm text-ash-600 dark:text-ash-400 mt-0.5">
                    ¿Prefieres un chat rápido? Conversemos directamente por WhatsApp.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/573015634719?text=Hola%20Juan%20Camilo,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent-green text-white font-bold text-xs sm:text-sm hover:opacity-95 shadow-sm active:scale-95 transition-all shrink-0"
              >
                <span>Chatear por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Info: Developer Snapshot & Social Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Developer Quick Sheet */}
            <div className="p-8 rounded-3xl bg-ash-50 dark:bg-ash-900/70 border border-ash-200 dark:border-ash-800 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-ash-950 dark:text-white" />
                <span className="text-xs font-bold uppercase tracking-wider text-ash-500">
                  Ficha del Desarrollador
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start justify-between py-2 border-b border-ash-200 dark:border-ash-800">
                  <span className="text-ash-500 font-medium">Rol</span>
                  <span className="font-semibold text-ash-950 dark:text-white text-right">Desarrollador Full-Stack Junior</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-ash-200 dark:border-ash-800">
                  <span className="text-ash-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Ubicación
                  </span>
                  <span className="font-semibold text-ash-950 dark:text-white text-right">{personal.location}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-ash-200 dark:border-ash-800">
                  <span className="text-ash-500 font-medium">Modalidad</span>
                  <span className="font-semibold text-ash-950 dark:text-white text-right">Remoto / Híbrido / Presencial</span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-ash-500 font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-accent-green" />
                    Disponibilidad
                  </span>
                  <span className="font-semibold text-accent-green text-right">Inmediata (Full-time)</span>
                </div>
              </div>
            </div>

            {/* Social Channels & GitHub Card */}
            <div className="p-8 rounded-3xl bg-ash-50 dark:bg-ash-900/70 border border-ash-200 dark:border-ash-800">
              <span className="text-xs font-bold uppercase tracking-wider text-ash-500 block mb-4">
                Redes Profesionales & Código
              </span>
              <div className="space-y-3">
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 text-sm font-semibold text-ash-800 dark:text-ash-200 hover:text-ash-950 dark:hover:text-white border-b border-ash-200/60 dark:border-ash-800/60 last:border-0 group transition-colors"
                  >
                    <span>{s.platform}</span>
                    <span className="text-xs font-mono text-ash-400 flex items-center gap-1 group-hover:text-ash-950 dark:group-hover:text-white transition-colors">
                      {s.handle || 'Explorar'}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
