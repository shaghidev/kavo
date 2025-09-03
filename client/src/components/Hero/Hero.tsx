"use client";

import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-[#080D10] flex items-center justify-center px-2 sm:px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl h-full items-center gap-2 sm:gap-1 md:gap-9">

        {/* Lijevi dio */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-extrabold text-[#EBECE7] mb-2 sm:mb-3 md:mb-4 leading-[1.1] sm:leading-tight md:leading-tight lg:leading-[1.05] xl:leading-[1.05] 2xl:leading-[1]">
              Dizajniramo<span className="text-[#FFBD00]">.</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-extrabold text-[#EBECE7] mb-2 sm:mb-3 md:mb-4 leading-[1.1] sm:leading-tight md:leading-tight lg:leading-[1.05] xl:leading-[1.05] 2xl:leading-[1]">
              Razvijamo<span className="text-[#FFBD00]">.</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-extrabold text-[#EBECE7] leading-[1.1] sm:leading-tight md:leading-tight lg:leading-[1.05] xl:leading-[1.05] 2xl:leading-[1]">
              Inspiriramo<span className="text-[#FFBD00]">.</span>
            </h1>
          </motion.div>
        </div>

        {/* Desni dio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col justify-end items-center md:items-end h-full text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose text-center md:text-right pb-4 sm:pb-6 md:pb-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] uppercase tracking-wide"
          >
            Od elegantnog dizajna <br />
            do funkcionalnih web stranica, <br />
            pomažemo vašem brendu da se <br />
            istakne i postigne rezultate.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
