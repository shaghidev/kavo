'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const IstrazivanjePage: React.FC = () => {
  return (
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-32 md:pt-40 flex flex-col items-center">

      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-6 tracking-tight text-center px-4"
      >
        ISTRAŽIVANJE
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="uppercase text-sm md:text-base font-semibold mb-4 w-full text-center px-4 md:px-8 leading-[127.3%] tracking-[0.5px]"
      >
        Prije nego što krenemo u dizajn i razvoj, prvo zastanemo i napravimo ono
        najvažnije – istražimo.
      </motion.p>

      {/* Border ispod podnaslova */}
      <div className="w-4/5 h-[1px] bg-[#080D10] mx-auto mb-16 mt-16"></div>

      {/* 1. Uvodni blok */}
      <section className="relative flex flex-col md:flex-row items-center mb-10 w-screen md:w-full overflow-hidden">
        <div className="relative flex-1 w-screen md:w-full">
          {/* Pozadina */}
          <div className="absolute inset-0 w-screen md:w-full h-full">
            <Image
              src="/istrazivanje/bg1.png"
              alt="Pozadina uvodnog teksta"
              fill
              className="object-cover object-top-left"
            />
          </div>

          {/* Tekst */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="relative w-full px-4 md:px-8 py-6 text-sm max-w-xl mx-auto md:ml-16 z-10"
          >
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
              Istraživanje nam omogućuje da razumijemo vaše tržište, vaše
              idealne klijente i konkurenciju. To je faza koja postavlja čvrste
              temelje za sve što dolazi kasnije.
            </p>
          </motion.div>
        </div>

        {/* Ilustracija */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="hidden md:flex flex-1 justify-end items-center"
        >
          <div className="w-[40vw] max-w-[500px] aspect-[589/623] relative">
            <Image
              src="/istrazivanje/Istrazivanje1.png"
              alt="Ideja ilustracija"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Ilustracija za mobilne */}
        <div className="md:hidden mt-6 w-full flex justify-end">
          <div className="w-full max-w-[300px] aspect-[589/623] relative">
            <Image
              src="/istrazivanje/Istrazivanje1.png"
              alt="Ideja ilustracija"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Idealni klijenti */}
      <section className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-10 gap-15 w-full overflow-hidden min-h-[750px] md:min-h-[850px] lg:min-h-[950px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 w-full"
        >
          <div className="absolute -inset-y-12 -inset-x-12 right-0 w-[120%] h-full">
            <Image
              src="/istrazivanje/bg2.png"
              alt="Pozadina tekst"
              fill
              className="object-cover object-top-left rounded-lg"
            />
          </div>
          <div className="relative px-6 md:px-8 py-20 z-10">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">
              Idealni klijenti
            </h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
              U ovoj fazi pokušavamo shvatiti tko su tvoji idealni klijenti,
              koje karakteristike imaju, kojim se poslom bave i kakve
              vrijednosti zastupaju. Tek kada to dobro razumijemo, možemo
              pronaći rješenja koja odgovaraju njihovim stvarnim potrebama i
              ciljevima.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/istrazivanje/Istrazivanje2.png"
            alt="Klijent ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </motion.div>
      </section>

      {/* 3. Konkurencija */}
      <section className="relative flex flex-col md:flex-row items-center justify-between mb-10 gap-15 w-full overflow-hidden min-h-[750px] md:min-h-[850px] lg:min-h-[950px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 w-full"
        >
          <div className="absolute -inset-y-8 -inset-x-12 left-0 w-[120%] h-full">
            <Image
              src="/istrazivanje/bg3.png"
              alt="Pozadina tekst"
              fill
              className="object-cover object-top-left rounded-lg"
            />
          </div>
          <div className="relative px-6 md:px-8 py-10 z-10">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">
              Konkurencija
            </h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
              Istražujemo tko su vaši glavni konkurenti, što nude i kako se
              predstavljaju. Analiziramo njihove web stranice, ponude i
              recenzije kako bismo otkrili što rade dobro i gdje postoje prilike
              da se vaš brend istakne. Tako dobivamo jasnu sliku tržišta i
              stvaramo strategiju koja vam daje prednost.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/istrazivanje/Istrazivanje3.png"
            alt="Konkurencija ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </motion.div>
      </section>

      {/* 4. Strategija */}
      <section className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-10 gap-15 w-full overflow-hidden min-h-[750px] md:min-h-[850px] lg:min-h-[950px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 w-full"
        >
          <div className="absolute -inset-y-8 -inset-x-12 right-0 w-[120%] h-full">
            <Image
              src="/istrazivanje/bg4.png"
              alt="Pozadina tekst"
              fill
              className="object-cover object-top-left rounded-lg"
            />
          </div>
          <div className="relative px-6 md:px-8 py-10 z-10">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">
              Strategija
            </h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
              Na kraju povezujemo sve prikupljene informacije i oblikujemo jasne
              smjernice za vašu buduću web stranicu. To znači da ćemo točno
              znati što treba naglasiti, kako se pozicionirati i na koji način
              kreirati web stranicu koja će zaista privući pažnju.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/istrazivanje/Istrazivanje4.png"
            alt="Strategija ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </motion.div>
      </section>

      {/* Zaključak */}
{/* Zaključak */}
<motion.footer
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
  viewport={{ once: false }}
  className="w-3/4 mx-auto mb-30 text-lg md:text-xl lg:text-2xl mt-0 font-semibold text-center px-6 md:px-8 leading-[140%] tracking-[0.5px]"
>
  Istraživanje je možda korak koji se ne vidi odmah izvana, ali ono je ono
  što daje čvrste temelje svemu što radimo poslije – od strategije do
  samog dizajna i razvoja.
</motion.footer>


    </main>
  );
};

export default IstrazivanjePage;
