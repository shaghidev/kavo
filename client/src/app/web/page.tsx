// app/page.tsx
"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFB800] text-[#080D10] font-sans">
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        {/* Naslov */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">WEB DIZAJN</h1>
          <p className="text-sm max-w-lg mx-auto">
            WEB DIZAJN JE SAMO JEDAN DIO – TU JE I UX, GRAFIKA, BOJE, FONTOVI I
            STRUKTURA STRANICE KOJA PRUŽA FUNKCIONALNOST I PRIVLAČNOST.
          </p>
        </header>

        {/* Sekcija 1 */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="/slike/ideja.png"
              alt="Ilustracija ideje"
              width={200}
              height={200}
            />
          </div>
          <p className="text-center max-w-2xl mx-auto text-sm">
            NAŠ CILJ JE DA VAŠA STRANICA BUDE JEDINSTVENA KOMBINACIJA
            PRIVLAČNOG I MODERNOG DIZAJNA KOJI ĆE PRIVUĆI VAŠE KLIJENTE, A
            ISTOVREMENO IM PONUDITI JEDNOSTAVNU NAVIGACIJU I SJAJNO
            KORISNIČKO ISKUSTVO.
          </p>
        </div>

        {/* Responsivnost */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="/slike/responsivnost.png"
              alt="Ilustracija responsivnosti"
              width={300}
              height={200}
            />
          </div>
          <h2 className="text-xl font-bold">RESPONSIVNOST</h2>
          <p className="text-sm max-w-2xl">
            VAŠA WEB STRANICA MORA BITI PRILAGOĐENA PRIKAZU PUTEM RAZLIČITIH
            UREĐAJA. BILO DA SE RADI O RAČUNALU, TABLETU ILI MOBILNOM UREĐAJU,
            NAŠI DIZAJNI SE AUTOMATSKI PRILAGOĐAVAJU SVIH FORMATIMA.
          </p>
        </div>

        {/* Za ljude i tražilice */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="/slike/laptop.png"
              alt="Ilustracija za ljude i tražilice"
              width={250}
              height={200}
            />
          </div>
          <h2 className="text-xl font-bold">ZA LJUDE I TRAŽILICE</h2>
          <p className="text-sm max-w-2xl">
            KOMBINIRAMO NAJBOLJE PRAKSE UX-A I SEO-A. VAŠA WEB STRANICA NEĆE
            SAMO LIJEPO IZGLEDATI, NEGO ĆE BITI I OPTIMIZIRANA ZA TRAŽILICE,
            ŠTO ZNAČI DA ĆE VAŠE USLUGE LAKŠE PRONAĆI POTENCIJALNI KLIJENTI.
          </p>
        </div>

        {/* Rezultati */}
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <Image
              src="/slike/ruke.png"
              alt="Ilustracija ruku"
              width={400}
              height={200}
            />
          </div>
          <h2 className="text-xl font-bold">DIZAJN KOJI DONOSI REZULTATE</h2>
          <p className="text-sm max-w-2xl mx-auto">
            NAŠ DIZAJN WEB STRANICA RADI ZA VAS I VAŠE POSLOVNE CILJEVE. GLAVNA
            MISIJA JE STVORITI STRANICU KOJA ĆE PRIVUĆI POZORNOST, ZADRŽATI
            KLIJENTE I PRETVORITI POSJETITELJE U STALNE KORISNIKE VAŠIH
            USLUGA.
          </p>
        </div>
      </section>
    </main>
  );
}
