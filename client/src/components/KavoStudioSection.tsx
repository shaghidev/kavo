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

const KavoStudioSection: React.FC = () => {
  return (
    <section className="bg-[#EBECE7] text-[#080D10] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Dekorativni elementi */}
      
      {/* Glavni naslov */}
      <div className="text-center mb-20 lg:mb-28">
        <motion.h1 
          className="font-extrabold text-[clamp(4rem,12vw,10rem)] lg:text-[clamp(8rem,10vw,12rem)] leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Kavo Studio
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
              className="text-base md:text-lg lg:text-xl leading-relaxed pl-6 max-w-lg border-l border-[#080D10]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typewriter 
                text="Agencija koju vode troje mladih kreativaca, vizionara i radoholičara. Pomažemo poduzećima i startupovima da budu vidljivi online. Ne radimo samo web stranice – mi ih dizajniramo, razvijamo, održavamo i oglašavamo, tako da se vi možete fokusirati na svoje klijente."
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
              className="text-base md:text-lg lg:text-xl leading-relaxed pr-6 max-w-lg border-r border-[#080D10]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Typewriter 
                text="Naša misija je biti pouzdan partner koji poduzećima i startupovima omogućuje da se istaknu na tržištu i povećaju promet publikom."
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
              className="text-base md:text-lg lg:text-xl leading-relaxed pl-6 max-w-lg border-l border-[#080D10]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Typewriter 
                text="Usuđujemo se biti drugačiji. Dok svijet često slijedi gotove obrasce, mi tražimo ono što vaš brend čini posebnim i pretvaramo to u digitalno iskustvo koje ljudi pamte."
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