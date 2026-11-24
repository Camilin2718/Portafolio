import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { useLiveTime, useTheme } from '../hooks/useUtils';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { personal } = portfolioData;
  const liveTime = useLiveTime(personal.timezone);
  const { isDark, toggle } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Sobre mí', path: '/about' },
    { label: 'Contacto', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-ash-100/90 dark:bg-ash-950/90 border-b border-ash-200/60 dark:border-ash-800/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between gap-4">
          
          {/* Left: Avatar + Name + Availability Pill (All in one single line) */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <Link 
              to="/" 
              className="flex items-center gap-3 text-base sm:text-lg font-bold tracking-tight text-ash-950 dark:text-white hover:opacity-75 transition-opacity whitespace-nowrap shrink-0"
            >
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover object-center border border-ash-300 dark:border-ash-700 shadow-xs shrink-0"
              />
              <span className="whitespace-nowrap font-extrabold tracking-tight">{personal.name}</span>
            </Link>

            {/* Indicator Badge (Active / Available) */}
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ash-200/70 dark:bg-ash-900 border border-ash-300/50 dark:border-ash-800 text-xs font-semibold text-ash-700 dark:text-ash-300 whitespace-nowrap shrink-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              <span className="whitespace-nowrap">{personal.availability}</span>
            </div>
          </div>

          {/* Right: Location & Time + Navigation + Actions (All in one single line) */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            {/* Location & Time */}
            <div className="hidden lg:flex items-center gap-2 text-xs sm:text-sm font-semibold text-ash-600 dark:text-ash-400 whitespace-nowrap shrink-0">
              <span className="whitespace-nowrap">{personal.location}</span>
              <span className="text-ash-400 dark:text-ash-600">•</span>
              <span className="font-mono text-ash-900 dark:text-ash-100 font-bold whitespace-nowrap">{liveTime || '...'}</span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 shrink-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-ash-950 text-white dark:bg-white dark:text-ash-950'
                        : 'text-ash-600 hover:text-ash-950 dark:text-ash-400 dark:hover:text-white hover:bg-ash-200/50 dark:hover:bg-ash-850'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 sm:p-2.5 rounded-full border border-ash-300/60 dark:border-ash-800 bg-ash-50 dark:bg-ash-900 text-ash-700 dark:text-ash-300 hover:bg-ash-200/60 dark:hover:bg-ash-800 transition-colors shrink-0"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-ash-700" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 hover:bg-ash-800 dark:hover:bg-ash-200 transition-all transform active:scale-95 shadow-sm whitespace-nowrap shrink-0"
            >
              <span>Hablemos</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="xl:hidden p-2 rounded-md text-ash-700 dark:text-ash-300 hover:bg-ash-200/60 dark:hover:bg-ash-900 shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden fixed top-[74px] left-0 w-full bg-ash-100/98 dark:bg-ash-950/98 backdrop-blur-xl border-b border-ash-300/60 dark:border-ash-800 z-30 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-ash-200 dark:border-ash-850">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-ash-600 dark:text-ash-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
                  </span>
                  <span>{personal.availability}</span>
                </div>
                <div className="text-xs sm:text-sm text-ash-500 font-mono">
                  {personal.location} • {liveTime}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-ash-950 text-white dark:bg-white dark:text-ash-950'
                      : 'text-ash-800 dark:text-ash-200 hover:bg-ash-200 dark:hover:bg-ash-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-full bg-ash-950 text-white dark:bg-white dark:text-ash-950 font-semibold text-center text-sm flex items-center justify-center gap-2"
                >
                  <span>Hablemos</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
