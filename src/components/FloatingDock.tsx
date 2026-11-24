import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderGit2, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingDock: React.FC = () => {
  const location = useLocation();

  const dockItems = [
    { label: 'Inicio', path: '/', icon: Home },
    { label: 'Proyectos', path: '/projects', icon: FolderGit2 },
    { label: 'Sobre mí', path: '/about', icon: User },
    { label: 'Contacto', path: '/contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-1.5 p-1.5 rounded-full bg-ash-950/90 dark:bg-ash-900/90 backdrop-blur-xl border border-ash-800 shadow-2xl text-white"
      >
        {dockItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 transition-all duration-200 select-none ${
                isActive
                  ? 'text-ash-950 font-semibold'
                  : 'text-ash-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockIndicator"
                  className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};
