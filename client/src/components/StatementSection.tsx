'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// --- Typewriter Word ---
interface TypewriterWordProps {
  text: string;
  delay?: number;
}

function TypewriterWord({ text, delay = 0 }: TypewriterWordProps) {
  const letters = text.split('');
  const letterDelay = 0.02; // ubrzano sa 0.04 na 0.02
  
  return (
    <span className="inline-block mr-2">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: delay + (index * letterDelay), // svako slovo se pojavljuje nakon prethodnog
            duration: 0.03, // skračeno sa 0.05 na 0.03
            ease: 'easeOut'
          }}
          viewport={{ once: false, amount: 0.4 }}
        >
          {letter === ' ' ? '\u00A0' : letter} {/* non-breaking space za razmake */}
        </motion.span>
      ))}
    </span>
  );
}

// --- Accent Image Underline ---
interface AccentUnderlineImageProps {
  children: React.ReactNode;
  imageSrc: string;
  offset?: number;
  height?: number;
}

function AccentUnderlineImage({
  children,
  imageSrc,
  offset = 8,
  height = 28,
  delay = 0,
}: AccentUnderlineImageProps & { delay?: number }) {
  const text = typeof children === 'string' ? children : 'dizajn,'; // fallback
  const letters = text.split('');
  const letterDelay = 0.02; // ubrzano sa 0.04 na 0.02

  return (
    <span className="relative inline-block mr-2">
      <span className="relative z-10">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: delay + (index * letterDelay),
              duration: 0.03, // skračeno sa 0.05 na 0.03
              ease: 'easeOut'
            }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </span>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          delay: delay + (text.length * letterDelay) + 0.05, // skračeno sa 0.1 na 0.05
          duration: 0.2, // skračeno sa 0.4 na 0.2
          ease: 'easeInOut',
        }}
        viewport={{ once: false, amount: 0.4 }}
        className="absolute left-0 w-full origin-left"
        style={{
          bottom: `-${offset}px`,
          height: `${height}px`,
        }}
      >
        <Image
          src={imageSrc}
          alt="underline"
          fill
          className="object-contain object-bottom" // dodao object-bottom za bolje pozicioniranje
          priority
        />
      </motion.div>
    </span>
  );
}

// --- Accent Circle Word ---
interface AccentCircleWordProps {
  children: React.ReactNode;
  imageSrc: string;
  offset?: number;
  delay?: number;
}

function AccentCircleWord({
  children,
  imageSrc,
  offset = 10,
  delay = 0,
}: AccentCircleWordProps) {
  const text = typeof children === 'string' ? children : 'iskustava'; // fallback
  const letters = text.split('');
  const letterDelay = 0.02; // ubrzano sa 0.04 na 0.02

  return (
    <span className="relative inline-block mr-2">
      <span className="relative z-10">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: delay + (index * letterDelay),
              duration: 0.03, // skračeno sa 0.05 na 0.03
              ease: 'easeOut'
            }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </span>
      <motion.div
        className="absolute"
        style={{ 
          width: '130%', // povećao za bolju pokrivenost
          height: '130%', // povećao za bolju pokrivenost
          bottom: `-${offset}px`, // vratil na čisti offset
          left: '-15%', // popravio razmak i poziciju
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          delay: delay + (text.length * letterDelay) + 0.05, // skračeno sa 0.1 na 0.05
          duration: 0.2, // skračeno sa 0.4 na 0.2
          ease: 'easeOut',
        }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <Image
          src={imageSrc}
          alt="circle word"
          fill
          className="object-contain object-center" // dodao object-center za bolje centriranje
          priority
        />
      </motion.div>
    </span>
  );
}

// --- Statement Section ---
export default function StatementSection() {
  const letterDelay = 0.02; // ubrzano sa 0.04 na 0.02
  const wordPause = 0.05; // skračeno sa 0.1 na 0.05
  
  // Prvo prebrojimo sve riječi i slova
  const allWords = [
    'Volimo',
    'dizajn,',
    'tehnologiju', 
    'i',
    'stvaranje',
    'digitalnih',
    'iskustava',
    'koja', 'ljudi',
    'pamte.'
  ];

  const lines: ((delay: number) => React.ReactNode | string)[][] = [
    [() => 'Volimo'],
    [
      (delay: number) => (
        <AccentUnderlineImage
          key="dizajn"
          imageSrc="/underline/words1.png"
          offset={6}
          height={30}
          delay={delay}
        >
          dizajn,
        </AccentUnderlineImage>
      ),
    ],
    [
      (delay: number) => (
        <AccentUnderlineImage
          key="tehno"
          imageSrc="/underline/words2.png"
          offset={6}
          height={30}
          delay={delay}
        >
          tehnologiju
        </AccentUnderlineImage>
      ),
      () => ' i',
    ],
    [() => 'stvaranje'],
    [() => 'digitalnih'],
    [
      (delay: number) => (
        <AccentCircleWord
          key="iskustva"
          imageSrc="/underline/words3.png"
          offset={8}
          delay={delay}
        >
          iskustava
        </AccentCircleWord>
      ),
    ],
    [() => 'koja ljudi'],
    [() => 'pamte.'],
  ];

  let delayCounter = 0;

  return (
    <section className="relative isolate flex items-center justify-center min-h-screen w-full bg-[#EBECE7] px-6">
      <div className="mx-auto w-full max-w-[780px] text-center py-20 xs:py-24 sm:py-28 md:py-32 lg:py-40">
        <h1 className="font-extrabold tracking-tight leading-[0.9] text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-[#080D10]">
          {lines.map((line, i) => (
            <span key={i} className="block mb-3">
              {line.map((wordFunc, j) => {
                // Računamo delay za svaku riječ na osnovu prethodnih riječi
                let wordStartDelay = 0;
                for (let k = 0; k < delayCounter; k++) {
                  const prevWord = allWords[k];
                  if (prevWord) {
                    wordStartDelay += prevWord.length * letterDelay + wordPause;
                  }
                }
                
                const result = wordFunc(wordStartDelay);
                delayCounter++; // brojimo redoslijed riječi
                
                if (typeof result === 'string') {
                  return <TypewriterWord key={j} text={result} delay={wordStartDelay} />;
                }
                
                return (
                  <span key={j}>
                    {result}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
