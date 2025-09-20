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
  { title: 'Vidljivost koja prodaje', description: 'Pomažemo malim biznisima da ih kupci lako pronađu i zapamte kroz strategijski dizajn.', image: '/cards/prodaja.png', rotate: '0' },
  { title: 'WEB od povjerenja', description: 'Svaka stranica koju napravimo pokazuje da ste ozbiljni i da vrijedi vjerovati u vaš brend kroz profesionalni pristup.', image: '/cards/web.png', rotate: '-4.35deg' },
  { title: 'Dizajn koji uvjerava', description: 'Posjetitelje pretvaramo u kupce kroz pametna rješenja i intuitivno korisničko iskustvo.', image: '/cards/dizajn.png', rotate: '10.53deg' },
  { title: 'Pouzdani partner', description: 'Vaš uspjeh je i naš uspjeh, zato smo uvijek uz vas u svakom koraku poslovnog rasta.', image: '/cards/partneri.png', rotate: '3.98deg' },
];

// Memoizirana kartica za bolje performanse
const AnimatedCard = memo(({ card, yTransform, opacityTransform, prefersReducedMotion }: {
  card: Card;
  yTransform: MotionValue<string>;
  opacityTransform: MotionValue<number>;
  prefersReducedMotion: boolean;
}) => (
  <motion.div
    style={{ y: prefersReducedMotion ? 0 : yTransform, opacity: prefersReducedMotion ? 1 : opacityTransform }}
    className="sticky top-1/2 -translate-y-1/2 flex justify-center will-change-transform"
  >
    <div className="w-[85%] xs:w-[75%] sm:w-[60%] md:w-[45%] lg:w-[38%] xl:w-[32%] 2xl:w-[28%] aspect-square flex flex-col items-center justify-center">
      <div
        className="bg-[#EBECE7] rounded-[28px] xs:rounded-[32px] sm:rounded-[36px] md:rounded-[42px] lg:rounded-[48px] xl:rounded-[52px] flex flex-col items-center justify-between text-center p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 h-full w-full shadow-2xl hover:shadow-3xl transition-all duration-300 ease-out transform-gpu border border-black/5"
        style={{ 
          transform: `rotate(${card.rotate})`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="w-full h-[65%] xs:h-[68%] sm:h-[70%] relative mb-1 xs:mb-2 sm:mb-3">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 480px) 85vw, (max-width: 640px) 75vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, (max-width: 1280px) 38vw, 32vw"
            className="object-contain"
            priority
            loading="eager"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-[35%] xs:h-[32%] sm:h-[30%]">
          <h3 className="font-bold text-[#080D10] text-[clamp(1.1rem,4vw,1.6rem)] xs:text-[clamp(1.2rem,3.5vw,1.8rem)] sm:text-[clamp(1.4rem,3vw,2rem)] md:text-[clamp(1.6rem,2.8vw,2.2rem)] lg:text-[clamp(1.8rem,2.5vw,2.4rem)] xl:text-[clamp(2rem,2.2vw,2.6rem)] leading-tight mb-1 xs:mb-2">{card.title}</h3>
          <p className="text-[#080D10] text-[clamp(0.7rem,2.5vw,0.9rem)] xs:text-[clamp(0.8rem,2.2vw,1rem)] sm:text-[clamp(0.9rem,2vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.2rem)] lg:text-[clamp(1.1rem,1.6vw,1.3rem)] xl:text-[clamp(1.2rem,1.4vw,1.4rem)] max-w-[95%] leading-relaxed">{card.description}</p>
        </div>
      </div>
    </div>
  </motion.div>
));

AnimatedCard.displayName = 'AnimatedCard';

const ScrollCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  const cardCount = cards.length;

  // Y transformacije
const yTransform0 = useTransform(scrollYProgress, [0 / cardCount, 1 / cardCount], ['100%', '0%']);
const yTransform1 = useTransform(scrollYProgress, [1 / cardCount, 2 / cardCount], ['100%', '0%']);
const yTransform2 = useTransform(scrollYProgress, [2 / cardCount, 3 / cardCount], ['100%', '0%']);
const yTransform3 = useTransform(scrollYProgress, [3 / cardCount, 4 / cardCount], ['100%', '0%']);

// Opacity transformacije
const opacityTransform0 = useTransform(scrollYProgress, [0 / cardCount, 1 / cardCount], [0, 1]);
const opacityTransform1 = useTransform(scrollYProgress, [1 / cardCount, 2 / cardCount], [0, 1]);
const opacityTransform2 = useTransform(scrollYProgress, [2 / cardCount, 3 / cardCount], [0, 1]);
const opacityTransform3 = useTransform(scrollYProgress, [3 / cardCount, 4 / cardCount], [0, 1]);

const yTransforms = [yTransform0, yTransform1, yTransform2, yTransform3];
const opacityTransforms = [opacityTransform0, opacityTransform1, opacityTransform2, opacityTransform3];

  return (
    <section ref={containerRef} className="relative w-full bg-[#FFBD00] text-[#080D10] py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 flex flex-col items-center">
      {/* Naslov */}
      <div className="relative text-center mb-12 xs:mb-14 sm:mb-16 px-3 xs:px-4 sm:px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-extrabold leading-tight break-words text-[clamp(2rem,8vw,4rem)] xs:text-[clamp(2.2rem,7.5vw,4.5rem)] sm:text-[clamp(2.5rem,7vw,5rem)] md:text-[clamp(3rem,6vw,6rem)] lg:text-[clamp(3.5rem,5.5vw,7rem)] xl:text-[clamp(4rem,5vw,8rem)] 2xl:text-[clamp(4.5rem,4.5vw,9rem)]"
        >
          <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.25,0.4,0.25,1] }}>U ČEMU SMO</motion.span>{' '}
          <span className="relative inline-block">
            <motion.span initial={{ opacity: 0, rotateX: 90 }} animate={{ opacity: 1, rotateX: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: [0.25,0.4,0.25,1] }} style={{ transformOrigin: '50% 50%' }} className="inline-block">STVARNO</motion.span>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.25,0.4,0.25,1] }} className="absolute left-0 bottom-0 w-full h-auto origin-left">
              <Image src="/underline/cards.png" alt="Underline decoration" width={800} height={100} priority sizes="(max-width: 768px) 100vw, 800px" className="w-full h-auto object-contain pointer-events-none select-none" />
            </motion.div>
          </span>{' '}
          <motion.span initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6, ease: [0.25,0.4,0.25,1] }}>DOBRI</motion.span>
        </motion.h2>
      </div>

      {/* Kartice */}
      <div className="relative w-full" style={{ height: `${cardCount * 100}vh` }}>
        {cards.map((card, i) => (
          <AnimatedCard key={`card-${i}`} card={card} yTransform={yTransforms[i]} opacityTransform={opacityTransforms[i]} prefersReducedMotion={prefersReducedMotion || false} />
        ))}
      </div>
    </section>
  );
};

export default ScrollCards;
