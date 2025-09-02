'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

type Card = {
  title: string;
  description: string;
  image: string;
  rotate: string;
};

const cards: Card[] = [
  {
    title: 'Vidljivost koja prodaje',
    description: 'Pomažemo malim biznisima da ih kupci lako pronađu i zapamte.',
    image: '/cards/prodaja.png',
    rotate: '-6deg',
  },
  {
    title: 'WEB od povjerenja',
    description: 'Svaka stranica koju napravimo pokazuje da ste ozbiljni i da vrijedi vjerovati u vaš brend.',
    image: '/cards/web.png',
    rotate: '5deg',
  },
  {
    title: 'Dizajn koji uvjerava',
    description: 'Posjetitelje pretvaramo u kupce kroz pametna rješenja.',
    image: '/cards/dizajn.png',
    rotate: '-4deg',
  },
  {
    title: 'Pouzdani partner',
    description: 'Vaš uspjeh je i naš uspjeh, zato smo uvijek uz vas.',
    image: '/cards/partneri.png',
    rotate: '-4deg',
  },
];

const ScrollCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Hookove definiramo fiksno, izvan petlje
  const yTransforms: MotionValue<string>[] = [
    useTransform(scrollYProgress, [0 / cards.length, 1 / cards.length], ['100%', '0%']),
    useTransform(scrollYProgress, [1 / cards.length, 2 / cards.length], ['100%', '0%']),
    useTransform(scrollYProgress, [2 / cards.length, 3 / cards.length], ['100%', '0%']),
    useTransform(scrollYProgress, [3 / cards.length, 4 / cards.length], ['100%', '0%']),
  ];

  const opacityTransforms: MotionValue<number>[] = [
    useTransform(scrollYProgress, [0 / cards.length, 1 / cards.length], [0, 1]),
    useTransform(scrollYProgress, [1 / cards.length, 2 / cards.length], [0, 1]),
    useTransform(scrollYProgress, [2 / cards.length, 3 / cards.length], [0, 1]),
    useTransform(scrollYProgress, [3 / cards.length, 4 / cards.length], [0, 1]),
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FFBD00] text-[#080D10] py-32 flex flex-col items-center"
    >
      {/* Naslov */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold inline-block relative">
          U ČEMU SMO STVARNO DOBRI
          <span className="absolute left-0 bottom-0 w-full h-3 bg-white -skew-x-6"></span>
        </h2>
      </div>

      {/* Kartice */}
      <div className="relative h-[400vh] w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            style={{ y: yTransforms[i], opacity: opacityTransforms[i] }}
            className="sticky top-32 flex justify-center"
          >
            <div className="w-11/12 max-w-lg lg:max-w-xl h-[600px] flex flex-col items-center justify-center">
              <div
                className="bg-[#EBECE7] shadow-2xl transition-transform duration-500 flex flex-col items-center justify-between text-center p-6 h-full w-full"
                style={{
                  transform: `rotate(${card.rotate})`,
                  clipPath: 'inset(0 round 52px)',
                }}
              >
{/* Slika - 60% visine kartice */}
<div className="w-full h-3/5 relative mb-4">
  <Image
    src={card.image}
    alt={card.title}
    fill
    style={{ objectFit: 'contain' }}
  />
</div>

{/* Tekst - preostali prostor 40% */}
<div className="flex flex-col items-center justify-center h-2/5">
  <h3 className="text-2xl md:text-3xl font-bold text-[#080D10]">{card.title}</h3>
  <p className="mt-4 text-[#080D10]">{card.description}</p>
</div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScrollCards;
