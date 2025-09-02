"use client";

import { motion } from "framer-motion";
import React from "react";

function TypewriterWord({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.6 }} // svaki put kad uđe u viewport
    >
      {text}
    </motion.span>
  );
}

export default function StatementSection() {
  const lines: (React.ReactNode | string)[][] = [
    ["Volimo"],
    [
      <AccentUnderline key="dizajn" color="#F2C64C" offset={8} stroke={12} squiggle>
        dizajn,
      </AccentUnderline>,
    ],
    [
      <AccentUnderline key="tehno" color="#5D3DF0" stroke={14} thickness={8}>
        tehnologiju
      </AccentUnderline>,
      " i",
    ],
    ["stvaranje"],
    ["digitalnih"],
    [
      <AccentCircle
        key="iskustva"
        color="#FF3B5C"
        stroke={10}
        paddingX={22}
        paddingY={6}
      >
        iskustava
      </AccentCircle>,
    ],
    ["koja ljudi"],
    ["pamtе."],
  ];

  let delayCounter = 0;

  return (
<section className="relative isolate flex items-center justify-center min-h-[100vh] w-full bg-[#EBECE7] px-6 py-24">
  <div className="mx-auto w-full max-w-[780px] text-center pt-[68px]">
    <h1 className="font-extrabold tracking-tight leading-[1.08] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black">
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line.map((word, j) => {
            delayCounter += 0.15;
            if (typeof word === "string") {
              return (
                <TypewriterWord
                  key={j}
                  text={` ${word}`}
                  delay={delayCounter}
                />
              );
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

// --- dekoracije ---
function AccentUnderline({ children, color = "#FFD54F", stroke = 12, thickness = 0, offset = 6, squiggle = false }: any) {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        className="absolute left-0 right-0 mx-auto -z-0"
        style={{ bottom: -offset }}
        width="100%"
        height={squiggle ? stroke * 2 : Math.max(stroke, thickness)}
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        {squiggle ? (
          <path
            d="M2 12 Q 10 2 18 12 T 34 12 T 50 12 T 66 12 T 82 12 T 98 12"
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
          />
        ) : (
          <rect
            x="0"
            y={10 - stroke / 2}
            width="100"
            height={stroke}
            rx={3}
            fill={color}
          />
        )}
      </svg>
    </span>
  );
}

function AccentCircle({
  children,
  color = "#FF3B5C",
  stroke = 10,
  paddingX = 18,
  paddingY = 4,
}: any) {
  return (
    <span
      className="relative inline-block"
      style={{ padding: `${paddingY}px ${paddingX}px` }}
    >
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        className="absolute inset-0 -z-0"
        width="100%"
        height="100%"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          d="M6 20c0-9 19-16 44-16s44 7 44 16-19 16-44 16S6 29 6 20Z"
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
