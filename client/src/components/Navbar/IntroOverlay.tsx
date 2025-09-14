'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

type Props = {
  onFinish: () => void;
};

const IntroOverlay: React.FC<Props> = ({ onFinish }) => {
  const [showText, setShowText] = useState(true);
  const [skipped, setSkipped] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!skipped) {
        setSkipped(true);
        setShowText(false);
        onFinish();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [skipped, onFinish]);

  return (
    <AnimatePresence>
      {!skipped && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#080D10]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
        >
          <div className="flex items-end space-x-4">
            <motion.div
              layoutId="logo"
              initial={{ scale: 0.7, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: -20, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <Image src="/logo/kavo-logo.png" alt="Logo" width={120} height={120} />
            </motion.div>

            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="flex items-end"
                >
                  <span className="text-[#FFBD00] text-5xl sm:text-6xl md:text-7xl font-bold">
                    <Typewriter
                      onInit={(tw) => {
                        tw.typeString('avo studio')
                          .pauseFor(800)
                          .deleteAll(30)
                          .callFunction(() => {
                            if (!skipped) {
                              setShowText(false);
                              setSkipped(true);
                              onFinish();
                            }
                          })
                          .start();
                      }}
                      options={{ autoStart: true, delay: 50, cursor: '|' }}
                    />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
