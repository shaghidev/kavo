'use client';

import { motion } from 'framer-motion';
import React from 'react';

// --- Typewriter Word ---
interface TypewriterWordProps {
  text: string;
  delay?: number;
}

function TypewriterWord({ text, delay = 0 }: TypewriterWordProps) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.6 }}
    >
      {text}
    </motion.span>
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
  offset = 6,
  height = 20,
}: AccentUnderlineImageProps) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <img
        src={imageSrc}
        alt="underline"
        className="absolute left-0 right-0 mx-auto bottom-0 w-full object-contain"
        style={{
          bottom: -offset,
          height: `${height}px`,
        }}
      />
    </span>
  );
}

// --- Accent Circle Word ---
interface AccentCircleWordProps {
  children: React.ReactNode;
  imageSrc: string;
  offset?: number;
}

function AccentCircleWord({
  children,
  imageSrc,
  offset = 0,
}: AccentCircleWordProps) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <img
        src={imageSrc}
        alt="circle word"
        className="absolute left-0 right-0 mx-auto bottom-0 w-full h-auto object-contain"
        style={{
          bottom: -offset,
        }}
      />
    </span>
  );
}

// --- Statement Section ---
export default function StatementSection() {
  const lines: (React.ReactNode | string)[][] = [
    ['Volimo'],
    [
      <AccentUnderlineImage
        key="dizajn"
        imageSrc="/underline/words1.png"
        offset={8}
        height={28} // malo veći za veći tekst
      >
        dizajn,
      </AccentUnderlineImage>,
    ],
    [
      <AccentUnderlineImage
        key="tehno"
        imageSrc="/underline/words2.png"
        offset={8}
        height={28}
      >
        tehnologiju 
      </AccentUnderlineImage>,
      '  i',
    ],
    ['stvaranje'],
    ['digitalnih'],
    [
      <AccentCircleWord
        key="iskustva"
        imageSrc="/underline/words3.png"
        offset={0}
      >
        iskustava
      </AccentCircleWord>,
    ],
    ['koja ljudi'],
    ['pamtе.'],
  ];

  let delayCounter = 0;

  return (
    <section className="relative isolate flex items-center justify-center min-h-[80vh] w-full bg-[#EBECE7] px-6 py-16">
      <div className="mx-auto w-full max-w-[780px] text-center pt-8">
        <h1 className="font-extrabold tracking-tight leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line.map((word, j) => {
                delayCounter += 0.15;
                if (typeof word === 'string') {
                  return <TypewriterWord key={j} text={` ${word}`} delay={delayCounter} />;
                }
                return (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: delayCounter, duration: 0.3 }}
                    viewport={{ once: false, amount: 0.6 }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
