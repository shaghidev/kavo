'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const Typewriter: React.FC<{ text: string; delay?: number; speed?: number; className?: string }> = ({ 
  text, 
  delay = 0, 
  speed = 100,
  className = ""
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

  return <span className={className}>{displayText}</span>;
};

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#080D10] flex items-center justify-center px-2 sm:px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl gap-4 sm:gap-2 md:gap-9 md:h-screen">

        {/* Lijevi dio */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left [&>*+*]:mt-3 h-auto md:h-full mb-4 md:mb-0">
          <motion.h1 
            className="text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] lg:text-[85px] xl:text-[90px] font-extrabold text-[#EBECE7] leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typewriter 
              text="Dizajniramo"
              delay={500}
              speed={80}
            />
            <span className="text-[#FFBD00]">.</span>
          </motion.h1>
          
          <motion.h1 
            className="text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] lg:text-[85px] xl:text-[90px] font-extrabold text-[#EBECE7] leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Typewriter 
              text="Razvijamo"
              delay={1500}
              speed={80}
            />
            <span className="text-[#FFBD00]">.</span>
          </motion.h1>
          
          <motion.h1 
            className="text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] lg:text-[85px] xl:text-[90px] font-extrabold text-[#EBECE7] leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Typewriter 
              text="Inspiriramo"
              delay={2300}
              speed={80}
            />
            <span className="text-[#FFBD00]">.</span>
          </motion.h1>
        </div>

        {/* Desni dio */}
        <div className="flex flex-col md:justify-end h-auto md:h-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.5 }}
            className="flex flex-col text-white text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[12px] leading-relaxed mb-4 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-32 space-y-2 max-w-[200px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] mx-auto md:ml-auto md:mr-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8 }}
              className="uppercase tracking-wide text-center md:text-right"
            >
              <Typewriter 
                text="OD ELEGANTNOG DIZAJNA"
                delay={3800}
                speed={50}
              />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2 }}
              className="uppercase tracking-wide text-center md:text-left"
            >
              <Typewriter 
                text="DO FUNKCIONALNIH WEB STRANICA,"
                delay={4700}
                speed={50}
              />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.6 }}
              className="uppercase tracking-wide text-center md:text-left"
            >
              <Typewriter 
                text="POMAŽEMO VAŠEM BRENDU DA SE"
                delay={6200}
                speed={50}
              />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.0 }}
              className="uppercase tracking-wide text-center md:text-right"
            >
              <Typewriter 
                text="ISTAKNE I POSTIGNE REZULTATE."
                delay={7600}
                speed={50}
              />
            </motion.p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
