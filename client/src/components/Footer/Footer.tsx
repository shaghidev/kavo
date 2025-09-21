'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
      <footer className="relative bg-gradient-to-b from-[#080D10] to-[#0A0F12] text-gray-100 overflow-hidden border-t border-gray-800/30">
        {/* Glavni sadržaj */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-16 md:py-20 z-10 relative">
          
          {/* Grid layout za bolju organizaciju */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            {/* Lijeva strana - Branding */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase tracking-tight">
                Kavo Studio
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Stvaramo digitalna iskustva koja ostavljaju dojam. Vaša vizija, naša stručnost.
              </p>
            </motion.div>

            {/* Srednja strana - Navigacija */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white uppercase tracking-wide">
                Stranice
              </h4>
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="/#about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm uppercase tracking-wide"
                >
                  O nama
                </Link>
                <Link 
                  href="/#services"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm uppercase tracking-wide"
                >
                  Usluge
                </Link>
                <Link 
                  href="/#portfolio"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm uppercase tracking-wide"
                >
                  Portfolio
                </Link>
                <Link 
                  href="/#contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm uppercase tracking-wide"
                >
                  Kontakt
                </Link>
              </nav>
            </motion.div>

            {/* Desna strana - Kontakt i social */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white uppercase tracking-wide">
                Kontakt
              </h4>
              <div className="flex flex-col space-y-3">
                <motion.a
                  href="mailto:hi@kavo.studio"
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm group"
                >
                  <span className="uppercase tracking-wide">hi@kavo.studio</span>
                </motion.a>
                
                <motion.a
                  href="https://www.instagram.com/kavostudioo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm group"
                >
                  <span className="uppercase tracking-wide">Instagram</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Donja linija s copyright i privacy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-700/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Copyright 2025 © Kavo Studio
            </p>
            
            <Link 
              href="/privacy-policy" 
              className="text-yellow-400/80 hover:text-yellow-400 transition-colors duration-300 text-xs uppercase tracking-wider underline underline-offset-2"
            >
              Pravila privatnosti
            </Link>
          </motion.div>
        </div>

        {/* Dekorativni background tekst */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-[25vw] md:text-[20vw] lg:text-[15vw] font-black text-white leading-none tracking-tighter select-none"
          >
            KAVO
          </motion.h1>
        </div>

        {/* Subtilni gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </footer>
    );
  };

export default Footer;
