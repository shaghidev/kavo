"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useAnimation } from "@/context/AnimationContext";

const Typewriter: React.FC<{
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  includeDot?: boolean;
}> = ({
  text,
  delay = 0,
  speed = 100,
  className = "",
  includeDot = true,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const { introComplete } = useAnimation();

  const fullText = includeDot ? text + "." : text;

  useEffect(() => {
    let startTimer: NodeJS.Timeout;
    if (introComplete) {
      startTimer = setTimeout(() => setStarted(true), delay);
    }
    return () => clearTimeout(startTimer);
  }, [delay, introComplete]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (started && currentIndex < fullText.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [currentIndex, fullText, speed, started]);

  if (includeDot && displayText.length > 0) {
    // If we include a dot, style the last character differently
    const textWithoutDot = displayText.slice(0, -1);
    const dot = displayText.slice(-1);
    
    return (
      <span className={className}>
        {textWithoutDot}
        {dot === "." ? <span className="text-[#FFBD00]">.</span> : dot}
      </span>
    );
  }

  return <span className={className}>{displayText}</span>;
};

const Hero: React.FC = () => {
  const { introComplete } = useAnimation();

  return (
    <section className="relative w-full min-h-screen bg-[#080D10] flex items-center justify-center px-2 sm:px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl gap-4 sm:gap-2 md:gap-9 md:h-screen">
        {/* Lijevi dio - glavni sadržaj */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left [&>*+*]:mt-3 h-auto md:h-full mb-4 md:mb-0">
          <motion.h1
            className="text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] lg:text-[85px] xl:text-[90px] font-extrabold text-[#EBECE7] leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: introComplete ? 1 : 0,
              y: introComplete ? 0 : 50,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typewriter 
              text="Dizajniramo" 
              delay={100} 
              speed={80} 
            />
          </motion.h1>

          <motion.h1
            className="text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] lg:text-[85px] xl:text-[90px] font-extrabold text-[#EBECE7] leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: introComplete ? 1 : 0,
              y: introComplete ? 0 : 50,
            }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Typewriter 
              text="Razvijamo" 
              delay={1100} 
              speed={80} 
            />
          </motion.h1>

          <motion.h1
            className="text-[40px] xs:text-[50px] sm:text-[70px] md:text-[80px] lg:text-[85px] xl:text-[90px] font-extrabold text-[#EBECE7] leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: introComplete ? 1 : 0,
              y: introComplete ? 0 : 50,
            }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Typewriter 
              text="Inspiriramo" 
              delay={1900} 
              speed={80} 
            />
          </motion.h1>
        </div>

        {/* Desni dio - samo dopunjuje dizajn */}
        <div className="flex flex-col md:justify-end h-auto md:h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: introComplete ? 1 : 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="flex flex-col text-white text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[12px] leading-relaxed mb-4 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-32 space-y-2 max-w-[200px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] mx-auto md:ml-auto md:mr-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3, duration: 0.5 }}
              className="uppercase tracking-wide text-center md:text-right"
            >
              OD ELEGANTNOG DIZAJNA
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="uppercase tracking-wide text-center md:text-left"
            >
              DO FUNKCIONALNIH WEB STRANICA,
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7, duration: 0.5 }}
              className="uppercase tracking-wide text-center md:text-left"
            >
              POMAŽEMO VAŠEM BRENDU DA SE
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.9, duration: 0.5 }}
              className="uppercase tracking-wide text-center md:text-right"
            >
              ISTAKNE I POSTIGNE REZULTATE.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
