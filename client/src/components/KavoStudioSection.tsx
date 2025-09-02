import React from "react";

const KavoStudioSection: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-6 md:px-16">
      {/* Naslov */}
      <h2 className="text-6xl md:text-8xl font-extrabold text-center mb-20 relative inline-block">
        <span className="relative z-10">KAVO STUDIO</span>
        {/* Sprej linija iza naslova */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[110%] h-6 bg-yellow-400 blur-md -z-10"></span>
      </h2>

      {/* Glavni sadržaj */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Lijevi blok */}
        <div className="flex flex-col justify-between h-full border-l-4 border-gray-900 pl-6">
          <p className="text-xl leading-relaxed uppercase">
            Agencija koju vode dvoje mladih kreativaca, vizionara i radoholičara. Pomažemo poduzećima i startupovima da
            budu vidljivi online. Ne radimo samo web stranice – mi ih dizajniramo, razvijamo, održavamo i oglašavamo,
            tako da se vi možete fokusirati na svoje klijente.
          </p>
          <img
            src="/avatars/Adam.png"
            alt="Kreativac s laptopom"
            className="w-full md:w-[70%] mx-auto mt-10"
          />
        </div>

        {/* Desni blok */}
        <div className="flex flex-col justify-between h-full border-r-4 border-gray-900 pr-6 text-right md:text-left">
          <img
            src="/avatars/Nina.png"
            alt="Dizajner na olovci"
            className="w-full md:w-[70%] mx-auto mb-10"
          />
          <p className="text-xl leading-relaxed uppercase">
            Usudujemo se biti drugačiji. Dok svijet često slijedi gotove obrasce, mi tražimo ono što vaš brend čini
            posebnim i pretvaramo to u digitalno iskustvo koje ljudi pamte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KavoStudioSection;
