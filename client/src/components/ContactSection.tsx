'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  return (
    <section className="bg-yellow-500 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Mali tekst gore lijevo */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-6 sm:top-8 md:top-10 left-4 sm:left-6 md:left-10 text-black font-semibold max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md text-[clamp(0.8rem,2vw,1rem)] sm:text-base md:text-lg leading-relaxed"
      >
        OVO JE ONO ŠTO RADIMO.
        <br />
        ZAMISLITE ŠTO MOŽEMO NAPRAVITI ZA VAS.
      </motion.p>

      {/* Glavni tekst */}
      <div className="mt-24 sm:mt-28 md:mt-32 flex flex-col items-center md:items-start text-center md:text-left max-w-3xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,8vw,4rem)] sm:text-[clamp(3rem,6vw,5rem)] md:text-[clamp(4rem,5vw,6rem)] lg:text-[clamp(5rem,4vw,7rem)] font-extrabold text-black leading-tight"
        >
          STVORIMO
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative inline-block text-[clamp(2.5rem,8vw,4rem)] sm:text-[clamp(3rem,6vw,5rem)] md:text-[clamp(4rem,5vw,6rem)] lg:text-[clamp(5rem,4vw,7rem)] font-extrabold text-black leading-tight mt-2 sm:mt-4"
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
              className="absolute left-0 -bottom-2 w-full h-[clamp(6px,1.2vw,24px)] origin-left"
              style={{
                backgroundImage: "url('/underline/contact.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </span>
        </motion.h1>
      </div>

      {/* Gumb */}
      <motion.button
        onClick={() => router.push("/contact")}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="mt-12 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-black font-semibold shadow-lg 
                   hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer text-[clamp(0.9rem,2vw,1.25rem)] sm:text-base"
      >
        POSTANIMO PARTNERI
      </motion.button>
    </section>
  );
}
