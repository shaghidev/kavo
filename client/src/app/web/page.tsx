'use client';
import React from "react";

const WebDizajnPage: React.FC = () => {
  return (
    <main className="bg-[#FFBD00] text-black min-h-screen px-6 md:px-16 py-10">
      {/* Naslov */}
      <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-4 tracking-tight">
        WEB DIZAJN
      </h1>
      <p className="uppercase text-sm md:text-base font-semibold mb-10 max-w-3xl">
        Web dizajn nije samo lijep izgled – to je način da ispričate priču svom
        brendu i ostavite dobar prvi dojam kod posjetitelja.
      </p>

      {/* Uvodni blok */}
      <section className="flex flex-col md:flex-row items-start md:items-center mb-20 gap-8">
        <div className="flex-1">
          <img
            src="/images/design-intro.svg"
            alt="Web dizajn ilustracija"
            className="w-48 md:w-60"
          />
        </div>
        <div className="bg-white px-6 py-4 shadow-md rounded-lg text-sm flex-1">
          Naš cilj je da vaša stranica bude jednostavna za korištenje i ugodna
          za pregledavanje. Biramo boje, tipografiju i vizualne elemente koji
          najbolje predstavljaju vas, ali uvijek razmišljamo i o tome kako će se
          posjetitelji kretati kroz stranicu. Želimo da im sve bude jasno,
          logično i lako dostupno.
        </div>
      </section>

      {/* Responsivnost */}
      <section className="flex flex-col md:flex-row items-start md:items-center mb-20 gap-8">
        <div className="flex-1">
          <img
            src="/images/responsive.svg"
            alt="Responsivnost ilustracija"
            className="w-40 md:w-52"
          />
        </div>
        <div className="bg-white px-6 py-4 shadow-md rounded-lg text-sm flex-1">
          <h2 className="font-bold uppercase mb-2">Responsivnost</h2>
          Većina ljudi danas pretražuje internet putem mobitela, pa je važno da
          stranica izgleda odlično na svakom ekranu. Zato radimo responsivan
          dizajn – onaj koji se automatski prilagođava mobitelu, tabletu ili
          računalu. Tako vaši klijenti uvijek dobivaju najbolje iskustvo, bez
          obzira odakle dolaze.
        </div>
      </section>

      {/* Za ljude i tražilice */}
      <section className="flex flex-col md:flex-row items-start md:items-center mb-20 gap-8">
        <div className="flex-1">
          <img
            src="/images/seo.svg"
            alt="SEO ilustracija"
            className="w-40 md:w-52"
          />
        </div>
        <div className="bg-white px-6 py-4 shadow-md rounded-lg text-sm flex-1">
          <h2 className="font-bold uppercase mb-2">Za ljude i tražilice</h2>
          Dobar dizajn nije samo za ljude – voli ga i Google. Kada je stranica
          pregledna, brza i jednostavna za korištenje, to pomaže i boljem
          rangiranju na tražilicama. Zato pazimo da vaša stranica bude lijepa i
          funkcionalna, ali optimizirana tako da vas potencijalni klijenti lakše
          pronađu.
        </div>
      </section>

      {/* Dizajn koji donosi rezultate */}
      <section className="flex flex-col md:flex-row items-start md:items-center mb-20 gap-8">
        <div className="flex-1">
          <img
            src="/images/results.svg"
            alt="Rezultati ilustracija"
            className="w-40 md:w-52"
          />
        </div>
        <div className="bg-white px-6 py-4 shadow-md rounded-lg text-sm flex-1">
          <h2 className="font-bold uppercase mb-2">
            Dizajn koji donosi rezultate
          </h2>
          Na kraju, web dizajn za nas nije samo stvar vizualnog dojma. On ima
          zadatak pomoći vam da ostvarite svoje ciljeve – bilo da želite privući
          nove klijente, prodati proizvod ili jednostavno predstaviti svoj brend
          na najbolji način. Naš zadatak je stvoriti dizajn koji će raditi za
          vas, a ne samo lijepo izgledati.
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl text-sm mt-12 font-medium">
        Web dizajn za nas nije samo estetika – to je kombinacija funkcionalnosti
        i strategije, osmišljena da vašu priču prikaže na najbolji mogući način.
      </footer>
    </main>
  );
};

export default WebDizajnPage;
