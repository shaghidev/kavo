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
  return (
    <motion.span
      className="inline-block mr-2" // manji razmak između riječi
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
  delay = 0,
}: AccentUnderlineImageProps & { delay?: number }) {
  return (
    <span className="relative inline-block mr-2">
      <span className="relative z-10">{children}</span>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          delay: delay,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        viewport={{ once: false, amount: 0.6 }}
        style={{
          position: 'absolute',
          left: 0,
          bottom: -offset,
          width: '100%',
          height: `${height}px`,
          transformOrigin: 'left',
        }}
      >
        <Image
          src={imageSrc}
          alt="underline"
          fill
          className="object-contain"
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
  delay?: number; // Add delay prop
}

function AccentCircleWord({
  children,
  imageSrc,
  offset = 0,
  delay = 0, // Add delay parameter
}: AccentCircleWordProps) {
  return (
    <span className="relative inline-block mr-2">
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute left-0 right-0 mx-auto w-full h-full"
        style={{ bottom: -offset }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          delay: delay,
          duration: 0.8,
          ease: 'easeOut',
        }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <Image
          src={imageSrc}
          alt="circle word"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </span>
  );
}

// --- Statement Section ---
export default function StatementSection() {
  const textDelay = 0.15; // delay between words
  const underlineStartDelay = 2; // when to start underline animations
  const underlineDelay = 0.8; // delay between underlines

  const lines: (React.ReactNode | string)[][] = [
    ['Volimo'],
    [
      <AccentUnderlineImage
        key="dizajn"
        imageSrc="/underline/words1.png"
        offset={8}
        height={28}
        delay={underlineStartDelay}
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
          delay={underlineStartDelay + underlineDelay}
        >
          tehnologiju
        </AccentUnderlineImage>,
        ' i',
      ],
    ['stvaranje'],
    ['digitalnih'],
    [
      <AccentCircleWord
        key="iskustva"
        imageSrc="/underline/words3.png"
        offset={0}
        delay={underlineStartDelay + underlineDelay * 2} // Add delay after underlines
      >
        iskustava
      </AccentCircleWord>,
    ],
    ['koja ljudi'],
    ['pamtе.'],
  ];

  let delayCounter = 0;

  return (
    <section className="relative isolate flex items-center justify-center h-screen w-full bg-[#EBECE7] px-6">
      <div className="mx-auto w-full max-w-[780px] text-center py-32 md:py-40">
        <h1 className="font-extrabold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#080D10]">
          {lines.map((line, i) => (
            <span key={i} className="block mb-3">
              {line.map((word, j) => {
                delayCounter += textDelay; // Use textDelay constant instead of hardcoded 0.15
                if (typeof word === 'string') {
                  return <TypewriterWord key={j} text={word} delay={delayCounter} />;
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
