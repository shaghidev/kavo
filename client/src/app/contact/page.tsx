"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Simple Typewriter that reveals characters one by one and shows a blinking caret
function Typewriter({ text, speed = 25 }: { text: string; speed?: number }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplay("");
    const id = window.setInterval(() => {
      setDisplay(() => text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        window.clearInterval(id);
      }
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return (
    <span className="typewriter inline-block">
      {display}
      <span className="ml-0.5 inline-block animate-blink">|</span>
      <style jsx>{`
        .animate-blink { animation: blink 1s steps(2,start) infinite; }
        @keyframes blink { to { opacity: 0; } }
      `}</style>
    </span>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    projectDetails: "",
    foundBy: "",
    helpWith: [] as string[],
    budget: "",
  });

  const toggleMulti = (field: "helpWith", value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full bg-[#080D10] text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* H1 centriran */}
      <motion.h1
        initial={{ opacity: 0, y: -30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-5xl sm:text-1xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-yellow-400 uppercase leading-none mb-12"
      >
        Razgovarajmo
      </motion.h1>

      {/* Podnaslov skroz desno */}
      <div className="w-full flex justify-end mb-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-yellow-400 text-lg md:text-xl leading-relaxed border-r-4 border-yellow-400 pr-6 max-w-[60%] text-right"
        >
          <Typewriter
            text={`Bilo da tek skicirate ideju za svoj novi projekt ili jednostavno želite porazgovarati o digitalnim mogućnostima – sjajno! Tu smo da pretvorimo vaše misli u stvarnu, funkcionalnu i modernu web stranicu.`}
            speed={14}
          />
        </motion.p>
      </div>

      {/* Forma */}
      <form onSubmit={handleSubmit} className="w-full max-w-5xl space-y-10 font-sans">
        {/* Ime i tvrtka */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col md:flex-row gap-2 text-lg"
        >
          <span className="self-center">Bok! Moje ime je</span>
          <input
            type="text"
            placeholder="Upišite svoje ime*"
            className="flex-1 border-b border-gray-500 bg-transparent px-2 focus:outline-none placeholder:text-gray-500 focus:cursor-pointer"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <span className="self-center">i radim u</span>
          <input
            type="text"
            placeholder="Upišite naziv tvrtke*"
            className="flex-1 border-b border-gray-500 bg-transparent px-2 focus:outline-none placeholder:text-gray-500 focus:cursor-pointer"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </motion.div>

        {/* Pronašao/la sam vas putem */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-3 font-medium">Pronašao/la sam vas putem:</p>
          <div className="flex flex-wrap gap-3">
            {["Preporuke", "Google pretrage", "Društvenih mreža", "Drugo"].map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setForm({ ...form, foundBy: opt })}
                className={`px-4 py-2 rounded-full font-medium border transition focus:cursor-pointer ${
                  form.foundBy === opt
                    ? "bg-yellow-400 text-[#080D10] border-yellow-400"
                    : "bg-transparent border-gray-400 text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Trebam pomoć oko */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <p className="mb-3 font-medium">
            Trebam pomoć oko: <span className="text-gray-400 text-sm">(Možete označiti više)</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {["Dizajna nove web stranice", "Izrade web stranice", "Redizajna postojeće stranice", "Održavanja web stranice"].map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => toggleMulti("helpWith", opt)}
                className={`px-4 py-2 rounded-full font-medium border transition focus:cursor-pointer ${
                  form.helpWith.includes(opt)
                    ? "bg-yellow-400 text-[#080D10] border-yellow-400"
                    : "bg-transparent border-gray-400 text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Budžet */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-3 font-medium">Planiram okvirni budžet od:</p>
          <div className="flex flex-wrap gap-3">
            {["Ispod 1.000 €", "1.000 € – 5.000 €", "5.000 € – 10.000 €", "10.000 €+"].map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setForm({ ...form, budget: opt })}
                className={`px-4 py-2 rounded-full font-medium border transition focus:cursor-pointer ${
                  form.budget === opt
                    ? "bg-yellow-400 text-[#080D10] border-yellow-400"
                    : "bg-transparent border-gray-400 text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col md:flex-row items-center gap-2 text-lg"
        >
          <span>Slobodno me kontaktirajte na</span>
          <input
            type="email"
            placeholder="Upišite e-mail adresu*"
            className="flex-1 border-b border-gray-500 bg-transparent px-2 focus:outline-none placeholder:text-gray-500 focus:cursor-pointer"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <span>kako bismo započeli razgovor.</span>
        </motion.div>

        {/* Projekt detalji */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="mb-3 font-medium">Rado bih vam ispričao/la više o svom projektu:</p>
          <textarea
            placeholder="Upišite detalje projekta"
            className="w-full border-b border-gray-500 bg-transparent px-2 py-2 focus:outline-none placeholder:text-gray-500 focus:cursor-pointer"
            rows={3}
            value={form.projectDetails}
            onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
          />
        </motion.div>

        {/* Footer + Submit */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center justify-between"
        >
          <label className="flex items-center gap-2 text-xs text-gray-500 leading-tight">
            <input type="checkbox" className="accent-yellow-400 focus:cursor-pointer" />
            Prijavom na ovaj obrazac pristajete na naše opće uvjete poslovanja.
          </label>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-[#080D10] font-semibold rounded-lg hover:bg-yellow-300 transition"
          >
            Krenimo →
          </motion.button>
        </motion.div>
      </form>
    </section>
  );
}
