'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import IntroOverlay from './IntroOverlay';

const links = [
  { href: '/#about', label: 'O nama' },
  { href: '/#services', label: 'Usluge' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#contact', label: 'Kontakt' },
];

const Navbar: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isYellowSection, setIsYellowSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const yellowSections = [
      document.querySelector('#contact'),
      document.querySelector('#scrollcards'),
    ].filter(Boolean) as HTMLElement[];

    if (!yellowSections.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2; // sredina viewporta
      let inYellow = false;

      for (const section of yellowSections) {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollY >= top && scrollY <= bottom) {
          inYellow = true;
          break;
        }
      }

      setIsYellowSection(inYellow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // provjeri odmah na load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = isYellowSection ? '/logo/logo-crni.png' : '/logo/kavo-logo.png';
  const textColor = isYellowSection ? 'black' : 'white';

  return (
    <LayoutGroup>
      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}

      <nav className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20 md:h-24 w-full max-w-full">
            {/* Logo */}
            <motion.div
              layoutId="logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <motion.div
                  key={logoSrc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={logoSrc} alt="Logo" width={60} height={60} />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8 xl:space-x-12 text-base xl:text-lg uppercase tracking-wide font-bold">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-500 hover:text-[#FFBD00]"
                  style={{ color: textColor }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none p-4 rounded-md transition-all duration-300 hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke={textColor}
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      mobileMenuOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden w-full bg-[#080D10]/95 backdrop-blur-sm border-t border-gray-800"
            >
              <div className="flex flex-col w-full px-6 py-8 space-y-6 uppercase tracking-wide font-bold">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors duration-500 w-full text-lg text-center hover:text-[#FFBD00]"
                    style={{ color: textColor }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </LayoutGroup>
  );
};

export default Navbar;
