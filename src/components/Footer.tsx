import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ash-100 dark:bg-ash-950 border-t border-ash-200 dark:border-ash-850 pt-16 pb-28 sm:pb-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-ash-200 dark:border-ash-850">
          
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-ash-950 dark:text-white">
              {personal.name}
            </h3>
            <p className="text-sm text-ash-600 dark:text-ash-400 max-w-sm font-normal">
              {personal.role} radicado en {personal.location}. Creando productos digitales de alto impacto y marcas memorables.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-ash-400 block mb-2">
              Menú
            </span>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link to="/" className="text-ash-700 dark:text-ash-300 hover:text-ash-950 dark:hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-ash-700 dark:text-ash-300 hover:text-ash-950 dark:hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ash-700 dark:text-ash-300 hover:text-ash-950 dark:hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ash-700 dark:text-ash-300 hover:text-ash-950 dark:hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-ash-400 block mb-2">
              Conectar
            </span>
            <ul className="space-y-2 text-sm font-medium">
              {socials.map((s, idx) => (
                <li key={idx}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash-700 dark:text-ash-300 hover:text-ash-950 dark:hover:text-white transition-colors"
                  >
                    {s.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ash-500 font-medium">
          <p>© {new Date().getFullYear()} {personal.name}. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-6">
            <span>Desarrollado con React y TypeScript</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-ash-950 dark:hover:text-white transition-colors"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
