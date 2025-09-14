'use client';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  return (
    <section className="bg-yellow-500 min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Mali tekst */}
<motion.div
  className="
    mb-6 sm:mb-0
    w-full
    sm:absolute sm:top-6 sm:left-4 sm:translate-x-0
    flex flex-col items-center sm:items-start
  "
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <p className="text-[#080D10] font-semibold max-w-[85vw] sm:max-w-sm md:max-w-md
                text-[clamp(0.875rem,2vw,1.125rem)] sm:text-[clamp(1rem,2vw,1.25rem)]
                md:text-[clamp(1.125rem,2vw,1.375rem)] leading-relaxed
                text-center sm:text-left
                pl-0 sm:pl-4 border-l-0 sm:border-l-4 border-[#080D10] relative">
    OVO JE ONO ŠTO RADIMO.
    <br />
    ZAMISLITE ŠTO MOŽEMO NAPRAVITI ZA VAS.
    
    {/* Horizontalna linija na mobilnim */}
    <motion.span
      className="absolute left-1/2 bottom-0 w-0 h-[2px] sm:hidden bg-[#080D10] mt-1"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
      style={{ transformOrigin: "left", translateX: "-50%" }}
    />
  </p>
</motion.div>




      {/* Glavni tekst */}
      <div className="mt-6 sm:mt-28">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-extrabold text-[#080D10] leading-tight text-[clamp(2.5rem,6vw,4rem)] sm:text-[clamp(3rem,5vw,5rem)] md:text-[clamp(3.5rem,4vw,6rem)] lg:text-[clamp(4rem,3vw,7rem)]"
        >
          STVORIMO
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative inline-block font-extrabold text-[#080D10] leading-tight text-[clamp(2.5rem,6vw,4rem)] sm:text-[clamp(3rem,5vw,5rem)] md:text-[clamp(3.5rem,4vw,6rem)] lg:text-[clamp(4rem,3vw,7rem)]"
        >
          NEŠTO{" "}
          <span className="relative inline-block">
            POSEBNO
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-0 -bottom-2 w-full h-[clamp(0.75rem,2vw,1.5rem)] sm:h-[clamp(1rem,2vw,2rem)] md:h-[clamp(1.25rem,2vw,2.5rem)] lg:h-[clamp(1.5rem,2vw,3rem)] origin-left"
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
        className="mt-12 px-6 py-2 sm:px-8 sm:py-3 rounded-2xl bg-[#EBECE7] text-[#080D10] font-semibold shadow-lg hover:bg-[#080D10] hover:text-white transition-colors duration-300 cursor-pointer"
      >
        POSTANIMO PARTNERI
      </motion.button>
    </section>
  );
}
