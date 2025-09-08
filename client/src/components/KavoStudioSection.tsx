'use client';

import React from "react";
import Image from "next/image";

const KavoStudioSection: React.FC = () => {
  return (
    <section className="bg-[#EBECE7] text-[#080D10] py-20 px-6 md:px-16">
      {/* Naslov */}
      <div className="relative text-center mb-16 md:mb-20">
      <h2 className="font-extrabold inline-flex gap-4 relative text-[clamp(2.5rem,8vw,6rem)] sm:text-[clamp(3.5rem,8vw,7rem)] md:text-[clamp(5rem,7vw,9rem)]">
  {/* Dio s linijom */}
  <span className="relative inline-block">
    <span className="relative z-10">KAVO</span>
    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0">
      <Image
        src="/underline/kavo.png"
        alt="Dekorativna žuta linija"
        width={500}
        height={80}
        className="w-full h-auto"
        priority
      />
    </div>
  </span>
  {/* Dio bez linije */}
  <span>STUDIO</span>
</h2>

      </div>

      {/* Glavni sadržaj */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
        {/* Lijevi blok */}
        <div className="flex flex-col justify-between h-full">
          <p className="text-lg sm:text-xl leading-relaxed uppercase border-l-4 border-[#080D10] pl-4">
            Agencija koju vode dvoje mladih kreativaca, vizionara i radoholičara. Pomažemo poduzećima i startupovima da
            budu vidljivi online. Ne radimo samo web stranice – mi ih dizajniramo, razvijamo, održavamo i oglašavamo,
            tako da se vi možete fokusirati na svoje klijente.
          </p>

          <div className="relative w-full sm:w-3/4 md:w-full h-64 sm:h-80 md:h-[420px] mx-auto mt-8 md:mt-10">
            <Image
              src="/avatars/Adam.png"
              alt="Kreativac s laptopom"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desni blok */}
        <div className="flex flex-col justify-between h-full text-center md:text-left">
          <div className="relative w-full sm:w-3/4 md:w-full h-64 sm:h-80 md:h-[420px] mx-auto mb-8 md:mb-10">
            <Image
              src="/avatars/Nina.png"
              alt="Dizajner na olovci"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="text-lg sm:text-xl leading-relaxed uppercase border-r-4 border-[#080D10] pr-4">
            Usudujemo se biti drugačiji. Dok svijet često slijedi gotove obrasce, mi tražimo ono što vaš brend čini
            posebnim i pretvaramo to u digitalno iskustvo koje ljudi pamte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KavoStudioSection;
