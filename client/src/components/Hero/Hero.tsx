'use client';

import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl h-full">
        
        {/* Lijevi dio */}
        <div className="flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
              Dizajniramo<span className="text-[#FFBD00]">.</span>
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
              Razvijamo<span className="text-[#FFBD00]">.</span>
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
              Inspiriramo<span className="text-[#FFBD00]">.</span>
            </h1>
          </motion.div>
        </div>

        {/* Desni dio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col justify-end items-end h-full text-white text-sm md:text-base leading-relaxed text-right pb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-sm uppercase tracking-wide"
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
