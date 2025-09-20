"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const IstrazivanjePage: React.FC = () => {
  return (
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-32 md:pt-40 flex flex-col items-center overflow-x: hidden; ">
      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-6 tracking-tight text-center px-4"
      >
        Održavanje
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="uppercase text-sm md:text-base font-semibold mb-8 w-full text-center px-4 md:px-8 leading-relaxed tracking-[0.5px]"
      >
        Prije nego što krenemo u dizajn i razvoj, prvo zastanemo i napravimo ono
        najvažnije – istražimo.
      </motion.p>

      {/* Border ispod podnaslova */}
      <div className="w-4/5 h-[1px] bg-[#080D10] mx-auto mb-20"></div>

      {/* --- SEKCIJE --- */}

      {/* 1. Uvodni blok */}
      <section className="relative flex flex-col md:flex-row items-center mb-20 w-full overflow-hidden">
        <div className="relative flex-1 w-full">
          {/* Pozadina */}
          <div className="absolute inset-0">
            <Image
              src="/istrazivanje/bg1.png"
              alt="Pozadina uvodnog teksta"
              fill
              className="object-cover object-left-top"
            />
          </div>

          {/* Tekst */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="relative w-full px-6 md:px-10 py-10 text-base max-w-xl mx-auto md:ml-16 z-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              STALNA PODRŠKA
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed tracking-[0.5px]">
              Redovito pratimo performanse, ažuriramo sustave i pazimo na
              sigurnost podataka. To znači da ne morate razmišljati o tehničkim
              detaljima – mi smo tu da rješavamo probleme prije nego što ih vi
              ili vaši klijenti uopće primijetite.
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
              src="/odrzavanje/Odrzavanje1.png"
              alt="Ideja ilustracija"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Ilustracija za mobilne */}
        <div className="md:hidden mt-6 w-full flex justify-center">
          <div className="w-full max-w-[300px] aspect-[589/623] relative">
            <Image
              src="/odrzavanje/Odrzavanje1.png"
              alt="Ideja ilustracija"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Idealni klijenti */}
      <section className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-20 gap-12 w-full overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 w-full"
        >
          <div className="absolute inset-0">
            <Image
              src="/istrazivanje/bg2.png"
              alt="Pozadina tekst"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative px-6 md:px-10 py-16 z-10">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              Svjež sadržaj
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed tracking-[0.5px]">
              Web stranica živi samo ako se redovito obnavlja. Po potrebi
              unosimo nove sadržaje, fotografije i vijesti, kako bi vaši
              posjetitelji uvijek pronašli nešto aktualno i vrijedno pažnje.
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
            src="/odrzavanje/Odrzavanje2.png"
            alt="Klijent ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </motion.div>
      </section>

      {/* 3. Konkurencija */}
      <section className="relative flex flex-col md:flex-row items-center justify-between mb-20 gap-12 w-full overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 w-full"
        >
          <div className="absolute inset-0">
            <Image
              src="/istrazivanje/bg3.png"
              alt="Pozadina tekst"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative px-6 md:px-10 py-16 z-10">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              DIGITALNI RAST
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed tracking-[0.5px]">
              Održavanje ne staje na webu – pomažemo vam i u širem digitalnom
              nastupu. Nudimo vođenje društvenih mreža, kreiranje i upravljanje
              kampanjama, email marketing i druge usluge koje zajedno s vašom
              web stranicom čine snažan online nastup.
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
            src="/odrzavanje/Odrzavanje3.png"
            alt="Konkurencija ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </motion.div>
      </section>

      {/* 4. Samo slika na kraju */}
      <section className="w-full flex justify-center items-center my-20">
        <div className="w-full max-w-3xl aspect-[589/623] relative">
          <Image
            src="/odrzavanje/Odrzavanje4.png"
            alt="Strategija ilustracija"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Zaključak */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: false }}
        className="w-3/4 mx-auto mb-20 text-lg md:text-xl lg:text-2xl font-semibold text-center px-6 md:px-8 leading-relaxed tracking-[0.5px]"
      >
        Naša misija nije samo izrada web stranice, nego i dugoročna suradnja. Uz
        nas imate partnera koji će pratiti vaš digitalni razvoj i pomagati vam
        da uvijek budete korak ispred konkurencije.
      </motion.footer>
    </main>
  );
};

export default IstrazivanjePage;
