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

// Dekorativni elementi
const DecorativeElements: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    {/* Zvjezdice */}
    <div className="absolute top-4 left-8 text-2xl">✱</div>
    <div className="absolute top-16 right-12 text-lg">✱</div>
    <div className="absolute bottom-20 left-16 text-xl">✱</div>
    <div className="absolute bottom-8 right-20 text-2xl">✱</div>
    
    {/* Krugovi */}
    <div className="absolute top-12 right-4 w-3 h-3 rounded-full border-1 border-black"></div>
    <div className="absolute top-32 left-4 w-4 h-4 rounded-full border-2 border-black"></div>
    <div className="absolute bottom-16 right-8 w-2 h-2 rounded-full border-2 border-black"></div>
    
    {/* Križevi */}
    <div className="absolute top-20 left-20 text-lg">+</div>
    <div className="absolute bottom-32 right-16 text-xl">+</div>
    <div className="absolute top-40 right-24 text-sm">+</div>
    
    {/* X-ovi */}
    <div className="absolute top-8 right-32 text-lg">×</div>
    <div className="absolute bottom-12 left-8 text-xl">×</div>
  </div>
);

const KavoStudioSection: React.FC = () => {
  return (
    <section className="bg-[#EBECE7] text-[#080D10] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Dekorativni elementi */}
      <DecorativeElements />
      
      {/* Glavni naslov */}
      <div className="text-center mb-20 lg:mb-28">
        <motion.h1 
          className="font-extrabold text-[clamp(4rem,12vw,10rem)] lg:text-[clamp(8rem,10vw,12rem)] leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          KAVO STUDIO
        </motion.h1>
      </div>

      {/* Glavni sadržaj - tri reda */}
      <div className="max-w-7xl mx-auto space-y-32 lg:space-y-40">
        
        {/* Prvi red - lijevi tekst s borderom, desna slika */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="order-2 lg:order-1">
            <motion.p 
              className="text-base md:text-lg lg:text-xl leading-relaxed uppercase border-l border-[#080D10] pl-6 max-w-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typewriter 
                text="AGENCIJA KOJU VODE DVOJE MLADIH KREATIVACA, VIZIONARA I RADOHOLIČARA. POMAŽEMO PODUZEĆIMA I STARTUPOVIMA DA BUDU VIDLJIVI ONLINE. NE RADIMO SAMO WEB STRANICE – MI IH DIZAJNIRAMO, RAZVIJAMO, ODRŽAVAMO I OGLAŠAVAMO, TAKO DA SE VI MOŽETE FOKUSIRATI NA SVOJE KLIJENTE."
                delay={1000}
                speed={25}
              />
            </motion.p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <motion.div 
              className="relative w-full h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1,
                y: [0, -12, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.6 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/avatars/Adam.png"
                alt="Kreativac s laptopom"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Drugi red - lijeva slika, desni tekst s borderom */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <motion.div 
              className="relative w-full h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.9 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/avatars/Nina.png"
                alt="Dizajner na olovci"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
          <div className="lg:text-right lg:flex lg:justify-end">
            <motion.p 
              className="text-base md:text-lg lg:text-xl leading-relaxed uppercase border-r border-[#080D10] pr-6 max-w-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Typewriter 
                text="NAŠA MISIJA JE BITI POUZDAN PARTNER KOJI PODUZEĆIMA I STARTUPOVIMA OMOGUĆUJE DA SE ISTAKNU NA TRŽIŠTU I POVEĆAJU PROMET PUBLIKOM."
                delay={4000}
                speed={30}
              />
            </motion.p>
          </div>
        </motion.div>

        {/* Treći red - lijevi tekst s borderom, desna slika */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="order-2 lg:order-1">
            <motion.p 
              className="text-base md:text-lg lg:text-xl leading-relaxed uppercase border-l border-[#080D10] pl-6 max-w-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Typewriter 
                text="USUĐUJEMO SE BITI DRUGAČIJI. DOK SVIJET ČESTO SLIJEDI GOTOVE OBRASCE, MI TRAŽIMO ONO ŠTO VAŠ BREND ČINI POSEBNIM I PRETVARAMO TO U DIGITALNO ISKUSTVO KOJE LJUDI PAMTE."
                delay={7000}
                speed={35}
              />
            </motion.p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <motion.div 
              className="relative w-full h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/avatars/Nino.png"
                alt="Treća ilustracija"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default KavoStudioSection;