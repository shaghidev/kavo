'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const links = [
  { href: '#about', label: 'O nama' },
  { href: '#services', label: 'Usluge' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Kontakt' },
];

const Navbar: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState<'black' | 'white'>('white');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTextColor(scrollY > 150 ? 'black' : 'white');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LayoutGroup>
      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
          >
            <div className="flex items-end space-x-4">
              <motion.div
                layoutId="logo"
                initial={{ scale: 0.7, y: -20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.7, y: -20, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <Image src="/logo/kavo-logo.png" alt="Logo" width={120} height={120} />
              </motion.div>

              <AnimatePresence>
                {showText && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex items-end"
                  >
                    <span className="text-[#FFBD00] text-5xl sm:text-6xl md:text-7xl font-bold">
                      <Typewriter
                        onInit={(tw) => {
                          tw.typeString('avo studio')
                            .pauseFor(800)
                            .deleteAll(30)
                            .callFunction(() => {
                              setShowText(false);
                              setShowIntro(false);
                            })
                            .start();
                        }}
                        options={{ autoStart: true, delay: 50, cursor: '|' }}
                      />
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300"
        style={{ color: textColor, backgroundColor: 'transparent' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 w-full max-w-full">
            {/* Logo */}
            <motion.div
              layoutId="logo"
              initial={{ scale: 0.7, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <Image src="/logo/kavo-logo.png" alt="Logo" width={50} height={50} />
              </Link>
            </motion.div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300"
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
                className="focus:outline-none p-2 rounded-md transition"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke={textColor} viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
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
              className="md:hidden overflow-hidden w-full bg-black"
            >
              <div className="flex flex-col w-full px-4 py-3 space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors duration-300 w-full"
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
