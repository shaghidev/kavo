'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const cards = [
  { title: 'Kartica 1', description: 'Opis prve kartice', image: '/images/card1.jpg' },
  { title: 'Kartica 2', description: 'Opis druge kartice', image: '/images/card2.jpg' },
  { title: 'Kartica 3', description: 'Opis treće kartice', image: '/images/card3.jpg' },
  { title: 'Kartica 4', description: 'Opis četvrte kartice', image: '/images/card4.jpg' },
];

const rotations = [-5, 3, -3, 4];
const yOffsets = [0, -30, -60, -90];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY;

      const progress = Math.min(
        Math.max((scrollTop - sectionTop) / (sectionHeight - window.innerHeight), 0),
        1
      );
      const index = Math.floor(progress * cards.length);
      setActiveIndex(Math.min(index, cards.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] bg-[#FFBD00] flex flex-col items-center justify-start px-6 pt-[145px]"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#080D10] mb-16 text-center z-10">
        U ČEMU SMO STVARNO DOBRI
      </h2>

      <div className="relative w-full max-w-4xl h-[450px] mt-[0px]">
        {cards.map((card, i) => {
          const isActive = i === activeIndex;
          return (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl bg-white flex flex-col overflow-hidden"
              style={{
                transform: `translateY(${yOffsets[i]}px) rotate(${rotations[i]}deg) scale(${isActive ? 1 : 0.95})`,
                zIndex: i === activeIndex ? 10 : 5 - i,
              }}
              animate={{
                scale: isActive ? 1 : 0.95,
                rotate: rotations[i],
                y: yOffsets[i],
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-[#080D10] mb-2">{card.title}</h3>
                <p className="text-[#333]">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
