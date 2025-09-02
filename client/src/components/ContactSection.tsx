"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-yellow-500 min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Mali tekst gore lijevo */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute sm:top-6 sm:left-4 md:top-10 md:left-10 text-black font-semibold max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base md:text-lg leading-relaxed"
      >
        OVO JE ONO ŠTO RADIMO.
        <br />
        ZAMISLITE ŠTO MOŽEMO NAPRAVITI ZA VAS.
      </motion.p>

      {/* Glavni tekst */}
      <div className="mt-28 sm:mt-32">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight"
        >
          STVORIMO
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight"
        >
          NEŠTO{" "}
          <span className="relative inline-block">
            POSEBNO
            {/* pastelni underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-0 -bottom-2 w-full h-3 sm:h-4 md:h-5 lg:h-6 origin-left"
              style={{
                backgroundImage: "url('/underline/contact.png')", // PNG ili SVG pastelni trag u /public
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </span>
        </motion.h1>
      </div>

      {/* Gumb */}
      <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
  className="mt-12 px-8 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg 
             hover:bg-black hover:text-white transition-colors duration-300"
>
  POSTANIMO PARTNERI
</motion.button>

    </section>
  );
}
