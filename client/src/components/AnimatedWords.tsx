'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const words = [
  { text: 'Volimo', style: 'font-extrabold text-[8vw] md:text-[10vw]' },
  { text: 'dizajn', style: 'font-extrabold text-[8vw] md:text-[10vw] underline decoration-yellow-500 decoration-8 decoration-wavy' },
  { text: 'tehnologiju', style: 'font-extrabold text-[8vw] md:text-[10vw] underline decoration-purple-600 decoration-8' },
  { text: 'i', style: 'font-extrabold text-[8vw] md:text-[10vw]' },
  { text: 'stvaranje', style: 'font-extrabold text-[8vw] md:text-[10vw]' },
  { text: 'digitalnih', style: 'font-extrabold text-[8vw] md:text-[10vw]' },
  { text: 'iskustava', style: 'font-handwriting text-[8vw] md:text-[10vw] underline decoration-red-500 rounded-full decoration-4' },
  { text: 'koja', style: 'font-extrabold text-[8vw] md:text-[10vw]' },
  { text: 'ljudi', style: 'font-extrabold text-[8vw] md:text-[10vw]' },
  { text: 'pamte.', style: 'font-extrabold text-[8vw] md:text-[10vw]' },
];

export default function AnimatedWords() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-black px-6">
      <div className="flex flex-col items-center space-y-2"> {/* manji razmak */}
        {words.map((word, i) => {
          const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

          return (
            <motion.div
              key={i}
              ref={ref}
              animate={{ opacity: inView ? 1 : 0.2, scale: inView ? 1.05 : 0.95 }}
              transition={{ duration: 1.5 }}
              className={word.style}
            >
              {word.text}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
