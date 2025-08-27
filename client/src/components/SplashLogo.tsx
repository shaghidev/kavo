'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SplashLogo: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [animateToNavbar, setAnimateToNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateToNavbar(true), 1500); // 1.5s centrirano
    const finishTimer = setTimeout(() => onFinish(), 2500); // 2.5s ukupno
    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-black z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 3, x: 0, y: 0 }}
        animate={
          animateToNavbar
            ? { scale: 1, x: -window.innerWidth / 2 + 60, y: -window.innerHeight / 2 + 40 }
            : { scale: 3, x: 0, y: 0 }
        }
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </motion.div>
    </motion.div>
  );
};

export default SplashLogo;
