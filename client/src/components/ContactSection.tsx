'use client';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  return (
    <section className="bg-[#FFBD00] min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Mali tekst */}
<motion.div
  className="
    mb-6 sm:mb-0
    w-full
    sm:absolute sm:top-8 sm:left-12 lg:top-12 lg:left-20 sm:translate-x-0
    flex flex-col items-center sm:items-start
  "
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <p className="text-[#080D10] font-semibold max-w-[85vw] sm:max-w-sm md:max-w-md lg:max-w-lg
                text-[clamp(0.875rem,2vw,1.125rem)] sm:text-[clamp(1rem,2vw,1.25rem)]
                md:text-[clamp(1.125rem,2vw,1.375rem)] lg:text-[clamp(1.25rem,1.5vw,1.5rem)] leading-relaxed
                text-center sm:text-left
                pl-0 sm:pl-4 lg:pl-6 border-l-0 sm:border-l-2 lg:border-l-3 border-[#080D10] relative">
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
      <div className="mt-6 sm:mt-16 lg:mt-0 flex flex-col items-center lg:items-end justify-center lg:flex-1 text-center lg:text-right">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-extrabold text-[#080D10] leading-tight text-[clamp(2.8rem,7vw,5rem)] sm:text-[clamp(3.5rem,6vw,6rem)] md:text-[clamp(4rem,5vw,7rem)] lg:text-[clamp(5.5rem,7vw,10rem)] mb-1 sm:mb-2 lg:mb-0"
        >
          STVORIMO
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative inline-block font-extrabold text-[#080D10] leading-tight text-[clamp(2.8rem,7vw,5rem)] sm:text-[clamp(3.5rem,6vw,6rem)] md:text-[clamp(4rem,5vw,7rem)] lg:text-[clamp(5.5rem,7vw,10rem)]"
        >
          NEŠTO{" "}
          <span className="relative inline-block">
            POSEBNO
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-[-10%] -bottom-2 lg:-bottom-4 w-[120%] h-[clamp(0.75rem,2vw,1.5rem)] sm:h-[clamp(1rem,2vw,2rem)] md:h-[clamp(1.25rem,2vw,2.5rem)] lg:h-[clamp(2rem,3vw,4rem)] origin-left"
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
        whileHover={{ 
          scale: 1.08,
          y: -5,
          boxShadow: "0 20px 40px rgba(8, 13, 16, 0.3)",
          backgroundColor: "#080D10",
          color: "#FFBD00"
        }}
        whileTap={{ 
          scale: 0.95,
          y: 2
        }}
        animate={{
          y: [0, -3, 0],
          boxShadow: [
            "0 5px 15px rgba(8, 13, 16, 0.1)",
            "0 10px 25px rgba(8, 13, 16, 0.15)",
            "0 5px 15px rgba(8, 13, 16, 0.1)"
          ]
        }}
        transition={{ 
          duration: 0.3,
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="mt-6 sm:mt-8 lg:mt-0 mb-8 lg:mb-16 px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-2xl bg-[#EBECE7] text-[#080D10] font-semibold text-[clamp(0.875rem,2vw,1.125rem)] lg:text-[clamp(1rem,1.5vw,1.25rem)] shadow-lg hover:bg-[#080D10] hover:text-[#FFBD00] transition-colors duration-300 cursor-pointer relative overflow-hidden"
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <span className="relative z-10">POSTANIMO PARTNERI</span>
      </motion.button>
    </section>
  );
}
