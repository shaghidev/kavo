'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Typewriter: React.FC<{ text: string; delay?: number; speed?: number }> = ({ 
  text, 
  delay = 0, 
  speed = 100 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, started]);

  return <span>{displayText}</span>;
};

const KavoStudioSection: React.FC = () => {
  return (
    <section className="bg-[#EBECE7] text-[#080D10] py-20 px-6 md:px-16">
      {/* Naslov */}
      <div className="relative text-center mb-16 md:mb-20">
        <motion.h2 
          className="font-extrabold inline-flex flex-col sm:flex-row gap-2 sm:gap-4 relative text-[clamp(3rem,10vw,7rem)] sm:text-[clamp(4rem,10vw,8rem)] md:text-[clamp(6rem,9vw,10rem)] leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Dio s linijom */}
          <motion.span 
            className="relative inline-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative z-10">
              <Typewriter text="KAVO" delay={800} speed={150} />
            </span>
            <motion.div 
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
            >
              <Image
                src="/underline/kavo.png"
                alt="Dekorativna žuta linija"
                width={500}
                height={80}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.span>
          {/* Dio bez linije */}
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typewriter text="STUDIO" delay={1200} speed={150} />
          </motion.span>
        </motion.h2>
      </div>

      {/* Glavni sadržaj */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
        {/* Lijevi blok */}
        <motion.div 
          className="flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p 
            className="text-lg sm:text-xl leading-relaxed uppercase border-l-4 border-[#080D10] pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Typewriter 
              text="Agencija koju vode dvoje mladih kreativaca, vizionara i radoholičara. Pomažemo poduzećima i startupovima da budu vidljivi online. Ne radimo samo web stranice – mi ih dizajniramo, razvijamo, održavamo i oglašavamo, tako da se vi možete fokusirati na svoje klijente."
              delay={2000}
              speed={30}
            />
          </motion.p>

          <motion.div 
            className="relative w-full sm:w-3/4 md:w-full h-64 sm:h-80 md:h-[420px] mx-auto mt-8 md:mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.8 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            }}
            whileHover={{ y: -15 }}
          >
            <Image
              src="/avatars/Adam.png"
              alt="Kreativac s laptopom"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Desni blok */}
        <motion.div 
          className="flex flex-col justify-between h-full text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div 
            className="relative w-full sm:w-3/4 md:w-full h-64 sm:h-80 md:h-[420px] mx-auto mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: [0, -8, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 1.1 },
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
            }}
            whileHover={{ y: -15 }}
          >
            <Image
              src="/avatars/Nina.png"
              alt="Dizajner na olovci"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.p 
            className="text-lg sm:text-xl leading-relaxed uppercase border-r-4 border-[#080D10] pr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Typewriter 
              text="Usuđujemo se biti drugačiji. Dok svijet često slijedi gotove obrasce, mi tražimo ono što vaš brend čini posebnim i pretvaramo to u digitalno iskustvo koje ljudi pamte."
              delay={6000}
              speed={40}
            />
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default KavoStudioSection;