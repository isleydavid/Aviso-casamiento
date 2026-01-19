
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
    // Small delay to ensure navigation happens then reload to trigger LoadingScreen
    setTimeout(() => window.location.reload(), 10);
  };

  const navLinks = [
    { name: 'INICIO', href: '#home' },
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'EVENTO', href: '#el-evento' },
    { name: 'LOGÍSTICA', href: '#como-llegar' },
    { name: 'HOSPEDAJE', href: '#hospedaje' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="serif text-2xl tracking-[0.2em] text-[#1a1a1a] hover:opacity-70 transition-opacity"
        >
          D<span className="italic-serif text-lg mx-0.5">&</span>M
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.3em] font-bold hover:text-[#b89c72] transition-colors duration-300 text-[#1a1a1a]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`block h-px w-full bg-[#1a1a1a] transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block h-px w-full bg-[#1a1a1a] transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-px w-full bg-[#1a1a1a] transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu (Sidebar) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-[#fdfcf9] z-40 flex flex-col items-center justify-center"
          >
            {/* Logo inside sidebar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-8"
            >
              <a 
                href="/" 
                onClick={handleLogoClick}
                className="serif text-3xl tracking-[0.2em] text-[#1a1a1a]"
              >
                D<span className="italic-serif text-xl mx-0.5">&</span>M
              </a>
            </motion.div>

            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="text-[#1a1a1a] serif text-4xl italic-serif hover:text-[#b89c72] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name.toLowerCase()}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-[10px] tracking-[0.4em] text-[#b89c72] uppercase font-bold"
            >
              João Pessoa 2027
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
