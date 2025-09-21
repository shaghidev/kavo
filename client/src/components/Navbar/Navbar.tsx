'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle navbar visibility based on scroll direction
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          // Ako je mobile menu otvoren, uvijek prikaži navbar i ne nastavi s logikom
          if (mobileMenuOpen) {
            setIsVisible(true);
            setLastScrollY(currentScrollY);
            ticking = false;
            return;
          }
          
          // Only proceed if scroll difference is significant (avoids tiny movements)
          if (scrollDifference < 5) {
            ticking = false;
            return;
          }
          
          if (currentScrollY < 10) {
            // Always show at top
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100 && !isHovered) {
            // Scrolling down - hide navbar (only after scrolling past 100px)
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHovered, mobileMenuOpen]);

  // Provjeri treba li sakriti navbar nakon zatvaranja mobile menua
  useEffect(() => {
    if (!mobileMenuOpen) {
      // Kratka pauza pa provjeri scroll poziciju
      const timer = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100 && !isHovered) {
          setIsVisible(false);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen, isHovered]);

  useEffect(() => {
    // Ako smo na contact stranici, ne pratimo žute sekcije
    if (pathname === '/contact') return;

    const yellowSections = [
      document.querySelector('#scrollcards'),
      document.querySelector('#contact'),
    ].filter(Boolean) as HTMLElement[];

    if (!yellowSections.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Odredi logo i boju teksta
  let logoSrc = '/logo/kavo-logo.png';
  let textColor: 'white' | 'black' = 'white';
  let navbarBg = 'transparent';

  if (pathname === '/contact' || pathname === '/privacy-policy') {
    // Contact stranica je tamna - koristimo bijeli logo i bijeli tekst
    logoSrc = '/logo/kavo-logo.png';
    textColor = 'white';
    navbarBg = 'rgba(8, 13, 16, 0.95)';
  } else if (isYellowSection || pathname === '/branding' || pathname === '/graficki-dizajn' || pathname === '/development' || pathname === '/web-dizajn') {
    logoSrc = '/logo/logo-crni.png';
    textColor = 'black';
    navbarBg = 'rgba(255, 189, 0, 0.95)';
  } else if (pathname !== '/') {
    logoSrc = '/logo/logo-crni.png';
    textColor = 'black';
    navbarBg = 'rgba(235, 236, 231, 0.95)';
  }

  // Mobile menu pozadina - prilagodi ovisno o stranici
  const mobileMenuBg = pathname === '/contact' 
    ? 'rgba(8, 13, 16, 0.98)' 
    : 'rgba(255, 255, 255, 0.97)';
  
  const mobileTextColor = pathname === '/contact' 
    ? '#FFBD00'  // Žuta boja za tamnu pozadinu
    : '#080D10';

  return (
    <LayoutGroup>
      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}

      <nav 
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: mobileMenuOpen ? mobileMenuBg : navbarBg,
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
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
                  <Image 
                    src={mobileMenuOpen ? (pathname === '/contact' ? '/logo/kavo-logo.png' : '/logo/logo-crni.png') : logoSrc} 
                    alt="Logo" 
                    width={60} 
                    height={60} 
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8 xl:space-x-12 text-lg xl:text-xl uppercase tracking-wide font-bold">
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
              <motion.button
                onClick={toggleMobileMenu}
                className="focus:outline-none p-3 rounded-md transition-all duration-300 relative"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  backgroundColor: mobileMenuOpen 
                    ? (pathname === '/contact' ? 'rgba(255, 189, 0, 0.1)' : 'rgba(8, 13, 16, 0.1)') 
                    : 'transparent' 
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                  <motion.span
                    className="w-5 h-0.5 rounded-full block absolute"
                    style={{ backgroundColor: mobileMenuOpen ? mobileTextColor : textColor }}
                    animate={{
                      rotate: mobileMenuOpen ? 45 : 0,
                      y: mobileMenuOpen ? 0 : -6,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="w-5 h-0.5 rounded-full block absolute"
                    style={{ backgroundColor: mobileMenuOpen ? mobileTextColor : textColor }}
                    animate={{
                      opacity: mobileMenuOpen ? 0 : 1,
                      scaleX: mobileMenuOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="w-5 h-0.5 rounded-full block absolute"
                    style={{ backgroundColor: mobileMenuOpen ? mobileTextColor : textColor }}
                    animate={{
                      rotate: mobileMenuOpen ? -45 : 0,
                      y: mobileMenuOpen ? 0 : 6,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </motion.button>
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden w-full shadow-2xl"
              style={{ 
                backgroundColor: mobileMenuBg,
                backdropFilter: 'blur(20px)',
                borderTop: pathname === '/contact' 
                  ? '1px solid rgba(255, 189, 0, 0.2)' 
                  : '1px solid rgba(128, 128, 128, 0.2)'
              }}
            >
              <div className="flex flex-col w-full px-6 py-8 space-y-1 uppercase tracking-wide font-bold">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href={link.href}
                      className="transition-all duration-300 w-full text-xl text-center block py-4 px-6 rounded-xl active:scale-95"
                      style={{ 
                        color: mobileTextColor,
                        borderBottom: pathname === '/contact' 
                          ? '1px solid rgba(255, 189, 0, 0.1)' 
                          : '1px solid rgba(128, 128, 128, 0.1)',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = pathname === '/contact' 
                          ? 'rgba(255, 189, 0, 0.1)' 
                          : 'rgba(243, 244, 246, 1)';
                        e.currentTarget.style.color = pathname === '/contact' 
                          ? '#FFBD00' 
                          : '#FFBD00';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = mobileTextColor;
                      }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
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
