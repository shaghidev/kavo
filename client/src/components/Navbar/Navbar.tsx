'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
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

  return (
    <LayoutGroup>
      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
          >
            <div className="flex items-center space-x-4">
              {/* Logo na sredini */}
              <motion.div
                layoutId="logo"
                initial={{ scale: 0.7, y: -30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.7, y: -20, opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <Image src="/logo/kavo-logo.png" alt="Logo" width={120} height={120} />
              </motion.div>

              {/* Typewriter */}
              <AnimatePresence>
                {showText && (
                  <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-[#FFBD00] text-3xl font-sans font-bold"
                >
                  <Typewriter
                    onInit={(tw) => {
                      tw.typeString('avo studio')
                        .pauseFor(1400)
                        .deleteAll(50)
                        .callFunction(() => {
                          setShowText(false);
                          setShowIntro(false); // overlay nestaje → logo u navbar
                        })
                        .start();
                    }}
                    options={{ autoStart: true, delay: 100, cursor: '|', loop: false }}
                  />
                </motion.span>
                
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="w-full bg-black text-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo u navbaru */}
            <motion.div
              layoutId="logo"
              initial={{ scale: 0.7, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link href="/">
                <Image src="/logo/kavo-logo.png" alt="Logo" width={50} height={50} />
              </Link>
            </motion.div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-gray-300">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </LayoutGroup>
  );
};

export default Navbar;
