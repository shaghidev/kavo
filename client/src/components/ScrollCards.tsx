'use client';

import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { useRef, memo } from 'react';
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

// Memorizirani Card komponenta za bolje performanse
const AnimatedCard = memo(({ 
  card, 
  index, 
  yTransform, 
  opacityTransform,
  prefersReducedMotion 
}: {
  card: Card;
  index: number;
  yTransform: MotionValue<string>;
  opacityTransform: MotionValue<number>;
  prefersReducedMotion: boolean;
}) => (
  <motion.div
    style={{ 
      y: prefersReducedMotion ? 0 : yTransform, 
      opacity: prefersReducedMotion ? 1 : opacityTransform 
    }}
    className="sticky top-32 flex justify-center will-change-transform"
  >
    <div className="w-[80%] xs:w-[65%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] aspect-square flex flex-col items-center justify-center">
      <div
        className="
          bg-[#EBECE7] rounded-[36px] sm:rounded-[42px] md:rounded-[52px]
          transition-all duration-300 ease-out
          flex flex-col items-center justify-between text-center
          p-4 sm:p-6 md:p-8 h-full w-full
          shadow-[0_10px_25px_rgba(0,0,0,0.35),0_20px_50px_rgba(0,0,0,0.25),0_30px_80px_rgba(0,0,0,0.15)]
          hover:shadow-[0_15px_35px_rgba(0,0,0,0.45),0_25px_60px_rgba(0,0,0,0.35),0_40px_100px_rgba(0,0,0,0.25)]
          transform-gpu
        "
        style={{ transform: `rotate(${card.rotate})` }}
      >
        <div className="w-full h-[70%] relative mb-2 sm:mb-3">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
            className="object-contain"
            priority={index < 2}
            loading={index < 2 ? 'eager' : 'lazy'}
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
));

AnimatedCard.displayName = 'AnimatedCard';

const ScrollCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Kreiranje svih useTransform hook-ova na top level
  const cardCount = cards.length;
  
  // Y transformacije za svaku karticu
  const yTransform0 = useTransform(scrollYProgress, [0 / cardCount, 1 / cardCount], ['100%', '0%']);
  const yTransform1 = useTransform(scrollYProgress, [1 / cardCount, 2 / cardCount], ['100%', '0%']);
  const yTransform2 = useTransform(scrollYProgress, [2 / cardCount, 3 / cardCount], ['100%', '0%']);
  const yTransform3 = useTransform(scrollYProgress, [3 / cardCount, 4 / cardCount], ['100%', '0%']);
  
  // Opacity transformacije za svaku karticu
  const opacityTransform0 = useTransform(scrollYProgress, [0 / cardCount, 1 / cardCount], [0, 1]);
  const opacityTransform1 = useTransform(scrollYProgress, [1 / cardCount, 2 / cardCount], [0, 1]);
  const opacityTransform2 = useTransform(scrollYProgress, [2 / cardCount, 3 / cardCount], [0, 1]);
  const opacityTransform3 = useTransform(scrollYProgress, [3 / cardCount, 4 / cardCount], [0, 1]);

  const yTransforms = [yTransform0, yTransform1, yTransform2, yTransform3];
  const opacityTransforms = [opacityTransform0, opacityTransform1, opacityTransform2, opacityTransform3];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FFBD00] text-[#080D10] py-16 md:py-32 flex flex-col items-center"
    >
      {/* Naslov */}
      <div className="relative text-center mb-16 px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1]
          }}
          className="font-extrabold leading-tight break-words text-[clamp(2.5rem,6vw,6rem)] md:text-[clamp(3.5rem,5vw,8rem)] lg:text-[clamp(4.5rem,4vw,9rem)]"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1]
            }}
          >
            U ČEMU SMO
          </motion.span>{' '}
          <span className="relative inline-block">
            <motion.span
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ 
                duration: 0.7,
                delay: 0.4,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              style={{ transformOrigin: '50% 50%' }}
              className="inline-block"
            >
              STVARNO
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className="absolute left-0 bottom-0 w-full h-auto origin-left"
            >
              <Image
                src="/underline/cards.png"
                alt="Underline decoration"
                width={800}
                height={100}
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-auto object-contain pointer-events-none select-none"
              />
            </motion.div>
          </span>{' '}
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.4, 0.25, 1]
            }}
          >
            DOBRI
          </motion.span>
        </motion.h2>
      </div>

      {/* Kartice */}
      <div className="relative h-[400vh] w-full">
        {cards.map((card, i) => (
          <AnimatedCard
            key={`card-${i}`}
            card={card}
            index={i}
            yTransform={yTransforms[i]}
            opacityTransform={opacityTransforms[i]}
            prefersReducedMotion={prefersReducedMotion || false}
          />
        ))}
      </div>
    </section>
  );
};

export default ScrollCards;