'use client';
import React from "react";

const IstrazivanjePage: React.FC = () => {
  return (
    <main className="bg-[#FFBD00] text-black min-h-screen px-6 md:px-16 py-10 flex flex-col items-center">
      {/* Naslov */}
      <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-4 tracking-tight text-center">
        ISTRAŽIVANJE
      </h1>
      <p className="uppercase text-sm md:text-base font-semibold mb-10 max-w-2xl text-center">
        Prije nego što krenemo u dizajn i razvoj, prvo zastanemo i napravimo ono najvažnije – istražimo.
      </p>

      {/* Uvodni blok */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8 max-w-6xl w-full">
        <div className="bg-white px-6 py-4 shadow-md rounded-lg text-sm max-w-xl">
          Istraživanje nam omogućuje da razumijemo vaše tržište, vaše idealne klijente i konkurenciju. 
          To je faza koja postavlja čvrste temelje za sve što dolazi kasnije.
        </div>
        {/* Slika skroz desno */}
        <div className="flex-1 flex justify-end">
          <img
            src="/istrazivanje/Istrazivanje1.png"
            alt="Ideja ilustracija"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </section>

      {/* 1. Idealni klijenti */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8 max-w-6xl w-full">
        {/* Tekst lijevo */}
        <div className="flex-1 bg-white px-6 py-4 shadow-md rounded-lg text-sm">
          <h2 className="font-bold uppercase mb-2">Idealni klijenti</h2>
          U ovoj fazi pokušavamo shvatiti tko su tvoji idealni klijenti, koje
          karakteristike imaju, kojim se poslom bave i kakve vrijednosti
          zastupaju. Tek kada to dobro razumijemo, možemo pronaći rješenja koja
          odgovaraju njihovim stvarnim potrebama i ciljevima.
        </div>
        {/* Slika desno */}
        <div className="flex-1 flex justify-center">
          <img
            src="/istrazivanje/Istrazivanje2.png"
            alt="Klijent ilustracija"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </section>

      {/* 2. Konkurencija (slika lijevo, tekst desno) */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between mb-20 gap-8 max-w-6xl w-full">
        {/* Tekst desno */}
        <div className="flex-1 bg-white px-6 py-4 shadow-md rounded-lg text-sm">
          <h2 className="font-bold uppercase mb-2">Konkurencija</h2>
          Istražujemo tko su vaši glavni konkurenti, što nude i kako se
          predstavljaju. Analiziramo njihove web stranice, ponude i recenzije
          kako bismo otkrili što rade dobro i gdje postoje prilike da se vaš
          brend istakne. Tako dobivamo jasnu sliku tržišta i stvaramo strategiju
          koja vam daje prednost.
        </div>
        {/* Slika lijevo */}
        <div className="flex-1 flex justify-center">
          <img
            src="/istrazivanje/Istrazivanje3.png"
            alt="Konkurencija ilustracija"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </section>

      {/* 3. Strategija */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8 max-w-6xl w-full">
        {/* Tekst lijevo */}
        <div className="flex-1 bg-white px-6 py-4 shadow-md rounded-lg text-sm">
          <h2 className="font-bold uppercase mb-2">Strategija</h2>
          Na kraju povezujemo sve prikupljene informacije i oblikujemo jasne
          smjernice za vašu buduću web stranicu. To znači da ćemo točno znati
          što treba naglasiti, kako se pozicionirati i na koji način kreirati
          web stranicu koja će zaista privući pažnju.
        </div>
        {/* Slika desno */}
        <div className="flex-1 flex justify-center">
          <img
            src="/istrazivanje/Istrazivanje4.png"
            alt="Strategija ilustracija"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </section>

      {/* Zaključak */}
      <footer className="max-w-3xl text-sm mt-12 font-medium text-center">
        Istraživanje je možda korak koji se ne vidi odmah izvana, ali ono je ono
        što daje čvrste temelje svemu što radimo poslije – od strategije do
        samog dizajna i razvoja.
      </footer>
    </main>
  );
};

export default IstrazivanjePage;
