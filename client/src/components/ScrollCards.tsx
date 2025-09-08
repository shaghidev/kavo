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
    rotate: '0',
  },
  {
    title: 'WEB od povjerenja',
    description: 'Svaka stranica koju napravimo pokazuje da ste ozbiljni i da vrijedi vjerovati u vaš brend.',
    image: '/cards/web.png',
    rotate: '-4.35deg',
  },
  {
    title: 'Dizajn koji uvjerava',
    description: 'Posjetitelje pretvaramo u kupce kroz pametna rješenja.',
    image: '/cards/dizajn.png',
    rotate: '10.53deg',
  },
  {
    title: 'Pouzdani partner',
    description: 'Vaš uspjeh je i naš uspjeh, zato smo uvijek uz vas.',
    image: '/cards/partneri.png',
    rotate: '3.98deg',
  },
];

const ScrollCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transformacije - definirane direktno u komponenti
  const yTransforms = [
    useTransform(scrollYProgress, [0 / cards.length, 1 / cards.length], ['100%', '0%']),
    useTransform(scrollYProgress, [1 / cards.length, 2 / cards.length], ['100%', '0%']),
    useTransform(scrollYProgress, [2 / cards.length, 3 / cards.length], ['100%', '0%']),
    useTransform(scrollYProgress, [3 / cards.length, 4 / cards.length], ['100%', '0%']),
  ];
  
  const opacityTransforms = [
    useTransform(scrollYProgress, [0 / cards.length, 1 / cards.length], [0, 1]),
    useTransform(scrollYProgress, [1 / cards.length, 2 / cards.length], [0, 1]),
    useTransform(scrollYProgress, [2 / cards.length, 3 / cards.length], [0, 1]),
    useTransform(scrollYProgress, [3 / cards.length, 4 / cards.length], [0, 1]),
  ];
  

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FFBD00] text-[#080D10] py-16 md:py-32 flex flex-col items-center"
    >
      {/* Naslov */}
      <div className="relative text-center mb-16 px-4 max-w-6xl">
        <h2 className="font-extrabold leading-tight break-words text-[clamp(2.5rem,6vw,6rem)] md:text-[clamp(3.5rem,5vw,8rem)] lg:text-[clamp(4.5rem,4vw,9rem)]">
          U ČEMU SMO{' '}
          <span className="relative inline-block">
            STVARNO
            <Image
              src="/underline/cards.png"
              alt="underline"
              width={800}
              height={100}
              className="absolute left-0 bottom-0 w-full h-auto object-contain pointer-events-none select-none"
            />
          </span>{' '}
          DOBRI
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
            <div
              className="
                w-[80%] xs:w-[65%] sm:w-[55%] md:w-[50%] lg:w-[40%]
                aspect-square
                flex flex-col items-center justify-center
              "
            >
              <div
                className="
                  bg-[#EBECE7] rounded-[36px] sm:rounded-[42px] md:rounded-[52px]
                  transition-all duration-500
                  flex flex-col items-center justify-between text-center
                  p-4 sm:p-6 md:p-8 h-full w-full
                  shadow-[0_10px_25px_rgba(0,0,0,0.35),0_20px_50px_rgba(0,0,0,0.25),0_30px_80px_rgba(0,0,0,0.15)]
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.45),0_25px_60px_rgba(0,0,0,0.35),0_40px_100px_rgba(0,0,0,0.25)]
                "
                style={{ transform: `rotate(${card.rotate})` }}
              >
                <div className="w-full h-[70%] relative mb-2 sm:mb-3">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center justify-center h-[30%]">
                  <h3 className="font-bold text-[#080D10] text-[clamp(1.3rem,2.5vw,2rem)] md:text-[clamp(2rem,2vw,2.5rem)]">
                    {card.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-[#080D10] text-[clamp(0.9rem,1.5vw,1.1rem)] max-w-[90%]">
                    {card.description}
                  </p>
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
