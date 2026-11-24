import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingDock } from './components/FloatingDock';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-ash-100 text-ash-950 dark:bg-ash-950 dark:text-ash-50 font-sans selection:bg-ash-950 selection:text-white dark:selection:bg-white dark:selection:text-ash-950 transition-colors duration-300">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <FloatingDock />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
