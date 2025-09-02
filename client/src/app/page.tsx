'use client';

import Hero from '@/components/Hero/Hero';
import StatementSection from '@/components/StatementSection';
import ScrollCards from '@/components/ScrollCards';

export default function HomePage() {



  return (
    <main className="bg-[#080D10] text-white">
      <Hero />

      {/* Love sekcija – bijela pozadina */}
      <StatementSection />


      <ScrollCards />

      <section className="w-full min-h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-3xl font-bold">O meni</h2>
      </section>

      <section className="w-full min-h-screen flex items-center justify-center bg-gray-800">
        <h2 className="text-3xl font-bold">Projekti</h2>
      </section>
    </main>
  );
}
