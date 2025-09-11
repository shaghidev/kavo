'use client';

import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#080D10] flex items-center justify-center px-2 sm:px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl gap-4 sm:gap-2 md:gap-9">

        {/* Lijevi dio */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-2 sm:space-y-3 md:space-y-5 h-auto md:h-full mb-4 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[10rem] font-extrabold text-[#EBECE7] leading-[1.05] sm:leading-tight md:leading-tight lg:leading-[1.05] xl:leading-[1.05] 2xl:leading-[1]">
              Dizajniramo<span className="text-[#FFBD00]">.</span>
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[10rem] font-extrabold text-[#EBECE7] leading-[1.05] sm:leading-tight md:leading-tight lg:leading-[1.05] xl:leading-[1.05] 2xl:leading-[1]">
              Razvijamo<span className="text-[#FFBD00]">.</span>
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[10rem] font-extrabold text-[#EBECE7] leading-[1.05] sm:leading-tight md:leading-tight lg:leading-[1.05] xl:leading-[1.05] 2xl:leading-[1]">
              Inspiriramo<span className="text-[#FFBD00]">.</span>
            </h1>
          </motion.div>
        </div>

        {/* Desni dio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col justify-center md:justify-end h-auto md:h-full items-center md:items-end text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed sm:leading-snug md:leading-relaxed text-center md:text-right mb-4 md:mb-0"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] uppercase tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl"
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
